'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ActionBar.module.css';
import { clsx } from 'clsx';
import {
    ChevronDown,
    Search as SearchIcon,
    User,
    Filter,
    ArrowUpDown,
    Eye,
    EyeOff,
    Grid3x3,
    MoreHorizontal,
    Plus,
    Check,
    Pin,
    Palette,
    Settings
} from 'lucide-react';

const ActionBar = ({
    columns = [],
    onSearch,
    onFilter,
    onSort,
    onHideColumns,
    onGroupBy,
    onAddTask,
    hiddenColumns = [],
    currentSort = null,
    currentGroupBy = null
}) => {
    const [searchValue, setSearchValue] = useState('');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showPersonDropdown, setShowPersonDropdown] = useState(false);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showHideDropdown, setShowHideDropdown] = useState(false);
    const [showGroupByDropdown, setShowGroupByDropdown] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [showNewTaskDropdown, setShowNewTaskDropdown] = useState(false);

    const searchRef = useRef(null);
    const personRef = useRef(null);
    const filterRef = useRef(null);
    const sortRef = useRef(null);
    const hideRef = useRef(null);
    const groupByRef = useRef(null);
    const moreRef = useRef(null);
    const newTaskRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchInput(false);
            }
            if (personRef.current && !personRef.current.contains(event.target)) {
                setShowPersonDropdown(false);
            }
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilterDropdown(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setShowSortDropdown(false);
            }
            if (hideRef.current && !hideRef.current.contains(event.target)) {
                setShowHideDropdown(false);
            }
            if (groupByRef.current && !groupByRef.current.contains(event.target)) {
                setShowGroupByDropdown(false);
            }
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setShowMoreMenu(false);
            }
            if (newTaskRef.current && !newTaskRef.current.contains(event.target)) {
                setShowNewTaskDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (value) => {
        setSearchValue(value);
        if (onSearch) onSearch(value);
    };

    const handleSort = (column, order) => {
        if (onSort) onSort(column, order);
        setShowSortDropdown(false);
    };

    const handleHideColumn = (columnId) => {
        if (onHideColumns) onHideColumns(columnId);
    };

    const handleGroupBy = (column) => {
        if (onGroupBy) onGroupBy(column);
        setShowGroupByDropdown(false);
    };

    return (
        <div className={styles['action-bar']}>
            <div className={styles['action-bar-left']}>
                {/* New Task Button with Dropdown */}
                <div className={styles['new-task-wrapper']} ref={newTaskRef}>
                    <button className={styles['new-task-btn']} onClick={() => onAddTask && onAddTask()}>
                        New task
                    </button>
                    <button
                        className={styles['new-task-dropdown-btn']}
                        onClick={() => setShowNewTaskDropdown(!showNewTaskDropdown)}
                    >
                        <ChevronDown size={14} />
                    </button>

                    {showNewTaskDropdown && (
                        <div className={clsx(styles['dropdown-menu'], styles['new-task-dropdown'])}>
                            <div className={styles['dropdown-item']} onClick={() => onAddTask && onAddTask()}>
                                <Plus size={16} />
                                <span>New task</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <Plus size={16} />
                                <span>New group</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles['action-divider']}></div>

                {/* Search */}
                <div className={styles['search-wrapper']} ref={searchRef}>
                    {showSearchInput ? (
                        <div className={styles['search-input-container']}>
                            <SearchIcon size={16} className={styles['search-icon']} />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e) => handleSearch(e.target.value)}
                                autoFocus
                                className={styles['search-input']}
                            />
                        </div>
                    ) : (
                        <button className={styles['action-btn']} onClick={() => setShowSearchInput(true)}>
                            <SearchIcon size={18} />
                            <span>Search</span>
                        </button>
                    )}
                </div>

                {/* Person Filter */}
                <div className={styles['action-dropdown-wrapper']} ref={personRef}>
                    <button
                        className={styles['action-btn']}
                        onClick={() => setShowPersonDropdown(!showPersonDropdown)}
                    >
                        <User size={18} />
                        <span>Person</span>
                    </button>

                    {showPersonDropdown && (
                        <div className={styles['dropdown-menu']}>
                            <div className={styles['dropdown-header']}>Filter by person</div>
                            <div className={styles['dropdown-item']}>
                                <User size={16} />
                                <span>All people</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <User size={16} />
                                <span>Assigned to me</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <User size={16} />
                                <span>Unassigned</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Filter */}
                <div className={styles['action-dropdown-wrapper']} ref={filterRef}>
                    <button
                        className={styles['action-btn']}
                        onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    >
                        <Filter size={18} />
                        <span>Filter</span>
                        <ChevronDown size={14} />
                    </button>

                    {showFilterDropdown && (
                        <div className={clsx(styles['dropdown-menu'], styles['filter-dropdown'])}>
                            <div className={styles['dropdown-header']}>Filter by column</div>
                            {columns.map((col) => (
                                <div key={col.id} className={styles['dropdown-item']}>
                                    <span>{col.title}</span>
                                </div>
                            ))}
                            <div className={styles['dropdown-divider']}></div>
                            <div className={clsx(styles['dropdown-item'], styles['primary'])}>
                                <Plus size={16} />
                                <span>Save as new view</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sort */}
                <div className={styles['action-dropdown-wrapper']} ref={sortRef}>
                    <button
                        className={styles['action-btn']}
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                    >
                        <ArrowUpDown size={18} />
                        <span>Sort</span>
                    </button>

                    {showSortDropdown && (
                        <div className={clsx(styles['dropdown-menu'], styles['sort-dropdown'])}>
                            <div className={styles['dropdown-header']}>Sort by</div>
                            {columns.map((col) => (
                                <div key={col.id} className={styles['dropdown-section']}>
                                    <div className={styles['dropdown-subheader']}>{col.title}</div>
                                    <div
                                        className={styles['dropdown-item']}
                                        onClick={() => handleSort(col.id, 'asc')}
                                    >
                                        <ArrowUpDown size={16} />
                                        <span>Ascending</span>
                                        {currentSort?.column === col.id && currentSort?.order === 'asc' && (
                                            <Check size={16} className={styles['check-icon']} />
                                        )}
                                    </div>
                                    <div
                                        className={styles['dropdown-item']}
                                        onClick={() => handleSort(col.id, 'desc')}
                                    >
                                        <ArrowUpDown size={16} />
                                        <span>Descending</span>
                                        {currentSort?.column === col.id && currentSort?.order === 'desc' && (
                                            <Check size={16} className={styles['check-icon']} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Hide Columns */}
                <div className={styles['action-dropdown-wrapper']} ref={hideRef}>
                    <button
                        className={styles['action-btn']}
                        onClick={() => setShowHideDropdown(!showHideDropdown)}
                    >
                        <Eye size={18} />
                        <span>Hide</span>
                    </button>

                    {showHideDropdown && (
                        <div className={clsx(styles['dropdown-menu'], styles['hide-dropdown'])}>
                            <div className={styles['dropdown-header']}>Choose columns</div>
                            {columns.map((col) => (
                                <div
                                    key={col.id}
                                    className={clsx(styles['dropdown-item'], styles['checkbox-item'])}
                                    onClick={() => handleHideColumn(col.id)}
                                >
                                    <div className={styles['checkbox']}>
                                        {!hiddenColumns.includes(col.id) && <Check size={14} />}
                                    </div>
                                    <span>{col.title}</span>
                                    {hiddenColumns.includes(col.id) && (
                                        <EyeOff size={14} className={styles['hidden-icon']} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Group By */}
                <div className={styles['action-dropdown-wrapper']} ref={groupByRef}>
                    <button
                        className={styles['action-btn']}
                        onClick={() => setShowGroupByDropdown(!showGroupByDropdown)}
                    >
                        <Grid3x3 size={18} />
                        <span>Group by</span>
                    </button>

                    {showGroupByDropdown && (
                        <div className={clsx(styles['dropdown-menu'], styles['groupby-dropdown'])}>
                            <div className={styles['dropdown-header']}>Group items by column</div>
                            <div
                                className={styles['dropdown-item']}
                                onClick={() => handleGroupBy(null)}
                            >
                                <span>No grouping</span>
                                {!currentGroupBy && <Check size={16} className={styles['check-icon']} />}
                            </div>
                            <div className={styles['dropdown-divider']}></div>
                            {columns.map((col) => (
                                <div
                                    key={col.id}
                                    className={styles['dropdown-item']}
                                    onClick={() => handleGroupBy(col.id)}
                                >
                                    <span>{col.title}</span>
                                    {currentGroupBy === col.id && <Check size={16} className={styles['check-icon']} />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* More Options */}
                <div className={styles['action-dropdown-wrapper']} ref={moreRef}>
                    <button
                        className={styles['action-icon-btn']}
                        onClick={() => setShowMoreMenu(!showMoreMenu)}
                    >
                        <MoreHorizontal size={18} />
                    </button>

                    {showMoreMenu && (
                        <div className={clsx(styles['dropdown-menu'], styles['more-menu'])}>
                            <div className={styles['dropdown-item']}>
                                <Pin size={16} />
                                <span>Pin column</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <EyeOff size={16} />
                                <span>Hide item</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <Palette size={16} />
                                <span>Conditional coloring</span>
                            </div>
                            <div className={styles['dropdown-item']}>
                                <Settings size={16} />
                                <span>Default item values</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ActionBar;
