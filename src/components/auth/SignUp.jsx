"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import "@/src/styles/signup.css";
import {
  auth,
  googleProvider,
  microsoftProvider,
  signInWithPopup,
  // database,
  // ref,
  // set,
  onAuthStateChanged,
} from "@/src/utils/firebase";

const SignUp = () => {
  const router = useRouter();
  const { saveEmailForSignup, login, user: contextUser } = useAuth();

  const hasNavigated = useRef(false);
  const isAuthenticating = useRef(false);
  const unsubscribeRef = useRef(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [microsoftLoading, setMicrosoftLoading] = useState(false);
  const [continueLoading, setContinueLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  useEffect(() => {
    let isMounted = true;

    const checkAuth = () => {
      if (contextUser && !hasNavigated.current) {
        console.log("User already authenticated in context, redirecting...");
        hasNavigated.current = true;
        setCheckingAuth(false);
        setTimeout(() => router.replace("/auth/setup/one-last-thing"), 0);
        return;
      }

      unsubscribeRef.current = onAuthStateChanged(auth, (user) => {
        if (!isMounted) return;

        if (user && !hasNavigated.current) {
          console.log("User already authenticated in Firebase, redirecting...");
          hasNavigated.current = true;
          if (unsubscribeRef.current) unsubscribeRef.current();
          setTimeout(() => router.replace("/auth/setup/one-last-thing"), 0);
        } else if (!user) {
          setCheckingAuth(false);
        }
      });
    };

    checkAuth();

    return () => {
      isMounted = false;
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
  }, [contextUser, router]);

  if (checkingAuth) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="loading-container"
      >
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <style>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #ffffff;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #0073ea;
            border-radius: 50%;
          }
        `}</style>
      </motion.div>
    );
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const saveEmailToBackend = async (emailAddress) => {
    try {
      const response = await fetch(
        "https://monday-backend-one.vercel.app/api/users/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailAddress }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Email saved successfully:", data);
        return true;
      }
      console.error("Failed to save email:", data.message);
      return false;
    } catch (error) {
      console.error("Error saving email:", error);
      alert("Failed to save email. Please try again.");
      return false;
    }
  };

  const saveAccountToMongoDB = async (user) => {
    try {
      const accountName = user.email
        .split("@")[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      const response = await fetch(
        "https://monday-backend-one.vercel.app/api/account/save-account",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            fullName: user.displayName || user.email.split("@")[0],
            accountName,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("✅ Account saved to MongoDB:", data);
      } else {
        console.warn("⚠️ Account save failed:", data.message);
      }
    } catch (error) {
      console.error("❌ MongoDB account save error:", error);
    }
  };

  const handleOAuthSignIn = async (provider, setLoading, providerName) => {
    if (isAuthenticating.current || hasNavigated.current) return;

    isAuthenticating.current = true;
    setLoading(true);

    try {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Temporarily disabled - Firebase Realtime Database not configured
      // await set(ref(database, 'users/' + user.uid), {
      //     email: user.email,
      //     displayName: user.displayName,
      //     photoURL: user.photoURL,
      //     provider: providerName,
      //     createdAt: new Date().toISOString()
      // });

      await saveAccountToMongoDB(user);
      if (typeof window !== "undefined")
        localStorage.setItem("userEmail", user.email);

      await login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        provider: providerName,
      });

      if (!hasNavigated.current) {
        hasNavigated.current = true;
        router.replace("/auth/setup/one-last-thing");
      }
    } catch (error) {
      console.error(`${providerName} Sign-In error:`, error);
      isAuthenticating.current = false;
      setLoading(false);

      if (
        error.code === "auth/popup-closed-by-user" ||
        error.code === "auth/cancelled-popup-request"
      ) {
        return;
      } else if (error.code === "auth/popup-blocked") {
        alert("Pop-up blocked by browser. Please allow pop-ups and try again.");
      } else {
        alert(`${providerName} Sign-In failed: ${error.message}`);
      }
    }
  };

  const handleContinue = async () => {
    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 3000);
      return;
    }

    setContinueLoading(true);
    const saved = await saveEmailToBackend(email);

    if (saved) {
      if (typeof window !== "undefined")
        localStorage.setItem("userEmail", email);
      saveEmailForSignup(email);
      router.push("/auth/setup/account");
    }

    setContinueLoading(false);
  };

  return (
    <div className="signup-container">
      <motion.div
        className="left-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="content-wrapper">
          <motion.div variants={itemVariants}>
            <h1 className="main-heading">Welcome to monday.com</h1>
            <h2 className="sub-heading">
              Get started - it's free. No credit card needed.
            </h2>
          </motion.div>

          <motion.div className="form-content" variants={itemVariants}>
            {/* OAuth Buttons */}
            <div className="oauth-buttons">
              <motion.button
                onClick={() =>
                  handleOAuthSignIn(googleProvider, setGoogleLoading, "google")
                }
                disabled={googleLoading}
                className="oauth-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
                  alt=""
                  className="oauth-icon"
                />
                <span>
                  {googleLoading ? "Signing in..." : "Continue with Google"}
                </span>
              </motion.button>

              <motion.button
                onClick={() =>
                  handleOAuthSignIn(
                    microsoftProvider,
                    setMicrosoftLoading,
                    "microsoft"
                  )
                }
                disabled={microsoftLoading}
                className="oauth-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/v1702826399/Growth%20Activation/Signup/soft-signup/logo_microsoft.png"
                  alt=""
                  className="oauth-icon"
                />
                <span>
                  {microsoftLoading
                    ? "Signing in..."
                    : "Continue with Microsoft"}
                </span>
              </motion.button>
            </div>

            {/* Divider */}
            <motion.div className="divider" variants={itemVariants}>
              <div className="divider-line"></div>
              <div className="divider-text">Or</div>
              <div className="divider-line"></div>
            </motion.div>

            {/* Email Section */}
            <motion.div variants={itemVariants}>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={`email-input ${emailError ? "error" : ""}`}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              <AnimatePresence>
                {emailError && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Please enter a valid email address
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleContinue}
                disabled={continueLoading}
                className="continue-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {continueLoading ? "Saving..." : "Continue"}
              </motion.button>
            </motion.div>

            {/* Terms */}
            <motion.div className="terms" variants={itemVariants}>
              <div>By proceeding, you agree to the</div>
              <div>
                <a
                  href="https://monday.com/l/legal/tos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>
                <span> and </span>
                <a
                  href="https://monday.com/l/privacy/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="footer" variants={itemVariants}>
            <span>Already have a monday.com account? </span>
            <a href="/auth/login_monday?product_kind=core">Log in</a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="right-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          alt=""
          className="right-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default SignUp;
