'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
    ChevronDown,
    ChevronRight,
    Plus
} from 'lucide-react';
import ActionBar from '@/src/components/board/action-bar/ActionBar';
import BoardHeader from '@/src/components/board/BoardHeader';
import TanStackBoardTable from '@/src/components/board/TanStackBoardTable';
import boardTemplates from '@/src/config/boardTemplates';

const BoardPage = () => {
    const params = useParams();
    const boardId = params.templateId; // Mapping templateId to boardId logic

    // Initialize state with consistent defaults for SSR
    const [boardName, setBoardName] = useState('Loading...');
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [hiddenColumns, setHiddenColumns] = useState([]);
    const [currentSort, setCurrentSort] = useState(null);
    const [currentGroupBy, setCurrentGroupBy] = useState(null);
    const [filteredGroups, setFilteredGroups] = useState([]);

    // Board Data
    const [groups, setGroups] = useState([]);
    const [boardColumns, setBoardColumns] = useState([]);
    const [statusConfig, setStatusConfig] = useState({});
    const [addItemText, setAddItemText] = useState('+ Add item');

    // Initialize Data
    useEffect(() => {
        if (!boardId) return;

        const loadData = () => {
            try {
                // Use v3 prefix to invalidate old cache and force re-sync with new template columns
                const savedName = localStorage.getItem(`board_v3_name_${boardId}`);
                const savedGroups = localStorage.getItem(`board_v3_groups_${boardId}`);
                const savedColumns = localStorage.getItem(`board_v3_columns_${boardId}`);
                const savedStatus = localStorage.getItem(`board_v3_status_${boardId}`);

                if (savedName && savedGroups && savedColumns) {
                    const parsedName = JSON.parse(savedName);
                    const parsedGroups = JSON.parse(savedGroups);
                    let parsedCols = JSON.parse(savedColumns);
                    const template = boardTemplates[boardId];

                    // FIX: Check for "broken" empty state
                    const isGenericFallback = parsedName === 'Untitled Board' && parsedGroups.length === 0;

                    if (isGenericFallback && template) {
                        setBoardName(template.title);
                        setGroups(template.groups || []);
                        setBoardColumns(template.columns || []);
                        setStatusConfig(template.statusConfig || {});
                        setAddItemText(template.addItemText || '+ Add item');
                    } else {
                        setBoardName(parsedName);
                        setGroups(parsedGroups);

                        // FIX: Ensure 'name' column always exists (recover from bad cache)
                        if (!parsedCols.some(c => c.id === 'name')) {
                            const nameCol = template?.columns?.find(c => c.id === 'name') ||
                                { id: 'name', title: 'Item', type: 'text', width: 250, editable: true };
                            parsedCols = [nameCol, ...parsedCols];
                        }

                        setBoardColumns(parsedCols);
                        setStatusConfig(savedStatus ? JSON.parse(savedStatus) : {});

                        if (template) {
                            setAddItemText(template.addItemText || '+ Add item');
                        }
                    }
                } else {
                    // Fallback to Template Config
                    const template = boardTemplates[boardId];
                    if (template) {
                        setBoardName(template.title);
                        setGroups(template.groups || []);
                        setBoardColumns(template.columns || []);
                        setStatusConfig(template.statusConfig || {});
                        setAddItemText(template.addItemText || '+ Add item');
                    } else {
                        // Generic Fallback
                        setBoardName('Untitled Board');
                        setGroups([]);
                        setBoardColumns([]);
                        setStatusConfig({});
                        setAddItemText('+ Add item');
                    }
                }
            } catch (error) {
                console.error("Failed to load board data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [boardId]);


    // Effect to save state to localStorage whenever it changes
    useEffect(() => {
        if (!loading && boardId) {
            try {
                localStorage.setItem(`board_v3_name_${boardId}`, JSON.stringify(boardName));
                localStorage.setItem(`board_v3_groups_${boardId}`, JSON.stringify(groups));
                localStorage.setItem(`board_v3_columns_${boardId}`, JSON.stringify(boardColumns));
                localStorage.setItem(`board_v3_status_${boardId}`, JSON.stringify(statusConfig));
            } catch (error) {
                console.error("Failed to save to local storage", error);
            }
        }
    }, [boardName, groups, boardColumns, statusConfig, boardId, loading]);

    // Search functionality
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // Filter groups based on search
    useEffect(() => {
        if (!searchQuery) {
            setFilteredGroups(groups);
            return;
        }

        const filtered = groups.map(group => ({
            ...group,
            tasks: group.tasks.filter(task =>
                task.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.email?.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(group => group.tasks.length > 0);

        setFilteredGroups(filtered);
    }, [searchQuery, groups]);

    const toggleGroup = (groupId) => {
        setGroups(groups.map(g =>
            g.id === groupId ? { ...g, expanded: !g.expanded } : g
        ));
    };

    // Add Task
    const handleAddTask = (groupId, taskName) => {
        if (!taskName.trim()) return;

        const newTask = {
            id: Date.now().toString(),
            name: taskName,
            status: null,
            email: '',
            phone: '',
            donated: 0,
            donations: null
        };

        const newGroups = groups.map(g =>
            g.id === groupId ? { ...g, tasks: [...g.tasks, newTask] } : g
        );
        setGroups(newGroups);
    };

    // Update Task
    // Update Task
    // Update Task
    const handleUpdateTask = (taskId, field, value) => {
        setGroups(prevGroups => {
            // 1. First, create a deep copy with the updated value
            let newGroups = prevGroups.map(g => ({
                ...g,
                tasks: g.tasks.map(t => t.id === taskId ? { ...t, [field]: value } : t)
            }));

            // 2. logic for moving item if status changed
            if (field === 'status') {
                // Find the task and its current group
                let taskToMove = null;
                let currentGroupId = null;

                for (const group of newGroups) {
                    const task = group.tasks.find(t => t.id === taskId);
                    if (task) {
                        taskToMove = task;
                        currentGroupId = group.id;
                        break;
                    }
                }

                if (taskToMove) {
                    let targetGroupId = null;

                    // Board-specific status-to-group mappings
                    const boardStatusMappers = {
                        'donors': {
                            'active': 'active',
                            'potential': 'potential'
                        },
                        'project-management': {
                            'done': 'finished',
                            'working': 'active',
                            'stuck': 'active',
                            'not_started': 'active'
                        },
                        'volunteer-registration': {
                            'active': 'active',
                            'past': 'past',
                            'new': 'new'
                        },
                        'grants-pipeline': {
                            'submitted': 'submitted',
                            'awarded': 'active', // or logic to keep awarded separate
                            'working': 'active'
                        }
                    };

                    const currentBoardMapper = boardStatusMappers[boardId];

                    if (currentBoardMapper && currentBoardMapper[value]) {
                        const targetId = currentBoardMapper[value];
                        // Check if this target group actually exists in current groups
                        if (newGroups.some(g => g.id === targetId)) {
                            targetGroupId = targetId;
                        }
                    }

                    // Fallback: Check if there's a group with ID equal to the status value
                    if (!targetGroupId && newGroups.some(g => g.id === value)) {
                        targetGroupId = value;
                    }

                    // Special case for 'done' commonly mapping to 'completed' or 'finished' if not caught by mapper
                    if (!targetGroupId && value === 'done') {
                        if (newGroups.some(g => g.id === 'finished')) targetGroupId = 'finished';
                        else if (newGroups.some(g => g.id === 'completed')) targetGroupId = 'completed';
                    }

                    // Only move if we found a valid DIFFERENT target group
                    if (targetGroupId && targetGroupId !== currentGroupId) {
                        newGroups = newGroups.map(g => {
                            if (g.id === currentGroupId) {
                                // Remove from old group
                                return { ...g, tasks: g.tasks.filter(t => t.id !== taskId) };
                            }
                            if (g.id === targetGroupId) {
                                // Add to new group
                                return { ...g, tasks: [...g.tasks, taskToMove] };
                            }
                            return g;
                        });
                    }
                }
            }

            return newGroups;
        });
    };

    // Delete Task
    const handleDeleteTask = (taskId) => {
        const newGroups = groups.map(group => ({
            ...group,
            tasks: group.tasks.filter(task => task.id !== taskId)
        }));
        setGroups(newGroups);
    };

    // Add New Column Handler
    const handleAddColumn = (type) => {
        const newColId = `col_${Date.now()}`;
        const newColumn = {
            id: newColId,
            title: type.charAt(0).toUpperCase() + type.slice(1),
            type: type,
            width: 150
        };
        setBoardColumns([...boardColumns, newColumn]);
    };

    // Handle various actions
    const handleSort = (columnId, order) => setCurrentSort({ column: columnId, order });
    const handleHideColumns = (columnId) => {
        setHiddenColumns(prev => prev.includes(columnId) ? prev.filter(c => c !== columnId) : [...prev, columnId]);
    };
    const handleGroupBy = (columnId) => setCurrentGroupBy(columnId);

    const visibleColumns = boardColumns.filter(c => !hiddenColumns.includes(c.id));

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <BoardHeader boardTitle={boardName} />
            <ActionBar
                columns={boardColumns}
                onSearch={handleSearch}
                onSort={handleSort}
                onHideColumns={handleHideColumns}
                onGroupBy={handleGroupBy}
                hiddenColumns={hiddenColumns}
                currentSort={currentSort}
                currentGroupBy={currentGroupBy}
                onAddTask={() => {
                    if (groups.length > 0) handleAddTask(groups[0].id, "New Item");
                }}
                addItemText={addItemText}
            />

            <div className="p-8 flex-1 overflow-y-auto bg-white">
                {loading ? (
                    <div className="text-center py-10">Loading board...</div>
                ) : (
                    <>
                        {(searchQuery ? filteredGroups : groups).map(group => (
                            <div key={group.id} className="mb-10">
                                {/* Group Header - Aligned to match Monday Design */}
                                <div
                                    className="flex items-center gap-2 mb-3 cursor-pointer group/header"
                                    onClick={() => toggleGroup(group.id)}
                                >
                                    <div className="p-1 rounded hover:bg-gray-100 transition-colors">
                                        {group.expanded ? (
                                            <ChevronDown size={20} style={{ color: group.color }} />
                                        ) : (
                                            <ChevronRight size={20} style={{ color: group.color }} />
                                        )}
                                    </div>
                                    <h3 className="text-[18px] font-normal leading-none" style={{ color: group.color }}>
                                        {group.name}
                                    </h3>
                                    <span className="text-[14px] text-gray-400 font-light ml-2">
                                        {group.tasks.length} {group.tasks.length === 1 ? 'Item' : 'Items'}
                                    </span>
                                </div>

                                {group.expanded && (
                                    <div className="pl-1">
                                        <TanStackBoardTable
                                            data={group.tasks}
                                            columns={visibleColumns}
                                            groupColor={group.color}
                                            statusConfig={statusConfig}
                                            onUpdateTask={handleUpdateTask}
                                            onDeleteTask={handleDeleteTask}
                                            onAddTask={(val) => handleAddTask(group.id, val)}
                                            onAddColumn={handleAddColumn}
                                            onSort={handleSort}
                                            onFilter={handleHideColumns}
                                            onGroupBy={handleGroupBy}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Empty state "Add Group" at bottom */}
                        <div className="mt-4">
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded transition-colors text-sm">
                                <Plus size={16} />
                                <span>Add new group</span>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default BoardPage;