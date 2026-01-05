'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import { useDashboardContext } from '@/src/context/DashboardContext';
import handclap from '@/src/animation/Hand clap 2.json';
import '@/src/styles/DashboardHome.css';

export// No changes needed for DashboardHome as it was created fresh with correct hooks.
    default function DashboardHome() {
    const router = useRouter();
    const { boards, loading } = useDashboardContext();
    const [isRecentlyVisitedOpen, setIsRecentlyVisitedOpen] = useState(true);
    const [isUpdateFeedOpen, setIsUpdateFeedOpen] = useState(false);

    const handleBoardClick = (boardId) => {
        router.push(`/boards/${boardId}`);
    };

    const toggleRecentlyVisited = () => {
        setIsRecentlyVisitedOpen(!isRecentlyVisitedOpen);
    };

    const toggleUpdateFeed = () => {
        setIsUpdateFeedOpen(!isUpdateFeedOpen);
    };

    return (
        <div className="dashboard-home">
            {loading ? null : (
                <>
                    {/* ===== LEFT PANEL (Main Content) ===== */}
                    <div className="main-panel-container">

                        {/* Recently Visited Section */}
                        <section className="section-container">
                            <div className={`collapsible-section ${!isRecentlyVisitedOpen ? 'collapsed' : ''}`}>
                                <div className="collapsible-header" onClick={toggleRecentlyVisited}>
                                    <button className="collapse-toggle" aria-label="Toggle section">
                                        <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.442 12.76a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.157.77.77 0 0 0-1.116 0L10 11.025 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.157l4.21 4.363Z" />
                                        </svg>
                                    </button>
                                    <h2 className="section-title">Recently visited</h2>
                                </div>

                                <div className="collapsible-content">
                                    {boards.length === 0 ? (
                                        <div className="empty-state">
                                            <div className="empty-icon">
                                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="64" height="64">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="empty-title">Welcome to monday.com!</h3>
                                            <p className="empty-description">
                                                You don't have any boards yet. Create your first board to get started.
                                            </p>
                                            <button
                                                onClick={() => router.push('/nine')}
                                                className="primary-button"
                                            >
                                                Create your first board
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="cards-grid">
                                            {boards.map((board) => (
                                                <div
                                                    key={board._id}
                                                    onClick={() => handleBoardClick(board._id)}
                                                    className="board-card-item"
                                                >
                                                    {/* Card Image */}
                                                    <div className="card-image-wrapper">
                                                        <img
                                                            src="https://cdn.monday.com/images/quick_search_recent_board2.svg"
                                                            alt={board.name}
                                                            className="card-image"
                                                        />
                                                    </div>

                                                    {/* Card Content */}
                                                    <div className="card-content-wrapper">
                                                        {/* Board Icon & Name */}
                                                        <div className="card-info-row">
                                                            <div className="board-icon">
                                                                <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22">
                                                                    <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fillRule="evenodd" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <div className="card-name">{board.name}</div>
                                                            <button className="favorite-button" aria-label="Add to favorites">
                                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                                                    <path d="M11.234 3.016a1.379 1.379 0 0 0-2.47 0l-1.78 3.61-3.99.584h-.003a1.376 1.376 0 0 0-.754 2.348v.001l2.878 2.813-.68 3.97v.001a1.376 1.376 0 0 0 2.005 1.45L10 15.921l3.549 1.866a1.377 1.377 0 0 0 2.005-1.45v-.001l-.68-3.97 2.882-2.81v-.001a1.377 1.377 0 0 0-.753-2.348l-3.989-.58-1.78-3.61Z" fillRule="evenodd" clipRule="evenodd" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* Workspace Info */}
                                                        <div className="card-breadcrumb">
                                                            <div className="product-icon">
                                                                <svg width="14" height="14" viewBox="0 0 31 21" fill="none">
                                                                    <path d="M20.4755 9.93523C20.5038 10.337 20.175 10.6639 19.7728 10.6639L10.9856 10.6641C10.5834 10.6641 10.2546 10.991 10.283 11.3928C10.4325 13.5157 11.2329 15.5466 12.5826 17.201C14.0861 19.0437 16.1783 20.3051 18.5028 20.7702C20.8273 21.2353 23.2401 20.8753 25.3303 19.7515C27.4205 18.6277 29.0586 16.8098 29.9655 14.6073C30.8725 12.4049 30.9922 9.95424 30.3042 7.67298C29.6162 5.39172 28.1632 3.42099 26.1926 2.09656C24.222 0.772127 21.8558 0.175955 19.4972 0.409619C18.7926 0.479421 18.1018 0.621986 17.4346 0.83255C16.7504 1.04666 16.0911 1.33222 15.4672 1.6841C15.4299 1.70513 15.3928 1.7264 15.3558 1.74791C16.9259 2.65976 18.2361 3.9799 19.141 5.58233L19.1438 5.53853C19.1507 5.55065 19.1576 5.56279 19.1645 5.57495C19.9245 6.92088 20.368 8.41188 20.4755 9.93523Z" fill="#00A0A0" />
                                                                    <ellipse cx="10.2577" cy="10.6642" rx="10.2441" ry="10.3042" fill="url(#paint0_linear)" />
                                                                    <defs>
                                                                        <linearGradient id="paint0_linear" x1="3.13331" y1="4.47857" x2="20.5438" y2="13.325">
                                                                            <stop stopColor="#00D2D2" />
                                                                            <stop offset="1" stopColor="#00D2D2" stopOpacity="0.29" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                            <span className="workspace-text">monday CRM &gt; My Workspace</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Show All Button */}
                                    {boards.length > 0 && (
                                        <div className="show-more-wrapper">
                                            <button className="show-more-button">Show all</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <section className="section-container update-feed-section">
                                <div className={`collapsible-section ${!isUpdateFeedOpen ? 'collapsed' : ''}`}>
                                    <div className="collapsible-header" onClick={toggleUpdateFeed}>
                                        <button className="collapse-toggle" aria-label="Toggle section">
                                            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.442 12.76a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.157.77.77 0 0 0-1.116 0L10 11.025 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.157l4.21 4.363Z" />
                                            </svg>
                                        </button>
                                        <h2 className="section-title">Update feed (Inbox)</h2>
                                        <div className="counter-badge">
                                            <span>0</span>
                                        </div>
                                    </div>

                                    <div className="collapsible-content">
                                        <div className="update-feed-empty">
                                            <div className="empty-animation">
                                                <Lottie
                                                    animationData={handclap}
                                                    loop={true}
                                                    autoplay={true}
                                                    style={{
                                                        width: '140%',
                                                        height: '100%'
                                                    }}
                                                />
                                            </div>
                                            <p className="empty-feed-title">No unread updates</p>
                                            <p className="empty-feed-text">
                                                To revisit updates you've already read, change the filter at the top left corner of your feed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </section>



                    </div>

                    {/* ===== RIGHT PANEL ===== */}
                    <aside className="right-panel-container">

                        {/* Templates Banner */}
                        <div className="banner-card">
                            <div className="banner-image-section" style={{ backgroundColor: '#5559df' }}>
                                <img
                                    src="https://cdn.monday.com/images/homepage-desktop/templates-banner.png"
                                    alt="Templates"
                                    className="banner-image"
                                />
                            </div>
                            <div className="banner-content">
                                <div className="banner-text">
                                    Boost your workflow in minutes with ready-made templates
                                </div>
                                <button
                                    onClick={() => router.push('/templates')}
                                    className="banner-button"
                                >
                                    Explore templates
                                </button>
                            </div>
                        </div>

                        {/* Learn & Get Inspired */}
                        <div className="learn-section">
                            <h2 className="learn-title">Learn & get inspired</h2>

                            <div className="navigation-item">
                                <div className="nav-icon-wrapper">
                                    <img
                                        src="https://cdn.monday.com/images/learning-center/get-started-2.svg"
                                        alt="Getting started"
                                        className="nav-icon"
                                    />
                                </div>
                                <div className="nav-content">
                                    <h3 className="nav-title">Getting started</h3>
                                    <p className="nav-description">Learn how monday.com works</p>
                                </div>
                            </div>

                            <div className="navigation-item">
                                <div className="nav-icon-wrapper">
                                    <img
                                        src="https://cdn.monday.com/images/learning-center/help-center.svg"
                                        alt="Help center"
                                        className="nav-icon"
                                    />
                                </div>
                                <div className="nav-content">
                                    <h3 className="nav-title">Help center</h3>
                                    <p className="nav-description">Learn and get support</p>
                                </div>
                            </div>

                        </div>
                    </aside>
                </>
            )}
        </div>
    );
}
