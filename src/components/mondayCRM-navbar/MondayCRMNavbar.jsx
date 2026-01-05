import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  Inbox,
  UserPlus,
  Puzzle,
  Bot,
  Settings,
  Search,
  HelpCircle,
  Grid,
  X,
  Trash2,
  Check,
  RefreshCw,
  Heart,
  Gem,
  Mail,
  Users,
  Plus,
  LogOut,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import notificationService from "../../services/notificationService";
import "./MondayCRMNavbar.css";

const MondayCRMNavbar = () => {
  // Notification states
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Other dropdowns states
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isAppsLauncherOpen, setIsAppsLauncherOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Data states
  const [inboxMessages, setInboxMessages] = useState([]);
  const [inboxUnreadCount, setInboxUnreadCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [inviteEmail, setInviteEmail] = useState("");

  const router = useRouter();
  const searchInputRef = useRef(null);

  const fetchNotifications = async () => {
    setLoading(true);
    setError(null);

    try {
      const userId =
        sessionStorage.getItem("mondaySignupEmail") ||
        localStorage.getItem("userEmail") ||
        "demo@user.com";

      const response = await notificationService.getNotifications(
        50,
        0,
        userId
      );

      if (response.success) {
        setNotifications(response.data.notifications);
        setUnreadCount(response.data.unreadCount);
      }
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      setError("Failed to load notifications");
      loadDemoData();
    } finally {
      setLoading(false);
    }
  };

  const loadDemoData = () => {
    setNotifications([
      {
        _id: "1",
        type: "new_lead",
        title: "New Lead Assigned",
        message: "Ali has been assigned to you",
        link: "/leads/123",
        isRead: false,
        priority: "high",
        createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      },
      {
        _id: "2",
        type: "deal_won",
        title: "Deal Won! 🎉",
        message: "ABC Company deal closed - PKR 500,000",
        link: "/deals/456",
        isRead: false,
        priority: "high",
        createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      },
    ]);
    setUnreadCount(2);
  };

  // Load user info
  useEffect(() => {
    const email =
      sessionStorage.getItem("mondaySignupEmail") ||
      localStorage.getItem("userEmail") ||
      "user@example.com";
    let storedName =
      sessionStorage.getItem("userName") || localStorage.getItem("userName");

    // Parse if it's a JSON object
    let name = email.split("@")[0];
    if (storedName) {
      if (storedName.startsWith("{")) {
        try {
          const nameObj = JSON.parse(storedName);
          name =
            nameObj.fullName || nameObj.firstName || nameObj.lastName || name;
        } catch (e) {
          name = storedName;
        }
      } else {
        name = storedName;
      }
    }

    const company = sessionStorage.getItem("companyName") || "My Company";

    setUserInfo({
      email,
      name,
      company,
      initials: name.charAt(0).toUpperCase(),
    });

    // Load inbox messages (demo data for now)
    setInboxMessages([
      {
        id: 1,
        from: "John Doe",
        subject: "New task assigned",
        preview: "You have been assigned to the Q1 Planning task",
        time: new Date(Date.now() - 10 * 60 * 1000),
        isRead: false,
      },
    ]);

    // Load favorites (demo data)
    setFavorites([
      { id: 1, name: "Main Board", type: "board", icon: "📊" },
      { id: 2, name: "CRM Dashboard", type: "dashboard", icon: "📈" },
      { id: 3, name: "Marketing Campaign", type: "board", icon: "🎯" },
    ]);

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close all dropdowns except the specified one
  const closeAllDropdowns = (exceptThis = null) => {
    if (exceptThis !== "notification") setIsNotificationOpen(false);
    if (exceptThis !== "inbox") setIsInboxOpen(false);
    if (exceptThis !== "invite") setIsInviteOpen(false);
    if (exceptThis !== "apps") setIsAppsOpen(false);
    if (exceptThis !== "ai") setIsAIOpen(false);
    if (exceptThis !== "settings") setIsSettingsOpen(false);
    if (exceptThis !== "search") setIsSearchOpen(false);
    if (exceptThis !== "help") setIsHelpOpen(false);
    if (exceptThis !== "favorites") setIsFavoritesOpen(false);
    if (exceptThis !== "appsLauncher") setIsAppsLauncherOpen(false);
    if (exceptThis !== "profile") setIsProfileOpen(false);
  };

  // Handle search
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setSearchResults([
      { id: 1, type: "board", title: "Sales Pipeline", subtitle: "Board" },
      {
        id: 2,
        type: "task",
        title: "Follow up with client",
        subtitle: "Task in Sales Board",
      },
      { id: 3, type: "contact", title: "John Smith", subtitle: "Contact" },
    ]);
  };

  // Handle invite
  const handleInvite = async () => {
    if (!inviteEmail) return;

    try {
      const response = await fetch(
        "https://monday-backend-one.vercel.app/api/invitations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            inviterUserId: userInfo.email,
            inviterName: userInfo.name,
            inviterEmail: userInfo.email,
            accountName: userInfo.company || "My Workspace",
            invitations: [
              {
                email: inviteEmail,
                role: "member",
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.sentCount > 0) {
        alert(`✅ Invitation sent successfully to ${inviteEmail}!`);
        setInviteEmail("");
        setIsInviteOpen(false);
      } else {
        alert(data.message || "Failed to send invitation");
      }
    } catch (err) {
      console.error("Failed to send invitation:", err);
      alert("Failed to send invitation. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    router.push("/");
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      await notificationService.markAsRead(notificationId);
      setNotifications((prev) =>
        prev.map((n) => (n._id === notificationId ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) {
      console.error("Failed to mark as read:", err);
      setNotifications((prev) =>
        prev.map((n) => (n._id === notificationId ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error("Failed to mark all as read:", err);
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    }
  };

  const handleDelete = async (notificationId) => {
    try {
      await notificationService.deleteNotification(notificationId);
      const notification = notifications.find((n) => n._id === notificationId);
      setNotifications((prev) => prev.filter((n) => n._id !== notificationId));
      if (!notification?.isRead) {
        setUnreadCount((prev) => Math.max(0, prev - 1));
      }
    } catch (err) {
      console.error("Failed to delete notification:", err);
      const notification = notifications.find((n) => n._id === notificationId);
      setNotifications((prev) => prev.filter((n) => n._id !== notificationId));
      if (!notification?.isRead) {
        setUnreadCount((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const handleNotificationClick = (notification) => {
    if (!notification.isRead) {
      handleMarkAsRead(notification._id);
    }
    if (notification.link) {
      router.push(notification.link);
    }
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date() - date) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  const getNotificationColor = (type, priority) => {
    if (priority === "urgent") return "#e44258";
    if (priority === "high") return "#fdab3d";

    const colors = {
      new_lead: "#00c875",
      lead_assigned: "#00c875",
      deal_won: "#00d647",
      deal_lost: "#e44258",
      task_due_soon: "#ff6900",
      task_overdue: "#e44258",
      mention: "#0086c0",
      comment: "#0086c0",
    };

    return colors[type] || "#676879";
  };

  return (
    <header className="navbar-header">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <Gem size={25} color="#00A0A0" />
          </div>
          <div className="logo-text">
            <span className="logo-bold">monday</span>
            <span className="logo-light">CRM</span>
          </div>
        </a>

        <div className="pricing-container">
          <button className="btn-see-plans">
            <Gem size={18} />
            See plans
          </button>
        </div>
      </div>

      <div className="navbar-spacer"></div>

      <nav className="navbar-nav">
        {/* Notifications */}
        <div className="nav-icon-wrapper">
          <div className="notification-bell-wrapper">
            <button
              onClick={() => {
                closeAllDropdowns("notification");
                setIsNotificationOpen(!isNotificationOpen);
              }}
              className={`nav-btn ${isNotificationOpen ? "active" : ""}`}
            >
              <Bell size={17} />
            </button>

            {unreadCount > 0 && (
              <span className="badge-unread">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </div>

          {isNotificationOpen && (
            <div className="notification-dropdown">
              <div className="dropdown-header">
                <div>
                  <h3 className="dropdown-title">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="unread-count">{unreadCount} unread</span>
                  )}
                </div>

                <div className="dropdown-actions">
                  <button
                    onClick={fetchNotifications}
                    disabled={loading}
                    title="Refresh"
                    className="action-btn"
                  >
                    <RefreshCw size={16} className={loading ? "spin" : ""} />
                  </button>

                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllAsRead}
                      title="Mark all as read"
                      className="action-btn mark-read-btn"
                    >
                      <Check size={14} />
                      Mark all read
                    </button>
                  )}

                  <button
                    onClick={() => setIsNotificationOpen(false)}
                    className="action-btn"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              <div className="notifications-list">
                {error && <div className="error-message">{error}</div>}

                {loading && notifications.length === 0 ? (
                  <div className="empty-state">Loading notifications...</div>
                ) : notifications.length === 0 ? (
                  <div className="empty-state">
                    <Bell size={48} className="empty-icon" />
                    <div className="empty-title">No notifications yet</div>
                    <div className="empty-subtitle">
                      We'll notify you when something new comes up
                    </div>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification._id}
                      className={`notification-item ${
                        !notification.isRead ? "unread" : ""
                      }`}
                    >
                      <div
                        className="notification-indicator"
                        style={{
                          backgroundColor: getNotificationColor(
                            notification.type,
                            notification.priority
                          ),
                        }}
                      />

                      <div
                        className="notification-content"
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div
                          className={`notification-title ${
                            !notification.isRead ? "bold" : ""
                          }`}
                        >
                          {notification.title}
                        </div>
                        <div className="notification-message">
                          {notification.message}
                        </div>
                        <div className="notification-time">
                          {timeAgo(notification.createdAt)}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(notification._id);
                        }}
                        title="Delete"
                        className="delete-btn"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Inbox */}
        <div className="nav-icon-wrapper">
          <button
            className="nav-btn"
            onClick={() => {
              closeAllDropdowns("inbox");
              setIsInboxOpen(!isInboxOpen);
            }}
          >
            <Inbox size={17} />
          </button>
          {inboxUnreadCount > 0 && (
            <span className="badge-static">{inboxUnreadCount}</span>
          )}

          {isInboxOpen && (
            <div className="notification-dropdown">
              <div className="dropdown-header">
                <h3 className="dropdown-title">Inbox</h3>
                <button
                  onClick={() => setIsInboxOpen(false)}
                  className="action-btn"
                >
                  <X size={17} />
                </button>
              </div>
              <div className="notifications-list">
                {inboxMessages.length === 0 ? (
                  <div className="empty-state">
                    <Mail size={48} className="empty-icon" />
                    <div className="empty-title">No messages</div>
                    <div className="empty-subtitle">Your inbox is empty</div>
                  </div>
                ) : (
                  inboxMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`notification-item ${
                        !msg.isRead ? "unread" : ""
                      }`}
                    >
                      <div
                        className="notification-indicator"
                        style={{ backgroundColor: "#0086c0" }}
                      />
                      <div className="notification-content">
                        <div className="notification-title">{msg.from}</div>
                        <div className="notification-message">
                          {msg.subject}
                        </div>
                        <div className="notification-time">
                          {timeAgo(msg.time)}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Invite Members */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("invite");
            setIsInviteOpen(!isInviteOpen);
          }}
        >
          <UserPlus size={17} />
        </button>
        {isInviteOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "400px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">Invite Team Members</h3>
              <button
                onClick={() => setIsInviteOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div style={{ padding: "17px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#323338",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@company.com"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #d0d4e4",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
              </div>
              <button
                onClick={handleInvite}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0073ea",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Send Invitation
              </button>
              <div
                style={{
                  marginTop: "15px",
                  fontSize: "12px",
                  color: "#676879",
                }}
              >
                <Users
                  size={16}
                  style={{ display: "inline", marginRight: "5px" }}
                />
                Invite your team to collaborate on monday.com
              </div>
            </div>
          </div>
        )}

        {/* Apps/Integrations */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("apps");
            setIsAppsOpen(!isAppsOpen);
          }}
        >
          <Puzzle size={17} />
        </button>
        {isAppsOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "350px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">Apps & Integrations</h3>
              <button
                onClick={() => setIsAppsOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div className="notifications-list">
              <div className="notification-item" style={{ cursor: "pointer" }}>
                <div className="notification-content">
                  <div className="notification-title">🔗 Slack</div>
                  <div className="notification-message">
                    Connect your Slack workspace
                  </div>
                </div>
              </div>
              <div className="notification-item" style={{ cursor: "pointer" }}>
                <div className="notification-content">
                  <div className="notification-title">📧 Gmail</div>
                  <div className="notification-message">Sync your emails</div>
                </div>
              </div>
              <div className="notification-item" style={{ cursor: "pointer" }}>
                <div className="notification-content">
                  <div className="notification-title">📊 Google Sheets</div>
                  <div className="notification-message">Import/Export data</div>
                </div>
              </div>
              <div className="notification-item" style={{ cursor: "pointer" }}>
                <div className="notification-content">
                  <div className="notification-title">💼 Zoom</div>
                  <div className="notification-message">Schedule meetings</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Assistant */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("ai");
            setIsAIOpen(!isAIOpen);
          }}
        >
          <Bot size={17} />
        </button>
        {isAIOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "400px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">🤖 AI Assistant</h3>
              <button onClick={() => setIsAIOpen(false)} className="action-btn">
                <X size={17} />
              </button>
            </div>
            <div style={{ padding: "17px" }}>
              <div
                style={{
                  marginBottom: "15px",
                  fontSize: "14px",
                  color: "#323338",
                }}
              >
                How can I help you today?
              </div>
              <textarea
                placeholder="Ask me anything about your work..."
                style={{
                  width: "100%",
                  minHeight: "100px",
                  padding: "10px",
                  border: "1px solid #d0d4e4",
                  borderRadius: "4px",
                  fontSize: "14px",
                  resize: "vertical",
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0073ea",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Ask AI
              </button>
            </div>
          </div>
        )}

        {/* Settings */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("settings");
            setIsSettingsOpen(!isSettingsOpen);
          }}
        >
          <Settings size={17} />
        </button>
        {isSettingsOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "300px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">Settings</h3>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div className="notifications-list">
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/settings/profile")}
              >
                <div className="notification-content">
                  <div className="notification-title">👤 Profile Settings</div>
                </div>
              </div>
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/settings/account")}
              >
                <div className="notification-content">
                  <div className="notification-title">
                    🔐 Account & Security
                  </div>
                </div>
              </div>
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/settings/notifications")}
              >
                <div className="notification-content">
                  <div className="notification-title">
                    🔔 Notification Preferences
                  </div>
                </div>
              </div>
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/settings/billing")}
              >
                <div className="notification-content">
                  <div className="notification-title">💳 Billing & Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("search");
            setIsSearchOpen(!isSearchOpen);
            if (!isSearchOpen) {
              setTimeout(() => searchInputRef.current?.focus(), 100);
            }
          }}
        >
          <Search size={17} />
        </button>
        {isSearchOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "500px" }}
          >
            <div className="dropdown-header">
              <div style={{ flex: 1 }}>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search boards, tasks, people..."
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #d0d4e4",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div className="notifications-list">
              {searchResults.length === 0 ? (
                <div className="empty-state">
                  <Search size={48} className="empty-icon" />
                  <div className="empty-subtitle">
                    {searchQuery
                      ? "No results found"
                      : "Start typing to search"}
                  </div>
                </div>
              ) : (
                searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="notification-item"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="notification-content">
                      <div className="notification-title">{result.title}</div>
                      <div className="notification-message">
                        {result.subtitle}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Help */}
        <div className="nav-icon-wrapper">
          <button
            className="nav-btn"
            onClick={() => {
              closeAllDropdowns("help");
              setIsHelpOpen(!isHelpOpen);
            }}
          >
            <HelpCircle size={17} />
          </button>
          <div className="badge-orange"></div>

          {isHelpOpen && (
            <div
              className="notification-dropdown"
              style={{ right: "0", width: "317px" }}
            >
              <div className="dropdown-header">
                <h3 className="dropdown-title">Help & Support</h3>
                <button
                  onClick={() => setIsHelpOpen(false)}
                  className="action-btn"
                >
                  <X size={17} />
                </button>
              </div>
              <div className="notifications-list">
                <div
                  className="notification-item"
                  style={{ cursor: "pointer" }}
                >
                  <div className="notification-content">
                    <div className="notification-title">📚 Help Center</div>
                    <div className="notification-message">
                      Browse articles and tutorials
                    </div>
                  </div>
                </div>
                <div
                  className="notification-item"
                  style={{ cursor: "pointer" }}
                >
                  <div className="notification-content">
                    <div className="notification-title">🎥 Video Tutorials</div>
                    <div className="notification-message">
                      Watch how-to videos
                    </div>
                  </div>
                </div>
                <div
                  className="notification-item"
                  style={{ cursor: "pointer" }}
                >
                  <div className="notification-content">
                    <div className="notification-title">💬 Contact Support</div>
                    <div className="notification-message">
                      Get help from our team
                    </div>
                  </div>
                </div>
                <div
                  className="notification-item"
                  style={{ cursor: "pointer" }}
                >
                  <div className="notification-content">
                    <div className="notification-title">🆕 What's New</div>
                    <div className="notification-message">
                      Latest features and updates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-divider"></div>

        {/* Favorites */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("favorites");
            setIsFavoritesOpen(!isFavoritesOpen);
          }}
        >
          <Heart size={17} />
        </button>
        {isFavoritesOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "300px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">Favorites</h3>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div className="notifications-list">
              {favorites.length === 0 ? (
                <div className="empty-state">
                  <Heart size={48} className="empty-icon" />
                  <div className="empty-subtitle">No favorites yet</div>
                </div>
              ) : (
                favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="notification-item"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="notification-content">
                      <div className="notification-title">
                        {fav.icon} {fav.name}
                      </div>
                      <div className="notification-message">{fav.type}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Apps Launcher */}
        <button
          className="nav-btn"
          onClick={() => {
            closeAllDropdowns("appsLauncher");
            setIsAppsLauncherOpen(!isAppsLauncherOpen);
          }}
        >
          <Grid size={17} />
        </button>
        {isAppsLauncherOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "300px" }}
          >
            <div className="dropdown-header">
              <h3 className="dropdown-title">Apps</h3>
              <button
                onClick={() => setIsAppsLauncherOpen(false)}
                className="action-btn"
              >
                <X size={17} />
              </button>
            </div>
            <div
              style={{
                padding: "15px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
              }}
            >
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("/work-management")}
              >
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>📊</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>
                  Work Management
                </div>
              </div>
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("/crm")}
              >
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>👥</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>CRM</div>
              </div>
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("/projects")}
              >
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>🎯</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>
                  Projects
                </div>
              </div>
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("/marketing")}
              >
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>📢</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>
                  Marketing
                </div>
              </div>
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("/dev")}
              >
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>💻</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>Dev</div>
              </div>
              <div style={{ textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>➕</div>
                <div style={{ fontSize: "12px", color: "#323338" }}>More</div>
              </div>
            </div>
          </div>
        )}

        {/* User Profile */}
        <button
          className="nav-btn avatar-btn"
          onClick={() => {
            closeAllDropdowns("profile");
            setIsProfileOpen(!isProfileOpen);
          }}
        >
          <div className="avatar-container">
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#007F9B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {userInfo.initials || "U"}
            </div>
            <div className="avatar-badge">
              <img
                src="https://cdn.monday.com/images/logos/monday_logo_icon.png"
                alt="Company"
                className="avatar-badge-img"
              />
            </div>
          </div>
        </button>
        {isProfileOpen && (
          <div
            className="notification-dropdown"
            style={{ right: "0", width: "280px" }}
          >
            <div style={{ padding: "15px", borderBottom: "1px solid #e6e9ef" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#0073ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {userInfo.initials || "U"}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#323338",
                    }}
                  >
                    {userInfo.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#676879" }}>
                    {userInfo.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="notifications-list">
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/profile")}
              >
                <User size={16} style={{ marginRight: "10px" }} />
                <div className="notification-content">
                  <div className="notification-title">My Profile</div>
                </div>
              </div>
              <div
                className="notification-item"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/settings")}
              >
                <Settings size={16} style={{ marginRight: "10px" }} />
                <div className="notification-content">
                  <div className="notification-title">Settings</div>
                </div>
              </div>
              <div
                className="notification-item"
                style={{ cursor: "pointer", color: "#e44258" }}
                onClick={handleLogout}
              >
                <LogOut size={16} style={{ marginRight: "10px" }} />
                <div className="notification-content">
                  <div
                    className="notification-title"
                    style={{ color: "#e44258" }}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MondayCRMNavbar;
