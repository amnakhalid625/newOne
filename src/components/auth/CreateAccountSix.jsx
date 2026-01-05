'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { categoryOptions } from '@/src/data/categoryData';
import '@/src/styles/createaccountsix.css';

const CreateAccountSix = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);
    const [subOptions, setSubOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

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

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    useEffect(() => {
        // Get selected category from sessionStorage
        const storedCategory = typeof window !== 'undefined' ? sessionStorage.getItem('selectedCategory') : null;

        // If no category selected, redirect back to Step 5
        if (!storedCategory) {
            router.push('/auth/setup/management');
            return;
        }

        setSelectedCategory(storedCategory);

        // Get sub-options for selected category
        const categoryData = categoryOptions[storedCategory];
        if (categoryData && categoryData.subOptions) {
            setSubOptions(categoryData.subOptions);
        }
    }, [router]);

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
    };

    const handleBack = () => {
        router.push('/auth/setup/management');
    };

    const handleContinue = () => {
        if (selectedOption) {
            console.log('Selected Category:', selectedCategory);
            console.log('Selected Sub-option:', selectedOption);

            // Save sub-option
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('selectedSubCategory', selectedOption);
            }

            // Navigate to /seven -> /auth/setup/source
            router.push('/auth/setup/source');
        }
    };

    const isFormValid = selectedOption !== null;

    if (!selectedCategory && subOptions.length === 0) {
        return null; // Or loading state
    }

    return (
        <div className="account-sixth-container">
            {/* Left Section */}
            <motion.div
                className="account-sixth-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Content Wrapper */}
                <div className="account-sixth-content-wrapper">
                    {/* Logo */}
                    <motion.div
                        className="account-sixth-logo-container"
                        variants={itemVariants}
                    >
                        <div className="create-account-logo-wrapper">
                            <img
                                src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                                alt="monday.com logo"
                                className="account-sixth-logo"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="account-sixth-form-container">
                        <motion.div variants={itemVariants}>
                            {/* Title */}
                            <h2 className="account-sixth-title">
                                Select what you'd like to focus on first
                            </h2>

                            {/* Subtitle */}
                            <div className="account-sixth-subtitle">
                                Help us tailor the best experience for you
                            </div>

                            {/* Options Grid */}
                            <div className="account-sixth-options-wrapper">
                                {subOptions.map((option, index) => (
                                    <div key={option.id} className="account-sixth-option-item">
                                        <motion.button
                                            type="button"
                                            onClick={() => handleOptionSelect(option.id)}
                                            className={`account-sixth-option-button ${selectedOption === option.id ? 'selected' : ''}`}
                                            variants={buttonVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onMouseEnter={(e) => {
                                                if (selectedOption !== option.id) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(103, 104, 121, 0.1)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (selectedOption !== option.id) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                                                }
                                            }}
                                        >
                                            <div className="account-sixth-option-label">
                                                {option.label}
                                            </div>
                                        </motion.button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    className="account-sixth-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="account-sixth-button-group">
                        <motion.button
                            type="button"
                            onClick={handleBack}
                            className="account-sixth-button account-sixth-back-button"
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
                            tabIndex={isFormValid ? 0 : -1}
                            className="account-sixth-button account-sixth-continue-button"
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
                className="account-sixth-right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="account-sixth-right-inner">
                    <motion.img
                        src="https://dapulse-res.cloudinary.com/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-focus-on.png"
                        alt=""
                        className="account-sixth-right-image"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default CreateAccountSix;
