'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { managementOptions } from '@/src/data/categoryData';
import '@/src/styles/createaccountfifth.css';

const CreateAccountFive = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);

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

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
    };

    const handleBack = () => {
        router.push('/auth/setup/profile');
    };

    const handleContinue = () => {
        if (selectedOption) {
            // Save to sessionStorage to mimic passing state
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('selectedCategory', selectedOption);
            }
            // Navigate to /six -> /auth/setup/management-details
            router.push('/auth/setup/management-details');
        }
    };

    const isFormValid = selectedOption !== null;

    return (
        <div className="account-fifth-container">
            {/* Left Section */}
            <motion.div
                className="account-fifth-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Content Wrapper */}
                <div className="account-fifth-content-wrapper">
                    {/* Logo */}
                    <motion.div
                        className="account-fifth-logo-container"
                        variants={itemVariants}
                    >
                        <div className="create-account-logo-wrapper">
                            <img
                                src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                                alt="monday.com logo"
                                className="account-fifth-logo"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="account-fifth-form-container">
                        <motion.div variants={itemVariants}>
                            <h2 className="account-fifth-title">
                                Select what you'd like to manage first
                            </h2>

                            <div className="account-fifth-subtitle">
                                You can always add more in the future
                            </div>

                            {/* Options Grid */}
                            <div className="account-fifth-options-wrapper">
                                {managementOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        variants={buttonVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.button
                                            type="button"
                                            onClick={() => handleOptionSelect(option.id)}
                                            className={`account-fifth-option-button ${selectedOption === option.id ? 'selected' : ''}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {option.label}
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    className="account-fifth-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="account-fifth-button-group">
                        <motion.button
                            type="button"
                            onClick={handleBack}
                            className="account-fifth-button account-fifth-back-button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path d="M7.24 9.444a.77.77 0 0 0 0 1.116l4.363 4.21a.84.84 0 0 0 1.157 0 .77.77 0 0 0 0-1.116l-3.785-3.652 3.785-3.653a.77.77 0 0 0 0-1.116.84.84 0 0 0-1.157 0L7.24 9.443Z"></path>
                            </svg>
                            Back
                        </motion.button>

                        <motion.button
                            type="button"
                            onClick={handleContinue}
                            disabled={!isFormValid}
                            className="account-fifth-button account-fifth-continue-button"
                            whileHover={isFormValid ? { scale: 1.02 } : {}}
                            whileTap={isFormValid ? { scale: 0.98 } : {}}
                        >
                            Continue
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path d="M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"></path>
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="account-fifth-right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="account-fifth-right-inner">
                    <motion.img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-manage.png"
                        alt=""
                        className="account-fifth-right-image"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default CreateAccountFive;
