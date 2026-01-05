'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Replaces react-router-dom Link

// Imports verified from Next.js project structure
import WorkManagementNavbar from '@/src/components/work-management/sections/WorkManagementNavbar';
import WorkManagementPartners from '@/src/components/work-management/sections/WorkManagementPartners';
import ProjectGoals from '@/src/components/work-management/sections/ProjectGoals';
import SeeItInActionSection from '@/src/components/work-management/sections/SeeItInActionSection';
import AiSectionParallax from '@/src/components/work-management/sections/AiSectionParallax';
import FlipCardsComponent from '@/src/components/work-management/sections/FlipCardsComponent';
import AIBusinessPartner from '@/src/components/work-management/sections/AIBusinessPartner';
import EnterpriseClaritySection from '@/src/components/work-management/sections/EnterpriseClaritySection';
import RecognizedAsLeadersSection from '@/src/components/work-management/sections/RecognizedAsLeadersSection';
import ConnectStackSection from '@/src/components/work-management/sections/ConnectStackSection';
import CustomerTestimonialsSlider from '@/src/components/work-management/sections/CustomerTestimonialsSlider';
import G2BadgesSection from '@/src/components/work-management/sections/G2BadgesSection';
import TeamAccordionSection from '@/src/components/work-management/sections/TeamAccordionSection';
import ProductsShowcase from '@/src/components/work-management/sections/ProductsShowcase';
import Footer from '@/src/components/layout/Footer';

const WorkManagementPage = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = [
        'Project management',
        'Task management',
        'Client\nprojects',
        'Business operations',
        'Resource management',
        'Portfolio management',
        'Goals & strategy',
        'Requests & approvals',
        'Create your own'
    ];

    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <>
            <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
                {/* Navbar */}
                <WorkManagementNavbar />

                {/* Hero Section */}
                <div style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '1rem', overflow: 'visible', transition: 'all 0.2s', display: 'block' }}>
                    <div style={{ backgroundColor: '#f1f1f1', borderRadius: '2.5rem', overflow: 'hidden' }}>
                        <div style={{ width: '100%', maxWidth: '85.75rem', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%', paddingTop: '2.25rem', textAlign: 'center' }}>
                                {/* Heading */}
                                <h1 style={{ fontSize: '4rem', lineHeight: '1.2', fontWeight: '400', letterSpacing: '-0.02em', color: '#000', marginTop: '0', marginBottom: '0' }}>
                                    Bring your strategy to life
                                </h1>

                                {/* Subtitle */}
                                <p style={{ fontSize: '1.25rem', color: '#000', marginTop: '1.5rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '39.5rem' }}>
                                    Gain the clarity and control you need to connect your everyday work to business goals across projects and processes.
                                </p>

                                {/* What would you like text */}
                                <div style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '0.875rem' }}>
                                    What would you like to work on?<br />
                                </div>

                                {/* Tags Container */}
                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', width: '100%', maxWidth: '100%' }}>
                                    {tags.map((tag, index) => {
                                        const isSelected = selectedTags.includes(tag);
                                        const [isHovered, setIsHovered] = React.useState(false);
                                        return (
                                            <div
                                                key={tag}
                                                onClick={() => toggleTag(tag)}
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                style={{
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    backgroundColor: isSelected ? '#6161ff' : (isHovered ? '#CFD0F8' : '#fff'),
                                                    border: `0.8px solid #6161ff`,
                                                    borderRadius: '4px',
                                                    width: '7.5rem',
                                                    margin: '0.5rem 0.25rem',
                                                    padding: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    lineHeight: '1.6',
                                                    display: 'flex',
                                                    overflow: 'hidden',
                                                    columnGap: '1.7rem',
                                                    rowGap: '1.7rem',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-start',
                                                    color: isSelected ? '#fff' : '#181b34',
                                                    transition: 'background-color 0.2s'
                                                }}
                                            >
                                                {/* Checkbox */}
                                                <div
                                                    style={{
                                                        zIndex: 1,
                                                        border: `1px solid ${isSelected ? '#fff' : '#6161ff'}`,
                                                        backgroundColor: isSelected ? '#6161ff' : 'transparent',
                                                        borderRadius: '0.1875rem',
                                                        flex: 'none',
                                                        width: '1.125rem',
                                                        height: '1.125rem',
                                                        marginRight: '0.5rem',
                                                        position: 'relative',
                                                        ...(isSelected && {
                                                            backgroundImage: 'url("https://cdn.prod.website-files.com/63bd15a406b2101a5dbb3e8f/64d93e951fab27b222e7e64d_checkmark.svg")',
                                                            backgroundPosition: '50% 50%',
                                                            backgroundSize: '0.75rem',
                                                            backgroundRepeat: 'no-repeat'
                                                        })
                                                    }}
                                                />

                                                {/* Tag Text */}
                                                <div
                                                    style={{
                                                        zIndex: 1,
                                                        fontSize: '0.815rem',
                                                        lineHeight: '1.3',
                                                        position: 'relative',
                                                        whiteSpace: 'pre-line'
                                                    }}
                                                >
                                                    {tag}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Spacer */}
                                <div style={{ height: '1rem' }} />

                                {/* Get Started Button - Adapted to next/link */}
                                <Link
                                    href="/auth/signup"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        maxWidth: '100%',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        border: '0',
                                        borderRadius: '10rem',
                                        padding: '0.9375rem 2rem',
                                        position: 'relative',
                                        transition: 'all 0.2s',
                                        backgroundColor: selectedTags.length > 0 ? '#6161ff' : '#000'
                                    }}
                                >
                                    <div>Get Started</div>
                                    <div style={{ marginLeft: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                            <g clipPath="url(#clip0_2450_390)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2450_390">
                                                    <rect width="12" height="10" fill="currentcolor" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </Link>

                                {/* Spacer */}
                                <div style={{ height: '3rem' }} />

                                {/* Hero Image */}
                                <img
                                    src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714a02f255bf1c0907ad_WM-first%20fold.avif"
                                    loading="lazy"
                                    sizes="(max-width: 2698px) 100vw, 2698px"
                                    srcSet="https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714a02f255bf1c0907ad_WM-first%20fold-p-500.avif 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714a02f255bf1c0907ad_WM-first%20fold-p-800.avif 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714a02f255bf1c0907ad_WM-first%20fold-p-1080.avif 1080w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714a02f255bf1c0907ad_WM-first%20fold.avif 2698w"
                                    alt=""
                                    style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        display: 'inline-block',
                                        verticalAlign: 'bottom',
                                        textAlign: 'left',
                                        overflow: 'clip',
                                        border: '1px solid #fff',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WorkManagementPartners />
            <ProjectGoals />
            <SeeItInActionSection />
            <AiSectionParallax />
            <FlipCardsComponent />
            <AIBusinessPartner />
            <EnterpriseClaritySection />
            <RecognizedAsLeadersSection />
            <ConnectStackSection />
            <CustomerTestimonialsSlider />
            <G2BadgesSection />
            <TeamAccordionSection />
            <ProductsShowcase />
            <Footer />
        </>
    );
};

export default WorkManagementPage;
