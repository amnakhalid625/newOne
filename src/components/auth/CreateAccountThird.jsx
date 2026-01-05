'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { goalOptions, roleOptions } from '@/src/data/categoryData';
import { useAuth } from '@/src/context/AuthContext';
import '@/src/styles/createaccountthird.css';

export default function CreateAccountThird() {
    const router = useRouter();
    const { saveUserCategory } = useAuth();
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

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

    const handleGoalSelect = (goalId) => {
        setSelectedGoal(goalId);

        if (goalId === 'personal') {
            setSelectedRole('personal');
        } else {
            setSelectedRole(null);
        }
    };

    const handleRoleSelect = (roleId) => {
        setSelectedRole(roleId);
    };

    const handleBack = () => {
        router.push('/auth/setup/account'); // Back to Step 2
        if (selectedGoal && !selectedRole) {
            setSelectedGoal(null);
        } else if (selectedRole) {
            setSelectedRole(null);
        }
    };

    const handleContinue = () => {
        if (selectedRole) {
            console.log('Goal:', selectedGoal, 'Role:', selectedRole);

            saveUserCategory(selectedGoal, selectedRole);

            router.push('/auth/setup/profile'); // Next to Step 4
        }
    };

    const isFormValid = selectedRole !== null;

    return (
        <div className="account-third-container">
            {/* Left Section */}
            <motion.div
                className="account-third-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Content Wrapper */}
                <div className="account-third-content-wrapper">
                    {/* Logo */}
                    <motion.div
                        className="account-third-logo-container"
                        variants={itemVariants}
                    >
                        <img
                            src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                            alt="monday.com logo"
                            className="account-third-logo"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="account-third-form-container">
                        {/* Step 1: Goal Selection */}
                        <motion.div
                            className="account-third-section"
                            variants={itemVariants}
                        >
                            <h2 className="account-third-title">
                                Hey there, what brings you here today?
                            </h2>

                            <div className="account-third-options-wrapper">
                                {goalOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        variants={buttonVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.button
                                            type="button"
                                            onClick={() => handleGoalSelect(option.id)}
                                            className={`account-third-option-button ${selectedGoal === option.id ? 'selected' : ''}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {option.label}
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Step 2: Role Selection */}
                        <AnimatePresence>
                            {selectedGoal && selectedGoal !== 'personal' && (
                                <motion.div
                                    className="account-third-section"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <h2 className="account-third-title">
                                        What best describes your current role?
                                    </h2>

                                    <div className="account-third-options-wrapper">
                                        {roleOptions[selectedGoal]?.map((option, index) => (
                                            <motion.div
                                                key={option.id}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                            >
                                                <motion.button
                                                    type="button"
                                                    onClick={() => handleRoleSelect(option.id)}
                                                    className={`account-third-option-button ${selectedRole === option.id ? 'selected' : ''}`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {option.label}
                                                </motion.button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    className="account-third-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="account-third-button-group">
                        <motion.button
                            type="button"
                            onClick={handleBack}
                            className="account-third-button account-third-back-button"
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
                            className="account-third-button account-third-continue-button"
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
                className="account-third-right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="account-third-right-inner">
                    <motion.img
                        src="https://dapulse-res.cloudinary.com/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
                        alt=""
                        className="account-third-right-image"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
