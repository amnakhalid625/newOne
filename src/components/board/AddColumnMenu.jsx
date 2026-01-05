import React, { useEffect, useRef, useState } from 'react';
import {
    Type,
    Hash,
    List,
    AtSign,
    FunctionSquare,
    File,
    Link,
    Phone,
    Users,
    Calendar,
    CheckSquare,
    ChevronDownSquare,
    Search,
    X
} from 'lucide-react';

const ColumnTypeOption = ({ icon: Icon, label, color, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded-md transition-colors text-left group"
    >
        <div className={`w-6 h-6 rounded flex items-center justify-center text-white ${color}`}>
            <Icon size={14} strokeWidth={2.5} />
        </div>
        <span className="text-[13px] text-[#323338]">{label}</span>
    </button>
);

const AddColumnMenu = ({ onClose, onAddColumn, triggerRef }) => {
    const menuRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isPositioned, setIsPositioned] = useState(false);

    useEffect(() => {
        // Use setTimeout to ensure the menu is fully rendered before calculating position
        const timer = setTimeout(() => {
            if (triggerRef?.current && menuRef.current) {
                const triggerRect = triggerRef.current.getBoundingClientRect();
                const menuRect = menuRef.current.getBoundingClientRect();

                // Position below the trigger button, aligned to the right
                let top = triggerRect.bottom + 4;
                let left = triggerRect.right - menuRect.width;

                // Adjust if menu would go off-screen to the left
                if (left < 16) {
                    left = 16;
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
                className="fixed z-[9999] w-[280px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col font-normal text-left"
                style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    opacity: isPositioned ? 1 : 0,
                    transition: 'opacity 0.1s'
                }}
            >
                {/* Header with Search */}
                <div className="p-3 border-b border-gray-100">
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search or describe your column"
                            className="w-full pl-9 pr-3 py-1.5 text-[13px] border border-gray-300 rounded hover:border-gray-400 focus:border-blue-500 outline-none transition-colors"
                            autoFocus
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto max-h-[400px] p-2">
                    {/* Essentials Section */}
                    <div className="mb-4">
                        <div className="px-2 py-1 text-[12px] text-gray-500 mb-1 font-normal">Essentials</div>
                        <div className="grid grid-cols-2 gap-1">
                            <ColumnTypeOption
                                icon={Type}
                                label="Text"
                                color="bg-yellow-400"
                                onClick={() => onAddColumn('text')}
                            />
                            <ColumnTypeOption
                                icon={AtSign}
                                label="Email"
                                color="bg-yellow-400"
                                onClick={() => onAddColumn('email')}
                            />
                            <ColumnTypeOption
                                icon={Hash}
                                label="Numbers"
                                color="bg-orange-400"
                                onClick={() => onAddColumn('numbers')}
                            />
                            <ColumnTypeOption
                                icon={FunctionSquare}
                                label="Formula"
                                color="bg-teal-500"
                                onClick={() => onAddColumn('formula')}
                            />
                            <ColumnTypeOption
                                icon={List}
                                label="Status"
                                color="bg-green-500"
                                onClick={() => onAddColumn('status')}
                            />
                            <ColumnTypeOption
                                icon={File}
                                label="Files"
                                color="bg-rose-400"
                                onClick={() => onAddColumn('file')}
                            />
                        </div>
                    </div>

                    {/* Super Useful Section */}
                    <div>
                        <div className="px-2 py-1 text-[12px] text-gray-500 mb-1 font-normal">Super useful</div>
                        <div className="grid grid-cols-2 gap-1">
                            <ColumnTypeOption
                                icon={Link}
                                label="Connect..."
                                color="bg-blue-400"
                                onClick={() => onAddColumn('connect')}
                            />
                            <ColumnTypeOption
                                icon={Calendar}
                                label="Date"
                                color="bg-purple-500"
                                onClick={() => onAddColumn('date')}
                            />
                            <ColumnTypeOption
                                icon={Phone}
                                label="Phone"
                                color="bg-yellow-400"
                                onClick={() => onAddColumn('phone')}
                            />
                            <ColumnTypeOption
                                icon={CheckSquare}
                                label="Checkbox"
                                color="bg-orange-400"
                                onClick={() => onAddColumn('checkbox')}
                            />
                            <ColumnTypeOption
                                icon={Users}
                                label="People"
                                color="bg-blue-400"
                                onClick={() => onAddColumn('person')}
                            />
                            <ColumnTypeOption
                                icon={ChevronDownSquare}
                                label="Dropdown"
                                color="bg-green-500"
                                onClick={() => onAddColumn('dropdown')}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-100 text-center">
                    <button className="text-[13px] text-gray-500 hover:text-gray-700 transition-colors">
                        More columns
                    </button>
                </div>

                {/* Close Button Absolute */}
                <button
                    onClick={onClose}
                    className="absolute -right-3 -top-3 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                    <X size={14} />
                </button>
            </div>
        </>
    );
};

export default AddColumnMenu;
