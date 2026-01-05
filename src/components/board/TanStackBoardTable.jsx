'use client';

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import {
    MoreHorizontal,
    Plus,
    User,
    Info,
    Maximize2,
    MessageSquarePlus,
    ChevronDown,
} from "lucide-react";
import ColumnMenu from "./ColumnMenu";
import AddColumnMenu from "./AddColumnMenu";

// Editable Name Cell Component
const EditableNameCell = ({ value, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(value);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleSave = () => {
        if (editValue.trim() !== value) {
            onSave(editValue.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave();
        } else if (e.key === "Escape") {
            setEditValue(value);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        return (
            <input
                ref={inputRef}
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className="w-full bg-white border border-blue-500 rounded px-1 py-0.5 text-[13px] text-[#323338] outline-none h-full"
                onClick={(e) => e.stopPropagation()}
            />
        );
    }

    return (
        <span
            className="truncate flex-1 font-normal min-w-0 leading-tight cursor-text hover:border hover:border-gray-300 rounded px-1 -ml-1 py-0.5 border border-transparent transition-colors"
            onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
            }}
        >
            {value}
        </span>
    );
};

// Status Cell Component (FIXED: Uses calculated fixed positioning to escape table/row bounds)
const StatusCell = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
    const buttonRef = useRef(null);
    const config = options[value] || { label: "", bg: "#c4c4c4" };

    const toggleOpen = (e) => {
        e.stopPropagation();
        if (!isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + 4, // Always below with slight gap
                left: rect.left,      // Aligned with left edge
                width: rect.width     // Match width 
            });
        }
        setIsOpen(!isOpen);
    };

    // Close on scroll or resize to prevent detached menu
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className="relative w-full h-[34px] flex items-center justify-center px-1">
            <button
                ref={buttonRef}
                onClick={toggleOpen}
                className="w-full text-center h-full text-white text-[13px] font-medium flex items-center justify-center hover:opacity-90 transition-opacity rounded-sm relative"
                style={{ backgroundColor: config.bg }}
            >
                {config.label}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[9998] cursor-default"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    />
                    <div
                        className="fixed bg-white shadow-xl rounded-lg z-[9999] p-2 animate-in fade-in zoom-in-95 duration-100 flex flex-col gap-1.5 border border-gray-100"
                        style={{
                            top: coords.top,
                            left: coords.left - 20,
                            width: 190
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {Object.entries(options).map(([key, opt]) => (
                            <div
                                key={key}
                                onClick={() => {
                                    onChange(key);
                                    setIsOpen(false);
                                }}
                                className="h-9 px-4 flex items-center justify-center text-[13px] text-white font-medium cursor-pointer hover:brightness-95 transition-all w-full rounded relative z-10"
                                style={{ backgroundColor: opt.bg }}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// Header Cell Component to manage its own hover state for the tooltip/pill
const MOCK_USERS = [
    { name: 'Sarah Chen', initial: 'SC', color: '#00C875' },
    { name: 'John Doe', initial: 'JD', color: '#7F8D9C' },
    { name: 'Alex Rivera', initial: 'AR', color: '#FDAB3D' },
    { name: 'Emma Wilson', initial: 'EW', color: '#A25DDC' },
    { name: 'David Lee', initial: 'DL', color: '#00C875' },
    { name: 'Mike Ross', initial: 'MR', color: '#FF6B6B' },
    { name: 'You', initial: 'U', color: '#FF6B6B' }
];

const PersonCell = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
    const buttonRef = useRef(null);

    const toggleOpen = (e) => {
        e.stopPropagation();
        if (!isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + 4,
                left: rect.left,
                width: Math.max(rect.width, 220)
            });
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className="relative w-full h-full flex items-center justify-center px-1">
            <div
                ref={buttonRef}
                onClick={toggleOpen}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors w-full h-full min-h-[30px]"
            >
                {value ? (
                    <>
                        <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-medium flex-shrink-0"
                            style={{ backgroundColor: value.color || '#c4c4c4' }}
                        >
                            {value.initial || value.name?.charAt(0) || '?'}
                        </div>
                        <span className="text-[13px] text-[#323338] truncate">{value.name}</span>
                    </>
                ) : (
                    <div className="flex items-center gap-2 text-gray-400 w-full justify-center">
                        <User size={14} />
                    </div>
                )}
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[9998] cursor-default"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    />
                    <div
                        className="fixed bg-white shadow-xl rounded-lg z-[9999] p-2 animate-in fade-in zoom-in-95 duration-100 flex flex-col gap-1 border border-gray-100"
                        style={{
                            top: coords.top,
                            left: coords.left,
                            width: coords.width,
                            maxHeight: '300px',
                            overflowY: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            onClick={() => {
                                onChange(null);
                                setIsOpen(false);
                            }}
                            className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                        >
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                <User size={12} className="text-gray-500" />
                            </div>
                            <span className="text-[13px] text-gray-600">Unassign</span>
                        </div>
                        <div className="h-px bg-gray-100 my-1" />
                        {MOCK_USERS.map((user, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    onChange(user);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded cursor-pointer transition-colors"
                            >
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-medium"
                                    style={{ backgroundColor: user.color }}
                                >
                                    {user.initial}
                                </div>
                                <span className="text-[13px] text-[#323338]">{user.name}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const DateCell = ({ value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    // Helper to parse "Mmm DD, YYYY" to "YYYY-MM-DD"
    const getInputValue = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return '';
        return date.toISOString().split('T')[0];
    };

    // Helper to format "YYYY-MM-DD" to "Mmm DD, YYYY"
    const getDisplayValue = (dateStr) => {
        if (!dateStr) return '';
        // If it's already in display format (basic check)
        if (dateStr.match && dateStr.match(/[A-Za-z]{3} \d{1,2}, \d{4}/)) return dateStr;

        // Treat input as YYYY-MM-DD (local time) to avoid timezone shifts
        const [y, m, d] = dateStr.split('-').map(Number);
        const date = new Date(y, m - 1, d);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const handleChange = (e) => {
        const newValue = e.target.value; // YYYY-MM-DD
        if (!newValue) {
            onChange('');
            setIsEditing(false);
            return;
        }
        const displayValue = getDisplayValue(newValue);
        onChange(displayValue);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <input
                ref={inputRef}
                type="date"
                defaultValue={getInputValue(value)}
                onBlur={() => setIsEditing(false)}
                onChange={handleChange}
                autoFocus
                className="w-full text-[13px] border border-blue-500 rounded px-1 outline-none"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                    if (e.key === 'Escape') setIsEditing(false);
                }}
            />
        );
    }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
            }}
            className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-50 group transition-colors"
        >
            {value ? (
                <span className="text-[13px] text-[#323338]">{value}</span>
            ) : (
                <div className="w-6 h-6 rounded bg-gray-200 group-hover:bg-gray-300 flex items-center justify-center text-gray-500">
                    <Plus size={12} />
                </div>
            )}
        </div>
    );
};

const HeaderCell = ({
    id,
    title,
    type,
    activeMenu,
    setActiveMenu,
    onSort,
    onFilter,
    onGroupBy,
    onRename,
    onDelete,
    onDuplicate,
    onAddToRight,
}) => {
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(title);
    const inputRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleSaveRename = () => {
        if (editValue.trim() && editValue !== title) {
            onRename?.(id, editValue.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSaveRename();
        } else if (e.key === "Escape") {
            setEditValue(title);
            setIsEditing(false);
        }
    };

    return (
        <div className="relative h-full w-full flex items-center justify-center px-2 group">
            <div className="flex items-center gap-1">
                {/* Column Drag/Tooltip Container */}
                <div
                    className="relative flex items-center justify-center cursor-pointer"
                    onMouseEnter={() => setIsTitleHovered(true)}
                    onMouseLeave={() => setIsTitleHovered(false)}
                    onClick={() => setIsEditing(true)}
                >
                    {/* Tooltip */}
                    {isTitleHovered && !isEditing && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#323338] text-white text-xs rounded shadow-lg whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-100 flex items-center justify-center">
                            {title}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#323338]"></div>
                        </div>
                    )}

                    {/* Editable Title */}
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={handleSaveRename}
                            onKeyDown={handleKeyDown}
                            className="px-2 py-1 border-2 border-blue-500 rounded text-sm font-medium focus:outline-none min-w-[100px]"
                            style={{ width: `${Math.max(editValue.length * 8 + 20, 100)}px` }}
                        />
                    ) : (
                        <div
                            className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded transition-colors ${isTitleHovered
                                ? "bg-gray-100 border border-gray-300"
                                : "border border-transparent"
                                }`}
                        >
                            {type === "person" && <User size={14} />}
                            <span>{title}</span>
                        </div>
                    )}
                </div>

                {type !== "text" && !isEditing && (
                    <Info size={13} className="text-gray-400 ml-0.5" />
                )}

                {/* Three Dots Menu - Visible on Header Hover */}
                {!isEditing && (
                    <button
                        ref={menuButtonRef}
                        className={`p-1 hover:bg-gray-200 rounded text-gray-500 transition-opacity ml-1 ${activeMenu === id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                            }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenu(activeMenu === id ? null : id);
                        }}
                    >
                        <MoreHorizontal size={16} />
                    </button>
                )}
            </div>

            {activeMenu === id && (
                <ColumnMenu
                    columnId={id}
                    title={title}
                    triggerRef={menuButtonRef}
                    onClose={() => setActiveMenu(null)}
                    onSort={onSort}
                    onFilter={onFilter}
                    onGroupBy={onGroupBy}
                    onRename={() => {
                        setActiveMenu(null);
                        setIsEditing(true);
                    }}
                    onDelete={onDelete}
                    onDuplicate={onDuplicate}
                    onAddToRight={onAddToRight}
                />
            )}
        </div>
    );
};

const TanStackBoardTable = ({
    data,
    columns: propColumns,
    onUpdateTask,
    onAddTask,
    onAddColumn,
    groupColor,
    statusConfig,
    onSort,
    onFilter,
    onGroupBy,
    onRename,
    onDelete,
    onDuplicate,
    onAddToRight,
}) => {
    const [hoveredHeader, setHoveredHeader] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isAddColumnMenuOpen, setIsAddColumnMenuOpen] = useState(false);
    const [expandedRows, setExpandedRows] = useState(new Set());
    const addColumnButtonRef = useRef(null);

    const toggleRowExpanded = (rowId) => {
        const newExpanded = new Set(expandedRows);
        if (newExpanded.has(rowId)) {
            newExpanded.delete(rowId);
        } else {
            newExpanded.add(rowId);
        }
        setExpandedRows(newExpanded);
    };

    const columnHelper = createColumnHelper();

    const columns = useMemo(() => {
        // Checkbox Column
        const cols = [
            columnHelper.display({
                id: "select",
                header: () => (
                    <div className=" w-full h-full flex items-center justify-center group  cursor-pointer">
                        <div className="w-4 h-4 border border-gray-300 rounded-[3px] bg-white group-hover:border-blue-400 transition-colors"></div>
                    </div>
                ),
                cell: () => (
                    <div className="w-full h-full flex items-center justify-center group bg-white">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded-[3px] text-blue-600 focus:ring-offset-0 focus:ring-0 cursor-pointer opacity-0 group-hover:opacity-100 checked:opacity-100 transition-opacity"
                        />
                    </div>
                ),
                size: 36,
                enableResizing: false,
            }),
        ];

        // Dynamic Columns
        propColumns.forEach((col) => {
            cols.push(
                columnHelper.accessor(col.id, {
                    header: () => (
                        <HeaderCell
                            title={col.title}
                            type={col.type}
                            id={col.id}
                            setHoveredHeader={setHoveredHeader}
                            hoveredHeader={hoveredHeader}
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                            columnId={col.id}
                            onSort={onSort}
                            onFilter={onFilter}
                            onGroupBy={onGroupBy}
                            onRename={onRename}
                            onDelete={onDelete}
                            onDuplicate={onDuplicate}
                            onAddToRight={onAddToRight}
                        />
                    ),
                    cell: (info) => {
                        const val = info.getValue();
                        const rowOriginal = info.row.original;

                        if (col.id === "name") {
                            const isExpanded = expandedRows.has(rowOriginal.id);
                            return (
                                <div className="flex items-center justify-between px-2 h-full group/cell w-full relative overflow-hidden">
                                    <div className="flex items-center gap-1 text-[13px] text-[#323338] min-w-0 flex-1">
                                        {/* Chevron for expand/collapse */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleRowExpanded(rowOriginal.id);
                                            }}
                                            className={`p-0.5 rounded-sm hover:bg-gray-200 text-gray-500 mr-1 transition-transform flex-shrink-0 ${isExpanded ? "" : "-rotate-90"
                                                }`}
                                        >
                                            <ChevronDown size={14} />
                                        </button>
                                        <EditableNameCell
                                            value={val || "New Item"}
                                            onSave={(newValue) => onUpdateTask(rowOriginal.id, col.id, newValue)}
                                        />
                                    </div>

                                    {/* Floating Action Icons on Hover */}
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 opacity-0 group-hover/row:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm pl-2 flex-shrink-0">
                                        <button
                                            className="p-1 hover:bg-gray-200 rounded text-gray-500 flex-shrink-0"
                                            title="Start Conversation"
                                        >
                                            <MessageSquarePlus size={15} />
                                        </button>
                                        <button
                                            className="p-1 hover:bg-gray-200 rounded text-gray-500 flex-shrink-0"
                                            title="Open Item"
                                        >
                                            <Maximize2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        if (col.type === "status") {
                            return (
                                <StatusCell
                                    value={val}
                                    options={statusConfig}
                                    onChange={(newVal) =>
                                        onUpdateTask(rowOriginal.id, col.id, newVal)
                                    }
                                />
                            );
                        }

                        if (col.type === "email") {
                            const [isEditing, setIsEditing] = React.useState(false);
                            const [editValue, setEditValue] = React.useState(val || "");
                            const inputRef = React.useRef(null);

                            React.useEffect(() => {
                                if (isEditing && inputRef.current) {
                                    inputRef.current.focus();
                                    inputRef.current.select();
                                }
                            }, [isEditing]);

                            const handleSave = () => {
                                if (editValue !== val) {
                                    onUpdateTask(rowOriginal.id, col.id, editValue);
                                }
                                setIsEditing(false);
                            };

                            if (isEditing) {
                                return (
                                    <input
                                        ref={inputRef}
                                        type="email"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onBlur={handleSave}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === "Tab") {
                                                e.preventDefault();
                                                handleSave();
                                            }
                                            if (e.key === "Escape") {
                                                setEditValue(val || "");
                                                setIsEditing(false);
                                            }
                                        }}
                                        className="w-full h-full px-2 text-[13px] text-[#0073ea] bg-white border-2 border-blue-500 rounded focus:outline-none"
                                        placeholder="Enter email"
                                    />
                                );
                            }

                            return (
                                <div
                                    onClick={() => setIsEditing(true)}
                                    className="w-full h-full px-2 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
                                >
                                    {val ? (
                                        <a
                                            href={`mailto:${val}`}
                                            className="text-[13px] text-[#0073ea] hover:underline truncate block max-w-full"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {val}
                                        </a>
                                    ) : (
                                        <span className="text-[13px] text-gray-400 truncate">
                                            Click to add email
                                        </span>
                                    )}
                                </div>
                            );
                        }

                        if (col.type === "phone") {
                            const [isEditing, setIsEditing] = React.useState(false);
                            const [editValue, setEditValue] = React.useState(val || "");
                            const inputRef = React.useRef(null);

                            React.useEffect(() => {
                                if (isEditing && inputRef.current) {
                                    inputRef.current.focus();
                                    inputRef.current.select();
                                }
                            }, [isEditing]);

                            const handleSave = () => {
                                if (editValue !== val) {
                                    onUpdateTask(rowOriginal.id, col.id, editValue);
                                }
                                setIsEditing(false);
                            };

                            if (isEditing) {
                                return (
                                    <input
                                        ref={inputRef}
                                        type="tel"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onBlur={handleSave}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === "Tab") {
                                                e.preventDefault();
                                                handleSave();
                                            }
                                            if (e.key === "Escape") {
                                                setEditValue(val || "");
                                                setIsEditing(false);
                                            }
                                        }}
                                        className="w-full h-full px-2 text-[13px] text-[#323338] bg-white border-2 border-blue-500 rounded focus:outline-none"
                                        placeholder="Enter phone"
                                    />
                                );
                            }

                            return (
                                <div
                                    onClick={() => setIsEditing(true)}
                                    className="w-full h-full px-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
                                >
                                    {val ? (
                                        <>
                                            <span className="text-lg leading-none flex-shrink-0">
                                                🇺🇸
                                            </span>
                                            <span className="text-[13px] text-[#323338] truncate min-w-0">
                                                {val}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-[13px] text-gray-400 truncate">
                                            Click to add phone
                                        </span>
                                    )}
                                </div>
                            );
                        }

                        if (col.type === 'person') {
                            return (
                                <PersonCell
                                    value={val}
                                    onChange={(newVal) => onUpdateTask(rowOriginal.id, col.id, newVal)}
                                />
                            );
                        }

                        if (col.type === 'date') {
                            return (
                                <DateCell
                                    value={val}
                                    onChange={(newVal) => onUpdateTask(rowOriginal.id, col.id, newVal)}
                                />
                            );
                        }

                        if (col.type === 'number' || col.title.includes("$")) {
                            const [isEditing, setIsEditing] = React.useState(false);
                            const [editValue, setEditValue] = React.useState(val || "");
                            const inputRef = React.useRef(null);

                            React.useEffect(() => {
                                if (isEditing && inputRef.current) {
                                    inputRef.current.focus();
                                    inputRef.current.select();
                                }
                            }, [isEditing]);

                            const handleSave = () => {
                                if (editValue !== val) {
                                    onUpdateTask(rowOriginal.id, col.id, Number(editValue) || 0);
                                }
                                setIsEditing(false);
                            };

                            if (isEditing) {
                                return (
                                    <input
                                        ref={inputRef}
                                        type="number"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onBlur={handleSave}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === "Tab") {
                                                e.preventDefault();
                                                handleSave();
                                            }
                                            if (e.key === "Escape") {
                                                setEditValue(val || "");
                                                setIsEditing(false);
                                            }
                                        }}
                                        className="w-full h-full px-2 text-[13px] text-right text-[#323338] bg-white border-2 border-blue-500 rounded focus:outline-none"
                                        placeholder="0"
                                    />
                                );
                            }

                            return (
                                <div
                                    onClick={() => setIsEditing(true)}
                                    className="w-full h-full px-2 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
                                >
                                    <span className="text-[13px] text-[#323338] truncate">
                                        {val !== null && val !== undefined ? `${Number(val).toLocaleString()}` : "-"}
                                    </span>
                                </div>
                            );
                        }

                        if (col.id === "donations") {
                            const [isEditing, setIsEditing] = React.useState(false);
                            const [editValue, setEditValue] = React.useState(val || "");
                            const inputRef = React.useRef(null);

                            React.useEffect(() => {
                                if (isEditing && inputRef.current) {
                                    inputRef.current.focus();
                                    inputRef.current.select();
                                }
                            }, [isEditing]);

                            const handleSave = () => {
                                if (editValue !== val) {
                                    onUpdateTask(rowOriginal.id, col.id, editValue);
                                }
                                setIsEditing(false);
                            };

                            if (isEditing) {
                                return (
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onBlur={handleSave}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") handleSave();
                                            if (e.key === "Escape") { setEditValue(val || ""); setIsEditing(false); }
                                        }}
                                        className="w-full text-center text-[13px] border border-blue-500 rounded px-1"
                                    />
                                );
                            }

                            return (
                                <div onClick={() => setIsEditing(true)} className="flex items-center justify-center w-full h-full px-4 text-center cursor-pointer hover:bg-gray-50">
                                    {val ? (
                                        <div className="flex items-center gap-2 w-full justify-center">
                                            <div className="w-1.5 h-4 bg-[#579BFC] rounded-full"></div>
                                            <span className="text-[13px] text-[#323338]">{val}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 w-full justify-center opacity-50">
                                            <div className="w-1 h-3 bg-[#579BFC] rounded-full"></div>
                                            <span className="text-[13px] text-[#323338]">-</span>
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        // Default text cell - make it editable
                        if (col.type === "text") {
                            const [isEditing, setIsEditing] = React.useState(false);
                            const [editValue, setEditValue] = React.useState(val || "");
                            const inputRef = React.useRef(null);

                            React.useEffect(() => {
                                if (isEditing && inputRef.current) {
                                    inputRef.current.focus();
                                    inputRef.current.select();
                                }
                            }, [isEditing]);

                            const handleSave = () => {
                                if (editValue !== val) {
                                    onUpdateTask(rowOriginal.id, col.id, editValue);
                                }
                                setIsEditing(false);
                            };

                            if (isEditing) {
                                return (
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onBlur={handleSave}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === "Tab") {
                                                e.preventDefault();
                                                handleSave();
                                            }
                                            if (e.key === "Escape") {
                                                setEditValue(val || "");
                                                setIsEditing(false);
                                            }
                                        }}
                                        className="w-full h-full px-2 text-[13px] text-[#323338] bg-white border-2 border-blue-500 rounded focus:outline-none"
                                        placeholder="Enter value"
                                    />
                                );
                            }

                            return (
                                <div
                                    onClick={() => setIsEditing(true)}
                                    className="w-full h-full px-2 flex items-center cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
                                >
                                    {val ? (
                                        <span className="text-[13px] text-[#323338] truncate block max-w-full">
                                            {val}
                                        </span>
                                    ) : (
                                        <span className="text-[13px] text-gray-400 truncate">
                                            Click to add
                                        </span>
                                    )}
                                </div>
                            );
                        }

                        if (typeof val === 'object' && val !== null) {
                            return (
                                <div className="px-2 text-[13px] text-[#323338] truncate text-center w-full overflow-hidden">
                                    {val.name || JSON.stringify(val)}
                                </div>
                            );
                        }

                        if (typeof val === 'object' && val !== null) {
                            return (
                                <div className="px-2 text-[13px] text-[#323338] truncate text-center w-full overflow-hidden">
                                    {val.name || JSON.stringify(val)}
                                </div>
                            );
                        }

                        // Universal fallback - make everything editable text by default if no other type matched
                        const [isEditingFallback, setIsEditingFallback] = React.useState(false);
                        const [fallbackValue, setFallbackValue] = React.useState(val || "");
                        const fallbackInputRef = React.useRef(null);

                        React.useEffect(() => {
                            if (isEditingFallback && fallbackInputRef.current) {
                                fallbackInputRef.current.focus();
                                if (typeof fallbackValue === 'string') fallbackInputRef.current.select();
                            }
                        }, [isEditingFallback]);

                        const handleFallbackSave = () => {
                            if (fallbackValue !== val) {
                                onUpdateTask(rowOriginal.id, col.id, fallbackValue);
                            }
                            setIsEditingFallback(false);
                        };

                        if (isEditingFallback) {
                            return (
                                <input
                                    ref={fallbackInputRef}
                                    type="text"
                                    value={fallbackValue}
                                    onChange={(e) => setFallbackValue(e.target.value)}
                                    onBlur={handleFallbackSave}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleFallbackSave();
                                        if (e.key === "Escape") {
                                            setFallbackValue(val || "");
                                            setIsEditingFallback(false);
                                        }
                                    }}
                                    className="w-full px-2 text-[13px] bg-white border-2 border-blue-500 rounded focus:outline-none"
                                />
                            );
                        }

                        if (typeof val === 'object' && val !== null) {
                            // Even for objects, try to display them. If it's a type we don't know, we probably can't edit it easily, 
                            // but we can try to JSON.stringify or just show name.
                            // However, we already handled 'person'. 
                            // If it's something else, we might not want to break it with text edit unless we know what it is.
                            // But requirement says "Make all newly added tasks/items completely editable".
                            // If we don't know the structure, text edit might corrupt it.
                            // But usually objects are 'person' or 'status' (if rich).
                            // Let's keep object read-only or minimal display to be safe, OR fallback to name editing?
                            return (
                                <div className="px-2 text-[13px] text-[#323338] truncate text-center w-full overflow-hidden"
                                    title="Complex object - read only"
                                >
                                    {val.name || JSON.stringify(val)}
                                </div>
                            );
                        }

                        return (
                            <div
                                onClick={() => setIsEditingFallback(true)}
                                className="px-2 text-[13px] text-[#323338] truncate text-center w-full overflow-hidden h-full flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:border hover:border-gray-200 transition-all rounded-sm"
                            >
                                {val || <span className="text-gray-400 opacity-0 group-hover/row:opacity-100 transition-opacity">Edit</span>}
                            </div>
                        );
                    },
                    size: col.width || 140,
                })
            );
        });
        // Add Column Button
        cols.push(
            columnHelper.display({
                id: "add",
                header: () => (
                    <div className="relative w-full h-full flex items-center justify-center border-t-2 border-t-transparent hover:bg-gray-50 transition-colors">
                        <button
                            ref={addColumnButtonRef}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsAddColumnMenuOpen(!isAddColumnMenuOpen);
                            }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <Plus
                                size={16}
                                className="text-gray-400 mx-auto cursor-pointer hover:text-gray-600"
                            />
                        </button>
                        {isAddColumnMenuOpen && (
                            <AddColumnMenu
                                triggerRef={addColumnButtonRef}
                                onClose={() => setIsAddColumnMenuOpen(false)}
                                onAddColumn={(type) => {
                                    onAddColumn(type);
                                    setIsAddColumnMenuOpen(false);
                                }}
                            />
                        )}
                    </div>
                ),
                cell: () => null,
                size: 36,
                enableResizing: false,
            })
        );

        return cols;
    }, [
        propColumns,
        hoveredHeader,
        activeMenu,
        statusConfig,
        groupColor,
        onUpdateTask,
        isAddColumnMenuOpen,
        onAddColumn,
        expandedRows,
    ]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        defaultColumn: {
            minSize: 36,
            maxSize: 800,
        },
    });

    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-max bg-white rounded-bl-lg border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.05)] relative isolate">
                {/* Left colored styling bar for the group */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-[6px] z-10 rounded-l-md"
                    style={{ backgroundColor: groupColor }}
                />

                {/* Table Header */}
                <div className="flex bg-white pl-[6px] sticky top-0 z-[100]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <React.Fragment key={headerGroup.id}>
                            {/* Header cells */}
                            {headerGroup.headers.map((header, index) => {
                                const isLast = index === headerGroup.headers.length - 1;
                                const isActive = activeMenu === header.column.id;
                                const isHovered = hoveredHeader === header.column.id;
                                const shouldShowMenu = isActive || isHovered;
                                const zClass = shouldShowMenu
                                    ? "z-[9998]"
                                    : isLast
                                        ? "z-20"
                                        : "z-10";
                                const overflowClass = shouldShowMenu
                                    ? "overflow-visible"
                                    : "overflow-hidden";

                                return (
                                    <div
                                        key={header.id}
                                        style={{
                                            width: header.getSize(),
                                            minWidth: header.getSize(),
                                            maxWidth: header.getSize(),
                                            borderRight: isLast ? "none" : "1px solid #d0d4e4",
                                        }}
                                        className={`h-[36px] border-t border-b border-[#d0d4e4] flex-shrink-0 relative box-border bg-white ${overflowClass} ${zClass}`}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>

                {/* Table Body */}
                <div className="flex flex-col pl-[6px]">
                    {table.getRowModel().rows.map((row) => (
                        <React.Fragment key={row.id}>
                            {/* Main Row */}
                            <div className="flex border-b border-[#d0d4e4] hover:bg-[#f5f7f9] bg-white h-[36px] group/row transition-colors">
                                {row.getVisibleCells().map((cell, index) => (
                                    <div
                                        key={cell.id}
                                        style={{
                                            width: cell.column.getSize(),
                                            minWidth: cell.column.getSize(),
                                            maxWidth: cell.column.getSize(),
                                            borderRight:
                                                index === row.getVisibleCells().length - 1
                                                    ? "none"
                                                    : "1px solid #d0d4e4",
                                        }}
                                        className="h-full flex-shrink-0 relative flex items-center box-border"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TanStackBoardTable;
