'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';
import '@/src/styles/createaccountnine.css';

const CreateAccountNine = () => {
    const router = useRouter();
    const { userCategory } = useAuth();

    // Local state for board name instead of Context for now, 
    // as BoardContext might not be fully available in this standardized migration
    const [boardName, setBoardName] = useState('');
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    // Load saved state on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedName = sessionStorage.getItem('boardName');
            if (savedName) {
                setBoardName(savedName);
                setIsNextEnabled(savedName.trim().length > 0);
            }
        }
    }, []);

    // Check category - If non-profit, skip to step 10 (Columns)
    useEffect(() => {
        if (userCategory === 'nonprofit') {
            console.log('Non-profit user detected, skipping to step 10');
            // Using router instead of navigate
            router.push('/auth/setup/columns');
        }
    }, [userCategory, router]);

    const handleNext = () => {
        const trimmedName = boardName.trim();
        if (trimmedName.length > 0) {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('boardName', trimmedName);
            }
            // Navigate to next step (Step 10 which is Columns)
            router.push('/auth/setup/columns');
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setBoardName(value);
        setIsNextEnabled(value.trim().length > 0);
    };

    const handleClose = () => {
        // Optionally redirect to generic setup or home
        // Back to Step 8
        router.push('/auth/setup/team-members');
    };

    // If non-profit, return null (waiting for redirect)
    if (userCategory === 'nonprofit') {
        return null;
    }

    return (
        <div className="account-nine-wrapper">
            <div className="main-container">
                {/* Close Button */}
                <button
                    className="close-button"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <X className="close-icon" />
                </button>

                {/* Left Panel - Form (50% width) */}
                <div className="left-panel">
                    <div className="left-panel-content">
                        {/* Logo */}
                        <div className="logo-section">
                            <div className="logo-height">
                                <img
                                    src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                                    alt="logo"
                                    className="logo-img"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="content-max-width">
                            {/* Heading */}
                            <div className="heading-mb">
                                <h2 className="heading-h2">
                                    Let's start working together
                                </h2>
                            </div>

                            {/* Form */}
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="board-name" className="label-text">
                                        Give your board a name, e.g. marketing plan, sales pipeline,<br />quarterly roadmap...
                                    </label>
                                    <div className="input-relative">
                                        <input
                                            type="text"
                                            id="board-name"
                                            className="input-field"
                                            placeholder="My first project"
                                            maxLength={40}
                                            value={boardName}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                {/* Info Box */}
                                <div className="info-box">
                                    <p className="info-box-text">
                                        In monday.com, "boards" are the place where all your content lives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="footer-section">
                        <button
                            onClick={handleNext}
                            className={`next-btn ${isNextEnabled
                                ? 'next-btn-enabled'
                                : 'next-btn-disabled'
                                }`}
                            disabled={!isNextEnabled}
                        >
                            <span>Next</span>
                            <ChevronRight className="chevron" />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL - BOARD PREVIEW (50% width) */}
                <div className="right-panel">
                    {/* Outer Card Container with exact original styling */}
                    <div className="board-card">
                        {/* Board Name */}
                        <div className="board-name-section">
                            {boardName ? (
                                <h1 className="board-name-h1">
                                    {boardName}
                                </h1>
                            ) : (
                                <div className="board-name-placeholder-wrapper">
                                    <div className="board-name-placeholder-bar"></div>
                                </div>
                            )}
                        </div>

                        {/* Separator - exact 50px spacing */}
                        <div className="separator-50"></div>

                        {/* Board Content Container */}
                        <div className="board-flex-container">
                            {/* Left Column - Items (Fixed 240px width) */}
                            <div className="items-column-width">
                                {/* Group 1 - Blue (#579bfc) */}
                                <div className="group-mb-0">
                                    {/* Group Header with exact spacing */}
                                    <div className="group-header-flex">
                                        <div className="group-header-bar-blue"></div>
                                    </div>

                                    {/* Column Name Header */}
                                    <div className="column-header blue-left-border">
                                        <div className="column-header-placeholder"></div>
                                    </div>

                                    {/* Item Rows - 3 items */}
                                    {[0, 1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="item-row blue-left-border"
                                        >
                                            <div className="item-row-placeholder"></div>
                                        </div>
                                    ))}

                                    {/* Add Item Row (lighter border) */}
                                    <div className="add-item-row blue-left-border-light">
                                        <div className="add-item-placeholder"></div>
                                    </div>

                                    {/* Empty Row */}
                                    <div className="empty-row-height"></div>
                                </div>

                                {/* Group 2 - Green (#00c875) */}
                                <div>
                                    {/* Group Header */}
                                    <div className="group-header-flex">
                                        <div className="group-header-bar-green"></div>
                                    </div>

                                    {/* Column Name Header */}
                                    <div className="column-header green-left-border">
                                        <div className="column-header-placeholder"></div>
                                    </div>

                                    {/* Add Item Row */}
                                    <div className="add-item-row green-left-border-light">
                                        <div className="add-item-placeholder"></div>
                                    </div>

                                    {/* Empty Row */}
                                    <div className="empty-row-height"></div>
                                </div>
                            </div>

                            {/* Right Columns - Data Columns */}
                            <div className="data-columns-flex">
                                {/* Group 1 Data Columns */}
                                <div className="group-mb-0">
                                    {/* Empty space for group header alignment */}
                                    <div className="data-group-spacer"></div>

                                    {/* Column Headers Row */}
                                    <div className="data-header-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-header-cell"
                                            >
                                                <div className="data-header-placeholder"></div>
                                            </div>
                                        ))}
                                        <div className="add-column-cell">
                                            <span className="plus-icon">+</span>
                                        </div>
                                    </div>

                                    {/* Item Rows - 3 rows of data */}
                                    {[0, 1, 2].map((rowIdx) => (
                                        <div key={rowIdx} className="data-row">
                                            {[0, 1, 2].map((colIdx) => (
                                                <div
                                                    key={colIdx}
                                                    className="data-cell"
                                                >
                                                    <div className="data-cell-placeholder"></div>
                                                </div>
                                            ))}
                                            <div className="data-cell-empty"></div>
                                        </div>
                                    ))}

                                    {/* Add Item Row - Empty */}
                                    <div className="data-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-cell-blank"
                                            ></div>
                                        ))}
                                        <div className="data-cell-empty"></div>
                                    </div>

                                    {/* Empty Row */}
                                    <div className="data-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-cell-blank"
                                            ></div>
                                        ))}
                                        <div className="data-cell-empty"></div>
                                    </div>
                                </div>

                                {/* Group 2 Data Columns */}
                                <div>
                                    {/* Empty space for group header alignment */}
                                    <div className="data-group-spacer"></div>

                                    {/* Column Headers Row */}
                                    <div className="data-header-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-header-cell"
                                            >
                                                <div className="data-header-placeholder"></div>
                                            </div>
                                        ))}
                                        <div className="add-column-cell">
                                            <span className="plus-icon">+</span>
                                        </div>
                                    </div>

                                    {/* Add Item Row - Empty */}
                                    <div className="data-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-cell-blank"
                                            ></div>
                                        ))}
                                        <div className="data-cell-empty"></div>
                                    </div>

                                    {/* Empty Row */}
                                    <div className="data-row">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="data-cell-blank"
                                            ></div>
                                        ))}
                                        <div className="data-cell-empty"></div>
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

export default CreateAccountNine;
