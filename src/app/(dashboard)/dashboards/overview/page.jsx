'use client';

import React, { useState } from 'react';
import { Eye, Share2, MoreVertical, Filter, User, Maximize2, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const GrantsDashboard = () => {
    const [currentMonth, setCurrentMonth] = useState('December 2025');

    // Sample data for grants
    const grantsData = {
        'Working on it': 2,
        'Submitted': 2,
        'Awarded': 1
    };

    const totalAwarded = 25000;

    const statusColors = {
        'Working on it': '#fdab3d',
        'Submitted': '#784bd1',
        'Awarded': '#00c875'
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Star className="w-5 h-5 text-gray-400" />
                            </button>
                            <h1 className="text-2xl font-semibold text-gray-900">Grants Dashboard</h1>
                            <span className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                <Eye className="w-4 h-4" />
                                View only
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                <Share2 className="w-4 h-4" />
                                Export
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                <User className="w-4 h-4" />
                                Invite
                            </button>
                            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-4 flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Type to filter"
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="h-6 w-px bg-gray-300" />
                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                        <User className="w-4 h-4" />
                        People
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Chart Widget - Grants by Status */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Grants by status</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Filter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="h-48 flex items-end justify-around gap-8 px-4">
                        {Object.entries(grantsData).map(([status, count]) => (
                            <div key={status} className="flex-1 flex flex-col items-center">
                                <div className="w-full flex flex-col items-center justify-end" style={{ height: '180px' }}>
                                    <span className="text-sm font-bold text-gray-700 mb-2">{count}</span>
                                    <div
                                        className="w-full rounded-t-lg transition-all hover:opacity-80"
                                        style={{
                                            backgroundColor: statusColors[status],
                                            height: `${(count / 3) * 100}%`,
                                            minHeight: '60px'
                                        }}
                                    />
                                </div>
                                <span className="text-xs text-gray-600 mt-3 text-center">{status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Counter Widget - Total Awarded */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Total amount of grants awarded</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded bg-blue-50">
                                <Filter className="w-4 h-4 text-blue-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-48">
                        <span className="text-6xl font-bold text-gray-900">
                            ${totalAwarded.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                            Sum
                        </button>
                    </div>
                </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Grants due dates and tasks</h2>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                            Today
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded">
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded">
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                        <span className="text-sm font-medium text-gray-900 px-4">{currentMonth}</span>
                        <select className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Month</option>
                            <option>Week</option>
                            <option>Day</option>
                        </select>
                        <button className="p-2 hover:bg-gray-100 rounded">
                            <Filter className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded">
                            <Maximize2 className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-blue-200">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Check out the view from up here</h3>
                        <p className="text-gray-600 mb-6">This feature is not available on your plan.</p>
                        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrantsDashboard;
