"use client";

import React, { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "@/src/styles/createaccounteight.css";

// Toast Notification Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={`toast-notification ${type}`}
    >
      <div className="toast-content">
        <div className="toast-icon">
          {type === "success" && (
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" />
            </svg>
          )}
          {type === "error" && (
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
            </svg>
          )}
          {type === "warning" && (
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
            </svg>
          )}
        </div>
        <p className="toast-message">{message}</p>
      </div>
      <button onClick={onClose} className="toast-close">
        <X size={16} />
      </button>
    </motion.div>
  );
};

const CreateAccountEight = () => {
  const { user, userCategory } = useAuth();
  const router = useRouter();

  const [invites, setInvites] = useState([
    { id: 0, email: "", role: "Admin" },
    { id: 1, email: "", role: "Admin" },
  ]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    accountName: "",
  });

  const [loading, setLoading] = useState(false);
  const [accountUrl, setAccountUrl] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  // Log category for debugging
  useEffect(() => {
    const category = userCategory || sessionStorage.getItem("userCategory");
    console.log("🔍 Step 8 - User Category:", category);
  }, [userCategory]);

  // Fetch user/account data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let email = user?.email || localStorage.getItem("userEmail");
        let name = user?.displayName || "";

        if (!email) {
          showToast("Session expired. Please start again.", "error");
          router.push("/auth/signup");
          return;
        }

        const response = await fetch(
          "https://monday-backend-one.vercel.app/api/account/get-account",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          }
        );

        const data = await response.json();

        if (response.ok && data.account) {
          const accountData = {
            name: data.account.fullName || name || "User",
            email: email,
            accountName: data.account.accountName || "",
          };
          setUserData(accountData);
          if (data.account.accountName) {
            setAccountUrl(`${data.account.accountName}.monday.com`);
          }
        } else {
          setUserData((prev) => ({ ...prev, name: name || "User", email }));
        }
      } catch (error) {
        console.error("Error fetching account data:", error);
        const email = localStorage.getItem("userEmail");
        if (email) {
          setUserData((prev) => ({
            ...prev,
            email,
            name: user?.displayName || "User",
          }));
        }
      }
    };

    fetchUserData();
  }, [user, router]);

  const addInvite = () => {
    setInvites([...invites, { id: Date.now(), email: "", role: "Admin" }]);
  };

  const removeInvite = (id) => {
    setInvites(invites.filter((invite) => invite.id !== id));
  };

  const updateEmail = (id, email) => {
    setInvites(
      invites.map((invite) =>
        invite.id === id ? { ...invite, email } : invite
      )
    );
  };

  const hasValidEmails = invites.some(
    (invite) => invite.email.trim().length > 0
  );

  const handleInviteTeam = async () => {
    if (!hasValidEmails) {
      showToast("Please add at least one email address", "warning");
      return;
    }

    if (!userData.accountName || userData.accountName.trim() === "") {
      showToast(
        "Account name is missing! Please go back and complete your account setup.",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      const validInvitations = invites.filter((i) => i.email.trim());
      const userId = user?.uid || `email-user-${Date.now()}`;

      const payload = {
        inviterUserId: userId,
        inviterName: userData.name,
        inviterEmail: userData.email,
        accountName: userData.accountName,
        invitations: validInvitations,
      };

      const response = await fetch(
        "https://monday-backend-one.vercel.app/api/invitations/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showToast(
          `Successfully sent ${data.sentCount} invitation(s)!`,
          "success"
        );

        const category = userCategory || sessionStorage.getItem("userCategory");
        console.log("✅ Invites sent! Navigating based on category:", category);

        if (category === "ngo" || category === "nonprofit") {
          setTimeout(() => router.push("/auth/setup/columns"), 1500);
        } else {
          setTimeout(() => router.push("/auth/setup/board-name"), 1500);
        }
      } else {
        showToast(`Failed: ${data.message}`, "error");
      }
    } catch (error) {
      showToast(
        "Network error. Please check your connection and try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRemindLater = () => {
    const category = userCategory || sessionStorage.getItem("userCategory");
    console.log("⏭️ Remind Later clicked! Category:", category);

    if (category === "ngo" || category === "nonprofit") {
      router.push("/auth/setup/columns");
    } else {
      router.push("/auth/setup/board-name");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.1 },
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

  return (
    <div className="account-eight-container">
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="account-eight-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={() => router.push("/auth/setup/source")}
          className="account-eight-close-btn"
          whileHover={{ scale: 1.1, backgroundColor: "#f5f6f8" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          <X size={20} />
        </motion.button>

        <div className="account-eight-content-wrapper">
          <motion.div className="account-eight-header" variants={itemVariants}>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
              alt="logo"
              className="account-eight-logo"
            />
            <h2 className="account-eight-title">Who else is on your team?</h2>

            {accountUrl ? (
              <motion.p
                className="account-eight-url"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Your team will join:{" "}
                <span className="account-eight-url-highlight">
                  {accountUrl}
                </span>
              </motion.p>
            ) : (
              <motion.p
                className="account-eight-warning"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* ⚠️ Warning: Account name is missing. Please go back and complete setup. */}
              </motion.p>
            )}
          </motion.div>

          <motion.div className="account-eight-invites" variants={itemVariants}>
            <AnimatePresence mode="popLayout">
              {invites.map((invite, index) => (
                <motion.div
                  key={invite.id}
                  className="account-eight-invite-row"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div className="account-eight-email-wrapper">
                    <input
                      type="email"
                      placeholder="Add email here"
                      value={invite.email}
                      onChange={(e) => updateEmail(invite.id, e.target.value)}
                      className="account-eight-email-input"
                      autoComplete="off"
                    />
                  </div>

                  <div className="account-eight-role-wrapper">
                    <select
                      value={invite.role}
                      onChange={(e) => {
                        setInvites(
                          invites.map((inv) =>
                            inv.id === invite.id
                              ? { ...inv, role: e.target.value }
                              : inv
                          )
                        );
                      }}
                      className="account-eight-role-select"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Member">Member</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="20px"
                      height="20px"
                      className="account-eight-dropdown-icon"
                    >
                      <path d="M9.442 12.76a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.157.77.77 0 0 0-1.116 0L10 11.025 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.157l4.21 4.363Z"></path>
                    </svg>
                  </div>

                  {index > 1 ? (
                    <motion.button
                      onClick={() => removeInvite(invite.id)}
                      className="account-eight-remove-btn"
                      whileHover={{ scale: 1.1, backgroundColor: "#fee" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={16} />
                    </motion.button>
                  ) : (
                    <div className="account-eight-remove-spacer"></div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              onClick={addInvite}
              className="account-eight-add-btn"
              whileHover={{ scale: 1.02, backgroundColor: "#e3f2fd" }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus size={20} />
              <span>Add another</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="account-eight-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <motion.button
            onClick={handleRemindLater}
            className="account-eight-remind-btn"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Remind me later
          </motion.button>
          <motion.button
            onClick={handleInviteTeam}
            disabled={!hasValidEmails || loading || !userData.accountName}
            className="account-eight-invite-btn"
            whileHover={
              hasValidEmails && !loading && userData.accountName
                ? { scale: 1.02 }
                : {}
            }
            whileTap={
              hasValidEmails && !loading && userData.accountName
                ? { scale: 0.98 }
                : {}
            }
          >
            {loading ? "Sending..." : "Invite your team"}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="account-eight-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
          alt="Invite your team"
          className="account-eight-right-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default CreateAccountEight;
