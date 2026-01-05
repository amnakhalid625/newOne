import React, { useEffect, useRef, useState } from 'react';
import {
    Copy,
    ArrowRightSquare,
    Edit2,
    Trash2,
    MoreHorizontal
} from 'lucide-react';

const ColumnMenu = ({ onClose, onRename, onDelete, onDuplicate, onAddToRight, columnId, title, triggerRef }) => {
    const menuRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isPositioned, setIsPositioned] = useState(false);

    useEffect(() => {
        // Use setTimeout to ensure the menu is fully rendered before calculating position
        const timer = setTimeout(() => {
            if (triggerRef?.current && menuRef.current) {
                const triggerRect = triggerRef.current.getBoundingClientRect();
                const menuRect = menuRef.current.getBoundingClientRect();

                // Position below the trigger button
                let top = triggerRect.bottom + 4;
                let left = triggerRect.left;

                // Adjust if menu would go off-screen to the right
                if (left + menuRect.width > window.innerWidth) {
                    left = window.innerWidth - menuRect.width - 16;
                }

                // Adjust if menu would go off-screen at the bottom
                if (top + menuRect.height > window.innerHeight) {
                    top = triggerRect.top - menuRect.height - 4;
                }

                setPosition({ top, left });
                setIsPositioned(true);
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [triggerRef]);

    const menuItems = [
        { icon: Copy, label: 'Duplicate column', action: () => onDuplicate?.(columnId) },
        { icon: ArrowRightSquare, label: 'Add column to the right', action: () => onAddToRight?.(columnId) },
        { icon: Edit2, label: 'Rename', action: () => onRename?.(columnId) },
        { icon: Trash2, label: 'Delete', color: 'text-black', action: () => onDelete?.(columnId) },
    ];

    return (
        <>
            {/* Backdrop to close menu when clicking outside */}
            <div
                className="fixed inset-0 z-[9998]"
                onClick={onClose}
            />

            {/* Menu */}
            <div
                ref={menuRef}
                className="fixed z-[9999] w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    opacity: isPositioned ? 1 : 0,
                    transition: 'opacity 0.1s'
                }}
            >
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                    <span className="text-xs font-semibold text-gray-500">Column Options</span>
                </div>
                <div className="py-1">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    item.action && item.action();
                                    onClose();
                                }}
                                disabled={item.disabled}
                                className={`w-full px-4 py-2 flex items-center gap-3 text-sm hover:bg-gray-50 transition-colors ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <Icon size={16} className={item.color || 'text-gray-600'} />
                                <span className={item.color || 'text-gray-700'}>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ColumnMenu;
