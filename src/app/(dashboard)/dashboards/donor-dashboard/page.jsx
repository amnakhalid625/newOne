'use client';

import React, { useState } from 'react';
import { Eye, Share2, MoreVertical, Filter, User, Maximize2, Star, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DonorsDashboard = () => {
    // Sample data for donations per month
    const monthlyData = [
        { month: 'Aug 2020', amount: 1500 },
        { month: 'Jun 2021', amount: 1300 },
        { month: 'Jul 2021', amount: 1500 },
        { month: 'Oct 2021', amount: 2000 },
        { month: 'Dec 2021', amount: 500 },
        { month: 'Jan 2022', amount: 5000 },
        { month: 'Mar 2022', amount: 6500 },
        { month: 'Mar 2023', amount: 4500 }
    ];

    // Data for donations per year
    const yearlyData = [
        { year: '2020', oneTime: 100, recurring: 1500 },
        { year: '2021', oneTime: 1500, recurring: 3800 },
        { year: '2022', oneTime: 6500, recurring: 5000 },
        { year: '2023', oneTime: 100, recurring: 4500 }
    ];

    // Data for total donated per donor
    const donorData = [
        { name: 'Leilani Krause', amount: 3300 },
        { name: 'Madison Doyle', amount: 6500 },
        { name: 'Phoenix Levy', amount: 13000 }
    ];

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
                            <h1 className="text-2xl font-semibold text-gray-900">Donors Dashboard</h1>
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
                {/* Donations per Year */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Donations amount per year</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Filter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={yearlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f6f8" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="oneTime" fill="#579bfc" name="One-time" radius={[8, 8, 0, 0]} />
                            <Bar dataKey="recurring" fill="#ff007f" name="Recurring" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Fundraising Tracker */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Fundraising Tracker</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Filter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                                <TrendingUp className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">$22,800</h3>
                            <p className="text-gray-600">Total Raised</p>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">Goal Progress</span>
                                    <span className="font-semibold text-gray-900">76%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '76%' }}></div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Goal Amount</span>
                                    <span className="font-semibold text-gray-900">$30,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Sections */}
            <div className="space-y-6">
                {/* Total Donated Per Donor */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Total Donated Per Donor</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Filter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={donorData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f6f8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                            <Bar dataKey="amount" fill="#579bfc" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Donations Amount Per Month */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Donations amount per month</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Filter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Maximize2 className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f6f8" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                            <Line
                                type="monotone"
                                dataKey="amount"
                                stroke="#579bfc"
                                strokeWidth={2}
                                dot={{ fill: '#579bfc', r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DonorsDashboard;
