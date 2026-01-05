'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import { OwnerIcon, StatusIcon, DueDateIcon, BudgetIcon, FilesIcon, TimelineIcon, LastUpdatedIcon, PriorityIcon, NotesIcon } from '@/src/components/common/BoardIcons.jsx';

const CreateAccountTen = () => {
    const router = useRouter();
    const { userCategory } = useAuth();

    // Use sessionStorage instead of context for migration compatibility
    // In a full app, this would be in context, but following Step 9 pattern:
    const [boardName, setBoardName] = useState('First Board');
    const [selectedColumns, setSelectedColumns] = useState({
        owner: true,
        status: true,
        dueDate: true,
        priority: false,
        lastUpdated: false,
        timeline: false,
        notes: false,
        budget: false,
        files: false
    });

    useEffect(() => {
        // Load board name from previous step
        if (typeof window !== 'undefined') {
            const storedName = sessionStorage.getItem('boardName');
            if (storedName) {
                setBoardName(storedName);
            }

            // Check for category skip
            const category = userCategory || sessionStorage.getItem('userCategory');
            if (category === 'ngo' || category === 'nonprofit') {
                console.log('⏭️ Non-profit user detected, skipping Step 10');
                router.push('/dashboard');
            }
        }
    }, [userCategory, router]);

    if (userCategory === 'ngo' || userCategory === 'nonprofit') {
        return null;
    }

    const toggleColumn = (column) => {
        const updated = { ...selectedColumns, [column]: !selectedColumns[column] };
        setSelectedColumns(updated);
        // In a real app we'd save this to context/session here if needed for next steps
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('selectedColumns', JSON.stringify(updated));
        }
    };

    const handleNext = () => {
        // Save data and move to next step
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('selectedColumns', JSON.stringify(selectedColumns));
        }
        router.push('/auth/setup/dashboard');
    };

    const handleBack = () => {
        router.push('/auth/setup/board-name');
    };

    const columns = [
        { id: 'owner', label: 'Owner', Icon: OwnerIcon },
        { id: 'status', label: 'Status', Icon: StatusIcon },
        { id: 'dueDate', label: 'Due date', Icon: DueDateIcon },
        { id: 'budget', label: 'Budget', Icon: BudgetIcon },
        { id: 'files', label: 'Files', Icon: FilesIcon },
        { id: 'timeline', label: 'Timeline', Icon: TimelineIcon },
        { id: 'lastUpdated', label: 'Last updated', Icon: LastUpdatedIcon },
        { id: 'priority', label: 'Priority', Icon: PriorityIcon },
        { id: 'notes', label: 'Notes', Icon: NotesIcon },
    ];

    return (
        <div className="fixed inset-0 bg-[rgba(41,47,76,0.7)] flex items-center justify-center" style={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>
            <div className="bg-white w-full h-full overflow-hidden shadow-2xl flex relative">
                <button className="fixed top-2.5 right-2.5 z-10 w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors" aria-label="Close">
                    <X className="w-5 h-5 text-[#323338]" />
                </button>

                {/* LEFT PANEL */}
                <div className="w-1/2 flex flex-col justify-between bg-white">
                    <div className="flex-1 overflow-y-auto px-20 pt-20 pb-12">

                        {/* Logo */}
                        <div className="flex justify-between items-center mb-11">
                            <div className="h-[25px]">
                                <img
                                    src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                                    alt="monday work management"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="max-w-[600px] min-w-[375px]">
                            <div className="mb-6">
                                <h2 className="text-[24px] font-medium text-[#323338] leading-[30px] tracking-[-0.1px] mb-2" style={{ fontFamily: 'Poppins, Roboto, sans-serif' }}>
                                    Let's select the relevant columns for your board
                                </h2>
                                <p className="text-[14px] leading-[20px] text-[#323338]" >
                                    Choose from the most popular column types for your work
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {columns.map(({ id, label, Icon }) => (
                                    <button
                                        key={id}
                                        onClick={() => toggleColumn(id)}
                                        className={`h-[42px] px-4 rounded-md flex items-center gap-2 transition-all text-[#323338] ${selectedColumns[id]
                                            ? 'border-2 border-[#0073ea] bg-white shadow-sm'
                                            : 'border border-[#c3c6d4] shadow-sm bg-white hover:bg-[#F0F0F1]'
                                            }`}
                                        aria-pressed={selectedColumns[id]}
                                    >
                                        {Icon && <Icon />}
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <aside className="mt-6 bg-[#f6f7fb] rounded-lg p-4 max-w-[400px]">
                                <p className="text-[14px] leading-[20px] text-[#323338]">
                                    Visualize deadlines with your team so nothing falls through the cracks.
                                </p>
                            </aside>
                        </div>
                    </div>

                    <div className="sticky bottom-0 px-20 py-6 flex justify-between items-center bg-white ">
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 border border-[#c3c6d4] rounded text-[#323338] hover:bg-[#e6e9ef] transition-colors flex items-center gap-1"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-[#0073ea] text-white rounded hover:bg-[#0060b9] transition-colors flex items-center gap-1"
                        >
                            Next
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL - BOARD PREVIEW */}
                <div className="w-1/2 bg-[#eceff8] flex items-center justify-center">
                    {/* Outer Card Container */}
                    <div
                        className="bg-white w-full h-[650px] relative overflow-hidden ml-16 rounded-tl-2xl rounded-bl-2xl"
                        style={{
                            filter: 'drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.2))',
                            paddingTop: '30px',
                            paddingLeft: '30px'
                        }}
                    >
                        {/* Board Name */}
                        <div className="mb-2">
                            <h1
                                className="text-[32px] font-medium text-[#323338] leading-[40px] tracking-[-0.5px] truncate max-w-[600px]"
                                style={{ fontFamily: 'Poppins, Roboto, sans-serif' }}
                            >
                                {boardName}
                            </h1>
                        </div>

                        {/* Separator - exact 50px spacing */}
                        <div style={{ height: '50px' }}></div>

                        {/* Board Content Container with Horizontal Scroll */}
                        <div className="overflow-x-auto w-full">
                            <div className="flex gap-0 min-w-max">
                                {/* Left Column - Items (Fixed 240px width) */}
                                <div style={{ width: '240px', flexShrink: 0 }}>
                                    {/* Group 1 - Blue (#579bfc) */}
                                    <div className="mb-0">
                                        {/* Group Header with exact spacing */}
                                        <div className="flex items-center mb-3" style={{ height: '24px' }}>
                                            <div className="h-1.5 w-[120px] bg-[#579bfc] rounded"></div>
                                        </div>

                                        {/* Column Name Header */}
                                        <div
                                            className="flex items-center bg-white"
                                            style={{
                                                borderLeft: '4px solid #579bfc',
                                                borderTop: '0.8px solid #d0d4e4',
                                                borderBottom: '0.8px solid #d0d4e4',
                                                borderRight: '0.8px solid #d0d4e4',
                                                borderTopLeftRadius: '4px',
                                                height: '40px',
                                                paddingLeft: '12px'
                                            }}
                                        >
                                            <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                                        </div>

                                        {/* Item Rows - 3 items */}
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="flex items-center bg-white"
                                                style={{
                                                    borderLeft: '4px solid #579bfc',
                                                    borderBottom: '0.8px solid #d0d4e4',
                                                    borderRight: '0.8px solid #d0d4e4',
                                                    height: '40px',
                                                    paddingLeft: '12px'
                                                }}
                                            >
                                                <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                                            </div>
                                        ))}

                                        {/* Add Item Row (lighter border) */}
                                        <div
                                            className="flex items-center bg-white"
                                            style={{
                                                borderLeft: '4px solid rgba(87, 155, 252, 0.5)',
                                                borderBottom: '0.8px solid #d0d4e4',
                                                borderRight: '0.8px solid #d0d4e4',
                                                borderBottomLeftRadius: '4px',
                                                height: '40px',
                                                paddingLeft: '12px'
                                            }}
                                        >
                                            <div className="h-1 w-20 bg-[rgba(103,104,121,0.1)] rounded"></div>
                                        </div>

                                        {/* Empty Row */}
                                        <div style={{ height: '40px', borderRight: '0.8px solid #d0d4e4' }}></div>
                                    </div>

                                    {/* Group 2 - Green (#00c875) */}
                                    <div>
                                        {/* Group Header */}
                                        <div className="flex items-center mb-3" style={{ height: '24px' }}>
                                            <div className="h-1.5 w-[120px] bg-[#00c875] rounded"></div>
                                        </div>

                                        {/* Column Name Header */}
                                        <div
                                            className="flex items-center bg-white"
                                            style={{
                                                borderLeft: '4px solid #00c875',
                                                borderTop: '0.8px solid #d0d4e4',
                                                borderBottom: '0.8px solid #d0d4e4',
                                                borderRight: '0.8px solid #d0d4e4',
                                                borderTopLeftRadius: '4px',
                                                height: '40px',
                                                paddingLeft: '12px'
                                            }}
                                        >
                                            <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                                        </div>

                                        {/* Add Item Row */}
                                        <div
                                            className="flex items-center bg-white"
                                            style={{
                                                borderLeft: '4px solid rgba(0, 200, 117, 0.5)',
                                                borderBottom: '0.8px solid #d0d4e4',
                                                borderRight: '0.8px solid #d0d4e4',
                                                borderBottomLeftRadius: '4px',
                                                height: '40px',
                                                paddingLeft: '12px'
                                            }}
                                        >
                                            <div className="h-1 w-20 bg-[rgba(103,104,121,0.1)] rounded"></div>
                                        </div>

                                        {/* Empty Row */}
                                        <div style={{ height: '40px', borderRight: '0.8px solid #d0d4e4' }}></div>
                                    </div>
                                </div>

                                {/* Right Columns - Data Columns (DYNAMIC BASED ON SELECTION) */}
                                <div className="flex-1 min-w-0">
                                    {/* Group 1 Data Columns */}
                                    <div className="mb-0">
                                        {/* Empty space for group header alignment */}
                                        <div style={{ height: '24px', marginBottom: '12px' }}></div>

                                        {/* Column Headers Row */}
                                        <div className="flex" style={{ height: '40px' }}>
                                            {selectedColumns.owner && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Owner</span>
                                                </div>
                                            )}
                                            {selectedColumns.status && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Status</span>
                                                </div>
                                            )}
                                            {selectedColumns.dueDate && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Due date</span>
                                                </div>
                                            )}
                                            {selectedColumns.priority && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Priority</span>
                                                </div>
                                            )}
                                            {selectedColumns.lastUpdated && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Last updated</span>
                                                </div>
                                            )}
                                            {selectedColumns.timeline && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Timeline</span>
                                                </div>
                                            )}
                                            {selectedColumns.notes && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Notes</span>
                                                </div>
                                            )}
                                            {selectedColumns.budget && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Budget</span>
                                                </div>
                                            )}
                                            {selectedColumns.files && (
                                                <div
                                                    className="flex items-center justify-center bg-white"
                                                    style={{
                                                        borderTop: '0.8px solid #d0d4e4',
                                                        borderBottom: '0.8px solid #d0d4e4',
                                                        borderRight: '0.8px solid #d0d4e4',
                                                        width: '136px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span className="text-[15px] text-[#323338]">Files</span>
                                                </div>
                                            )}
                                            <div
                                                className="flex items-center justify-center bg-white"
                                                style={{
                                                    width: '48px',
                                                    borderTop: '0.8px solid #d0d4e4',
                                                    borderBottom: '0.8px solid #d0d4e4'
                                                }}
                                            >
                                                <span className="text-[#676879] text-lg font-light">+</span>
                                            </div>
                                        </div>

                                        {/* Item Rows - 3 rows of data */}
                                        {[0, 1, 2].map((rowIdx) => (
                                            <div key={rowIdx} className="flex" style={{ height: '40px' }}>
                                                {selectedColumns.owner && (
                                                    <div
                                                        className="flex items-center justify-center bg-white"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <img
                                                            src="https://cdn1.monday.com/dapulse_default_photo.png"
                                                            alt="owner"
                                                            className="w-[24px] h-[24px] rounded-full"
                                                        />
                                                    </div>
                                                )}
                                                {selectedColumns.status && (
                                                    <div
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0,
                                                            backgroundColor: rowIdx === 0 ? '#fdab3d' : rowIdx === 1 ? '#00c875' : '#df2f4a'
                                                        }}
                                                    >
                                                        <span className="text-[15px] text-white leading-[40px]">
                                                            {rowIdx === 0 ? 'Working on it' : rowIdx === 1 ? 'Done' : 'Stuck'}
                                                        </span>
                                                    </div>
                                                )}
                                                {selectedColumns.dueDate && (
                                                    <div
                                                        className="flex items-center justify-center bg-white gap-1"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        {rowIdx === 0 && <><span className="text-red-500 text-sm">⚠</span><span className="text-[15px] text-[#323338]">Dec 7</span></>}
                                                        {rowIdx === 1 && <><span className="text-green-500 text-sm">✓</span><span className="text-[15px] text-[#323338]">Dec 8</span></>}
                                                        {rowIdx === 2 && <><span className="text-gray-500 text-sm">◐</span><span className="text-[15px] text-[#323338]">Dec 9</span></>}
                                                    </div>
                                                )}
                                                {selectedColumns.priority && (
                                                    <div
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0,
                                                            backgroundColor: rowIdx === 0 ? '#5eb7f1' : rowIdx === 1 ? '#401694' : '#5559df'
                                                        }}
                                                    >
                                                        <span className="text-[15px] text-white leading-[40px]">
                                                            {rowIdx === 0 ? 'Low' : rowIdx === 1 ? 'High' : 'Medium'}
                                                        </span>
                                                    </div>
                                                )}
                                                {selectedColumns.lastUpdated && (
                                                    <div
                                                        className="flex items-center justify-center bg-white gap-1"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <img
                                                            src="https://cdn1.monday.com/dapulse_default_photo.png"
                                                            alt="owner"
                                                            className="w-5 h-5 rounded-full"
                                                        />
                                                        <span className="text-[15px] text-[#323338]">{rowIdx === 0 ? '2h ago' : rowIdx === 1 ? '3h ago' : '4h ago'}</span>
                                                    </div>
                                                )}
                                                {selectedColumns.timeline && (
                                                    <div
                                                        className="flex items-center justify-center bg-white"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <div className="h-4 w-24 bg-[#579bfc] rounded-md"></div>
                                                    </div>
                                                )}
                                                {selectedColumns.notes && (
                                                    <div
                                                        className="flex items-center justify-center bg-white"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <div className="h-1 w-12 bg-[#c3c6d4] rounded"></div>
                                                    </div>
                                                )}
                                                {selectedColumns.budget && (
                                                    <div
                                                        className="flex items-center justify-center bg-white"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <span className="text-[15px] text-[#323338]">${rowIdx === 0 ? '100' : rowIdx === 1 ? '1000' : '500'}</span>
                                                    </div>
                                                )}
                                                {selectedColumns.files && (
                                                    <div
                                                        className="flex items-center justify-center bg-white"
                                                        style={{
                                                            borderBottom: '0.8px solid #d0d4e4',
                                                            borderRight: '0.8px solid #d0d4e4',
                                                            width: '136px',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <span className="text-[15px] text-[#323338]">
                                                            <img
                                                                src="https://dapulse-res.cloudinary.com/image/upload/file.png"
                                                                alt="files"
                                                                className="w-[20px] h-[24px] "
                                                            />
                                                        </span>
                                                    </div>
                                                )}
                                                <div
                                                    className="bg-white"
                                                    style={{
                                                        width: '48px',
                                                        borderBottom: '0.8px solid #d0d4e4'
                                                    }}
                                                ></div>
                                            </div>
                                        ))}

                                        {/* Add Item Row - Empty */}
                                        <div className="flex" style={{ height: '40px' }}>
                                            {selectedColumns.owner && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.status && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.dueDate && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.priority && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.lastUpdated && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.timeline && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.notes && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.budget && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.files && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                                        </div>

                                        {/* Empty Row */}
                                        <div className="flex" style={{ height: '40px' }}>
                                            {selectedColumns.owner && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.status && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.dueDate && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.priority && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.lastUpdated && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.timeline && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.notes && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.budget && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            {selectedColumns.files && <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>}
                                            <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccountTen;
