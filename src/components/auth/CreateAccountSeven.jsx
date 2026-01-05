'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import '@/src/styles/createaccountseven.css';

// Options data
const options = [
    { id: 'news', label: 'News publications' },
    { id: 'tv', label: 'TV / Streaming' },
    { id: 'search_engine', label: 'Online search engines (e.g. Google, Bing, etc.)' },
    { id: 'social_media', label: 'Facebook / Instagram' },

    { id: 'ai_chatbots', label: 'AI Chatbots (e.g. ChatGPT, Claude, etc.)' },
    { id: 'email', label: 'Email' },
    { id: 'linkedin', label: 'Linkedin' },
    { id: 'billboard', label: 'Outdoors ad (billboards / transport / airport)' },
    { id: 'consultant', label: 'Consultant' },
    { id: 'software_review_sites', label: 'Software Review Site' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'audio_ad', label: 'Audio streaming services' },
    { id: 'friend', label: 'Friend' },
    { id: 'events', label: 'Events/conferences' },
    { id: 'youtube_ad', label: 'YouTube' },
    { id: 'other', label: 'Other' }
];

const CreateAccountSeven = () => {
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const checkboxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const handleCheckboxChange = (id) => {
        setSelectedOptions(prev => {
            if (prev.includes(id)) {
                return prev.filter(optionId => optionId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleBack = () => {
        router.push('/auth/setup/management-details');
    };

    const handleContinue = () => {
        if (selectedOptions.length > 0) {
            console.log('Selected options:', selectedOptions);
            router.push('/auth/setup/team-members');
        }
    };

    const isFormValid = selectedOptions.length > 0;

    return (
        <div className="account-seventh-container">
            {/* Left Section */}
            <motion.div
                className="account-seventh-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Content Wrapper */}
                <div className="account-seventh-content-wrapper">
                    {/* Logo */}
                    <motion.div
                        className="account-seventh-logo-container"
                        variants={itemVariants}
                    >
                        <img
                            src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                            alt="monday.com logo"
                            className="account-seventh-logo"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="account-seventh-form-container">
                        <motion.div variants={itemVariants}>
                            {/* Title */}
                            <h2 className="account-seventh-title">
                                One last question, how did you hear about us?
                            </h2>

                            {/* Checkboxes Grid */}
                            <div className="account-seventh-checkboxes-wrapper">
                                {options.map((option, index) => {
                                    const isChecked = selectedOptions.includes(option.id);

                                    return (
                                        <div key={option.id} className="account-seventh-checkbox-item">
                                            <motion.label
                                                className="account-seventh-checkbox-label"
                                                variants={checkboxVariants}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => handleCheckboxChange(option.id)}
                                                    className="account-seventh-checkbox-input"
                                                />

                                                {/* Custom Checkbox */}
                                                <div className={`account-seventh-custom-checkbox ${isChecked ? 'checked' : ''}`}>
                                                    {isChecked && (
                                                        <motion.svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            width="12"
                                                            height="12"
                                                            style={{
                                                                color: '#ffffff',
                                                                display: 'block'
                                                            }}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z"
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd" />
                                                        </motion.svg>
                                                    )}
                                                </div>

                                                {/* Label Text */}
                                                <span className="account-seventh-checkbox-text">
                                                    {option.label}
                                                </span>
                                            </motion.label>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    className="account-seventh-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="account-seventh-button-group">
                        <motion.button
                            type="button"
                            onClick={handleBack}
                            className="account-seventh-button account-seventh-back-button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style={{ display: 'block' }}>
                                <path d="M7.24 9.444a.77.77 0 0 0 0 1.116l4.363 4.21a.84.84 0 0 0 1.157 0 .77.77 0 0 0 0-1.116l-3.785-3.652 3.785-3.653a.77.77 0 0 0 0-1.116.84.84 0 0 0-1.157 0L7.24 9.443Z"></path>
                            </svg>
                            Back
                        </motion.button>

                        <motion.button
                            type="button"
                            onClick={handleContinue}
                            disabled={!isFormValid}
                            className="account-seventh-button account-seventh-continue-button"
                            whileHover={isFormValid ? { scale: 1.02 } : {}}
                            whileTap={isFormValid ? { scale: 0.98 } : {}}
                        >
                            Continue
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style={{ display: 'block' }}>
                                <path d="M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"></path>
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="account-seventh-right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="account-seventh-right-inner">
                    <motion.img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
                        alt=""
                        className="account-seventh-right-image"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default CreateAccountSeven;
