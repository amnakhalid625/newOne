"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import "@/src/styles/createaccountsecond.css";

const CreateAccountSecond = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleContinue = async () => {
    if (!fullName.trim()) {
      setFullNameError(true);
      return;
    }

    try {
      let userEmail = null;
      if (typeof window !== "undefined") {
        userEmail = localStorage.getItem("userEmail");
      }

      if (!userEmail) {
        alert("Email not found. Please go back and enter your email again.");
        router.push("/auth/signup"); // /one -> /auth/signup
        return;
      }

      console.log("Saving account with:", {
        email: userEmail,
        fullName,
        accountName,
      });

      const res = await fetch(
        "https://monday-backend-one.vercel.app/api/account/save-account",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userEmail,
            fullName,
            accountName,
          }),
        }
      );

      const data = await res.json();
      console.log("Saved:", data);

      if (res.ok) {
        router.push("/auth/setup/one-last-thing"); // /three -> /auth/setup/one-last-thing
      } else {
        alert("Failed to save account: " + data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Error saving account. Please try again.");
    }
  };

  const handleBack = () => {
    console.log("Back clicked");
    router.push("/auth/signup"); // /one -> /auth/signup
  };

  return (
    <div className="create-account-container">
      {/* Left Section */}
      <motion.div
        className="create-account-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Content Wrapper */}
        <div className="create-account-content-wrapper">
          {/* Logo */}
          <motion.div
            className="create-account-logo-container"
            variants={itemVariants}
          >
            <div className="create-account-logo-wrapper">
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                alt="monday.com logo"
                className="create-account-logo"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 className="create-account-title" variants={itemVariants}>
            Create your account
          </motion.h2>

          {/* Content */}
          <motion.div
            className="create-account-form-container"
            variants={itemVariants}
          >
            {/* Full Name Field */}
            <div className="create-account-input-group">
              <label htmlFor="fullname" className="create-account-label">
                Full name
              </label>
              <div className="create-account-input-wrapper">
                <input
                  type="text"
                  id="fullname"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (e.target.value.trim()) {
                      setFullNameError(false);
                    }
                  }}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`create-account-input ${
                    fullNameError ? "error" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {fullNameError && (
                  <motion.div
                    className="create-account-error-message"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Enter your full name
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Account Name Field */}
            <div className="create-account-input-group">
              <label htmlFor="accountname" className="create-account-label">
                Account name
              </label>
              <div className="create-account-input-wrapper">
                <input
                  type="text"
                  id="accountname"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  placeholder="For example, company's or department's name"
                  autoComplete="off"
                  className="create-account-input"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="create-account-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="create-account-button-group">
            {/* Back Button */}
            <motion.button
              onClick={handleBack}
              className="create-account-button create-account-back-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                className="create-account-button-icon"
              >
                <path d="M7.24 9.444a.77.77 0 0 0 0 1.116l4.363 4.21a.84.84 0 0 0 1.157 0 .77.77 0 0 0 0-1.116l-3.785-3.652 3.785-3.653a.77.77 0 0 0 0-1.116.84.84 0 0 0-1.157 0L7.24 9.443Z"></path>
              </svg>
              Back
            </motion.button>

            {/* Continue Button */}
            <motion.button
              onClick={handleContinue}
              disabled={!fullName.trim()}
              className="create-account-button create-account-continue-button"
              whileHover={fullName.trim() ? { scale: 1.02 } : {}}
              whileTap={fullName.trim() ? { scale: 0.98 } : {}}
            >
              Continue
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                className="create-account-button-icon-right"
              >
                <path
                  fillRule="evenodd"
                  d="M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"
                ></path>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="create-account-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="create-account-right-inner">
          <div className="create-account-right-content">
            <motion.img
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
              alt=""
              className="create-account-right-image"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateAccountSecond;
