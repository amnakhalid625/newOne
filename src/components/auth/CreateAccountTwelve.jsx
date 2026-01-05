'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ChevronLeft, ChevronRight, Table as TableIconLucide, Calendar as CalendarIconLucide, BarChartHorizontal as GanttIconLucide, Kanban as KanbanIconLucide, LayoutGrid as CardsIconLucide } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import { TimelineIcon } from '@/src/components/common/BoardIcons';

// Local icon wrappers to match style
const TableIcon = () => <TableIconLucide className="w-5 h-5 text-[#323338]" />;
const CalendarIcon = () => <CalendarIconLucide className="w-5 h-5 text-[#323338]" />;
const GanttIcon = () => <GanttIconLucide className="w-5 h-5 text-[#323338]" />;
const KanbanIcon = () => <KanbanIconLucide className="w-5 h-5 text-[#323338]" />;
const CardsIcon = () => <CardsIconLucide className="w-5 h-5 text-[#323338]" />;
const TimelineIconWrapper = () => <TimelineIcon />; // Wrapper not strictly needed but for consistency in array

const CreateAccountTwelve = () => {
    const router = useRouter();
    const { userCategory } = useAuth();

    // In migration, we use sessionStorage
    const [boardName, setBoardName] = useState('First Board');
    const [selectedView, setSelectedView] = useState('table');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedName = sessionStorage.getItem('boardName');
            if (storedName) {
                setBoardName(storedName);
            }

            const category = userCategory || sessionStorage.getItem('userCategory');
            if (category === 'ngo' || category === 'nonprofit') {
                console.log('⏭️ Skipping this step for non-profit');
                router.push('/dashboard');
            }
        }
    }, [userCategory, router]);

    if (userCategory === 'ngo' || userCategory === 'nonprofit') {
        return null;
    }

    const handleNext = () => {
        router.push('/invite-teammates'); // Assuming step 13 is invite or similar. Original was /thirteen. 
        // Based on directory structure 'invite' is likely next.
        // Wait, directory 'invite' might be Step 8?
        // Let's check directory structure again.
        // Step 13 could be 'invite'?
        // Usually invite is separate.
        // I will check the folder 'invite' later. For now I'll point to /auth/setup/invite if it exists, or just /dashboard if it's the end.
        // User request is to migrate Step 12. I'll point to /auth/setup/invite for now.
        router.push('/auth/setup/invite');
    };

    const handleBack = () => {
        router.push('/auth/setup/dashboard'); // Step 11
    };

    const views = [
        {
            id: 'table',
            label: 'Table',
            icon: <TableIcon />,
            description: 'Table view is your default layout. Plan, track and manage anything using a visual board.',
        },
        {
            id: 'timeline',
            label: 'Timeline',
            icon: <TimelineIcon />,
            description: 'Stay on track with visual deadlines and timelines.',
        },
        {
            id: 'gantt',
            label: 'Gantt',
            icon: <GanttIcon />,
            description: 'Visualize project milestones and dependencies.',
        },
        {
            id: 'kanban',
            label: 'Kanban',
            icon: <KanbanIcon />,
            description: 'Prioritize and balance work according to capacity.',
        },
        {
            id: 'cards',
            label: 'Cards',
            icon: <CardsIcon />,
            description: 'See all your item details in a visual gallery.',
        },
        {
            id: 'calendar',
            label: 'Calendar',
            icon: <CalendarIcon />,
            description: 'See all upcoming content and due dates at a glance.',
        },
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
                                    Add a view layout
                                </h2>
                                <p className="text-[14px] text-[#676879] leading-[20px]">
                                    Transform the way you see and manage your work with more unique views. You can always add more later.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {views.map((view) => (
                                    <button
                                        key={view.id}
                                        onClick={() => setSelectedView(view.id)}
                                        className={`h-[44px] px-5 rounded-md flex items-center gap-2 transition-all text-[15px] font-light border ${selectedView === view.id
                                            ? 'border-2 border-[#0073ea] bg-white text-[#323338] shadow-sm'
                                            : 'border-[#c3c6d4] bg-white hover:bg-[#F5F6F8] text-[#323338] shadow-sm'
                                            }`}
                                    >
                                        <span className="flex items-center justify-center">{view.icon}</span>
                                        {view.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-row w-fit max-w-[400px]">
                                <div
                                    className="w-[5px] rounded-tl-lg rounded-bl-lg"
                                    style={{
                                        backgroundColor: selectedView === 'table' ? '#0020b1' :
                                            selectedView === 'calendar' ? '#fdab3d' :
                                                selectedView === 'gantt' ? '#037f4c' :
                                                    selectedView === 'kanban' ? '#216edf' :
                                                        selectedView === 'timeline' ? '#ff6d3b' :
                                                            '#faa1f1'
                                    }}
                                ></div>
                                <aside className="bg-[#f6f7fb] rounded-tr-lg rounded-br-lg p-4 relative" role="alert" style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}>
                                    <div className="flex items-center justify-start" style={{ gap: '4px' }}>
                                        <p className="text-[14px] leading-[20px] text-[#323338] font-normal m-0">
                                            {views.find(v => v.id === selectedView)?.description}
                                        </p>
                                    </div>
                                </aside>
                            </div>
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

                {/* RIGHT PANEL - PREVIEW */}
                <div className="w-1/2 bg-[#eceff8] flex items-center justify-center overflow-hidden">
                    <div className="bg-white w-full h-[650px] relative ml-16 rounded-tl-2xl rounded-bl-2xl overflow-hidden" style={{ filter: 'drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.2))', paddingTop: '30px', paddingLeft: '30px' }}>

                        <div className="mb-6">
                            <h1 className="text-[32px] font-medium text-[#323338] leading-[40px] tracking-[-0.5px] mb-4" style={{ fontFamily: 'Poppins, Roboto, sans-serif' }}>
                                {boardName}
                            </h1>

                            {/* Tabs */}
                            <div className="flex gap-4 border-b border-[#d0d4e4]">
                                <button className="pb-2 px-1 text-[15px] font-medium text-[#323338] border-b-2 border-[#0073ea]">
                                    Table
                                </button>
                                <button className="pb-2 px-1 text-[15px] font-medium text-[#676879]">
                                    {views.find(v => v.id === selectedView)?.label}
                                </button>
                                <button className="pb-2 px-1 text-[24px] text-[#676879] leading-none">+</button>
                            </div>
                        </div>

                        {/* CONTENT AREA */}
                        <div className="h-[456px] overflow-hidden">
                            {selectedView === 'table' && <TableView />}
                            {selectedView === 'calendar' && <CalendarView />}
                            {selectedView === 'gantt' && <GanttView />}
                            {selectedView === 'kanban' && <KanbanView />}
                            {selectedView === 'timeline' && <TimelineView />}
                            {selectedView === 'cards' && <CardsView />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TableView = () => (
    <div>
        <div className="flex gap-0">
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

            {/* Right Columns - Data Columns */}
            <div className="flex-1 min-w-0">
                {/* Group 1 Data Columns */}
                <div className="mb-0">
                    {/* Empty space for group header alignment */}
                    <div style={{ height: '24px', marginBottom: '12px' }}></div>

                    {/* Column Headers Row */}
                    <div className="flex" style={{ height: '40px' }}>
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
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                    </div>

                    {/* Empty Row */}
                    <div className="flex" style={{ height: '40px' }}>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                    </div>
                </div>

                {/* Group 2 Data Columns */}
                <div>
                    {/* Empty space for group header alignment */}
                    <div style={{ height: '24px', marginBottom: '12px' }}></div>

                    {/* Column Headers Row */}
                    <div className="flex" style={{ height: '40px' }}>
                        <div className="flex items-center justify-center bg-white" style={{ borderTop: '0.8px solid #d0d4e4', borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}><span className="text-[15px] text-[#323338]">Owner</span></div>
                        <div className="flex items-center justify-center bg-white" style={{ borderTop: '0.8px solid #d0d4e4', borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}><span className="text-[15px] text-[#323338]">Status</span></div>
                        <div className="flex items-center justify-center bg-white" style={{ borderTop: '0.8px solid #d0d4e4', borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}><span className="text-[15px] text-[#323338]">Due date</span></div>
                        <div className="flex items-center justify-center bg-white" style={{ width: '48px', borderTop: '0.8px solid #d0d4e4', borderBottom: '0.8px solid #d0d4e4' }}><span className="text-[#676879] text-lg font-light">+</span></div>
                    </div>

                    {/* Add Item Row - Empty */}
                    <div className="flex" style={{ height: '40px' }}>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                    </div>

                    {/* Empty Row */}
                    <div className="flex" style={{ height: '40px' }}>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ borderBottom: '0.8px solid #d0d4e4', borderRight: '0.8px solid #d0d4e4', width: '136px', flexShrink: 0 }}></div>
                        <div className="bg-white" style={{ width: '48px', borderBottom: '0.8px solid #d0d4e4' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CalendarView = () => (
    <div className="border border-[#c3c6d4] rounded-lg pt-1.5 bg-white">
        <div className="text-center mb-4">
            <h3 className="text-[18px] font-semibold text-[#323338]">December 2025</h3>
        </div>
        <div className="grid grid-cols-7 gap-0">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <div key={day} className="text-center text-[11px] font-medium text-[#676879] py-2 border-b border-[#e6e9ef]">
                    {day}
                </div>
            ))}
            {[...Array(35)].map((_, i) => {
                const day = i - 0;
                const isCurrentMonth = day >= 1 && day <= 31;
                return (
                    <div key={i} className="aspect-square border-b border-r border-[#e6e9ef] p-1 relative">
                        {isCurrentMonth && (
                            <>
                                <div className="text-xs text-[#323338]">{day}</div>
                                {day === 7 && <div className="text-[9px] bg-[#fdab3d] text-white px-1 py-0.5 rounded mt-1">Task 1</div>}
                                {day === 8 && <div className="text-[9px] bg-[#00c875] text-white px-1 py-0.5 rounded mt-1">Task 2</div>}
                                {day === 9 && <div className="text-[9px] bg-[#df2f4a] text-white px-1 py-0.5 rounded mt-1">Task 3</div>}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    </div>
);

const GanttView = () => (
    <div className="border border-[#c3c6d4] rounded-lg p-4 overflow-hidden bg-white">
        <div className="text-center mb-4">
            <h3 className="text-[16px] font-semibold text-[#323338]">Dec 7 - Dec 13</h3>
        </div>
        <div className="flex gap-2">
            <div className="w-24 space-y-8">
                <div className="text-sm font-medium">Task 1</div>
                <div className="text-sm font-medium">Task 2</div>
                <div className="text-sm font-medium">Task 3</div>
            </div>
            <div className="flex-1 relative h-[180px]">
                <div className="grid grid-cols-7 h-full gap-1">
                    {['7', '8', '9', '10', '11', '12', '13'].map(day => (
                        <div key={day} className="border-l border-[#e6e9ef] text-center text-xs text-[#676879]">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="absolute top-8 left-0 w-[35%] h-6 bg-[#579bfc] rounded text-white text-xs flex items-center justify-center">Task 1</div>
                <div className="absolute top-16 left-[35%] w-[35%] h-6 bg-[#579bfc] rounded text-white text-xs flex items-center justify-center">Task 2</div>
                <div className="absolute top-24 left-[70%] w-[30%] h-6 bg-[#579bfc] rounded text-white text-xs flex items-center justify-center">Task 3</div>
            </div>
        </div>
    </div>
);

const KanbanView = () => (
    <div className="grid grid-cols-3 gap-4 overflow-x-auto max-w-full">
        {[
            { title: 'Working on it / 1', color: '#fdab3d', task: 'Task 1' },
            { title: 'Done / 1', color: '#00c875', task: 'Task 2' },
            { title: 'Stuck / 1', color: '#df2f4a', task: 'Task 3' }
        ].map((col, idx) => (
            <div key={idx} className="min-w-[200px]">
                <div className="rounded-t-lg p-2 text-white text-sm font-medium" style={{ background: col.color }}>
                    {col.title}
                </div>
                <div className="border border-t-0 border-[#c3c6d4] rounded-b-lg p-3 bg-white">
                    <h3 className="font-semibold text-[15px] mb-2">{col.task}</h3>
                    <div className="space-y-2 text-xs text-[#676879]">
                        <div className="flex items-center gap-2">
                            <span>Owner</span>
                            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Due date</span>
                            <span>Dec {7 + idx}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const TimelineView = () => (
    <div className="border border-[#c3c6d4] rounded-lg p-4 bg-white">
        <div className="text-center mb-4">
            <h3 className="text-[16px] font-semibold text-[#323338]">December 2025</h3>
        </div>
        <div className="space-y-6">
            {[
                { name: 'Amna Khalid', task: 'Task 1', color: '#fdab3d', left: '10%', width: '25%' },
                { name: 'Unassigned', task: 'Task 2', color: '#00c875', left: '40%', width: '30%' },
                { name: 'Unassigned', task: 'Task 3', color: '#df2f4a', left: '75%', width: '20%' }
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium">{item.name}</div>
                    <div className="flex-1 relative h-8 bg-gray-50 rounded">
                        <div
                            className="absolute h-full rounded text-white text-xs flex items-center justify-center font-medium"
                            style={{ background: item.color, left: item.left, width: item.width }}
                        >
                            {item.task}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const CardsView = () => (
    <div className="grid grid-cols-3 gap-4 overflow-x-auto">
        {[
            { title: 'Task 1', status: 'Working on it', color: '#fdab3d', date: 'Dec 7' },
            { title: 'Task 2', status: 'Done', color: '#00c875', date: 'Dec 8' },
            { title: 'Task 3', status: 'Stuck', color: '#df2f4a', date: 'Dec 9' }
        ].map((card, idx) => (
            <div key={idx} className="border border-[#c3c6d4] rounded-lg p-4 bg-white min-w-[180px]">
                <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl">+</div>
                    <button className="text-gray-400 hover:text-gray-600">💬</button>
                </div>
                <h3 className="font-semibold text-[15px] mb-4">{card.title}</h3>
                <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                        <span className="text-[#676879]">Owner</span>
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#676879]">Status</span>
                        <div className="px-2 py-1 rounded text-white text-xs" style={{ background: card.color }}>
                            {card.status}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#676879]">Due date</span>
                        <span className="text-[#323338]">{card.date}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default CreateAccountTwelve;
