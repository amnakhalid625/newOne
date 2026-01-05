'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { teamSizeOptions, companySizeOptions } from '@/src/data/categoryData';
import '@/src/styles/createaccountforth.css';

const CreateAccountFourth = () => {
    const router = useRouter();
    const [selectedTeamSize, setSelectedTeamSize] = useState(null);
    const [selectedCompanySize, setSelectedCompanySize] = useState(null);

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

    const handleTeamSizeSelect = (id) => {
        setSelectedTeamSize(id);
    };

    const handleCompanySizeSelect = (id) => {
        setSelectedCompanySize(id);
    };

    const handleBack = () => {
        console.log('Going back');
        router.push('/auth/setup/one-last-thing'); // Back to Step 3
    };

    const handleContinue = () => {
        console.log('Selected:', { teamSize: selectedTeamSize, companySize: selectedCompanySize });
        // In React code, it navigates to '/five' which is 'CreateAccountFifth'.
        // Mapped to '/auth/setup/usage'
        router.push('/auth/setup/management');
    };

    const isFormValid = selectedTeamSize && selectedCompanySize;

    return (
        <div className="account-forth-container">
            {/* Left Section */}
            <motion.div
                className="account-forth-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Content Wrapper */}
                <div className="account-forth-content-wrapper">
                    {/* Logo */}
                    <motion.div
                        className="account-forth-logo-container"
                        variants={itemVariants}
                    >
                        <img
                            src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                            alt="monday.com logo"
                            className="account-forth-logo"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="account-forth-form-container">
                        {/* Question 1: Team Size */}
                        <motion.div
                            className="account-forth-section"
                            variants={itemVariants}
                        >
                            <h2 className="account-forth-title">
                                How many people are on your team?
                            </h2>

                            <div className="account-forth-options-wrapper">
                                {teamSizeOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        variants={buttonVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.button
                                            type="button"
                                            onClick={() => handleTeamSizeSelect(option.id)}
                                            className={`account-forth-option-button ${selectedTeamSize === option.id ? 'selected' : ''}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {option.label}
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Question 2: Company Size */}
                        <motion.div
                            className="account-forth-section"
                            variants={itemVariants}
                        >
                            <h2 className="account-forth-title">
                                How many people work at your company?
                            </h2>

                            <div className="account-forth-options-wrapper">
                                {companySizeOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        variants={buttonVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.05 + 0.2 }}
                                    >
                                        <motion.button
                                            type="button"
                                            onClick={() => handleCompanySizeSelect(option.id)}
                                            className={`account-forth-option-button ${selectedCompanySize === option.id ? 'selected' : ''}`}
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
                    className="account-forth-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="account-forth-button-group">
                        <motion.button
                            type="button"
                            onClick={handleBack}
                            className="account-forth-button account-forth-back-button"
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
                            className="account-forth-button account-forth-continue-button"
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
                className="account-forth-right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="account-forth-right-inner">
                    <motion.img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-many-people-work-at-your-company.png"
                        alt=""
                        className="account-forth-right-image"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default CreateAccountFourth;
