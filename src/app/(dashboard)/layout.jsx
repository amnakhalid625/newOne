"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MondayCRMNavbar from "@/src/components/mondayCRM-navbar/MondayCRMNavbar";
import Sidebar from "@/src/components/sidebar/Sidebar";
import MondayHeader from "@/src/components/mondayCRM-navbar/MondayHeader";
import DashboardContext from "@/src/context/DashboardContext";
import "@/src/styles/DashboardLayout.css";

import GlobalLoader from "@/src/components/common/GlobalLoader";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🆕 CHECK IF CURRENT ROUTE IS A WORKSPACE PAGE
  const isWorkspacePage = pathname?.startsWith("/workspaces/");
  const isDashboardHome = pathname === "/dashboard";

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      // Check if running in browser
      if (typeof window === "undefined") return;

      // Artificial delay to show loader (optional, but good for testing)
      // await new Promise(resolve => setTimeout(resolve, 500));

      const storedUser = sessionStorage.getItem("mondayUser");
      // Assuming localStorage is also available, or prefer sessionStorage for consistency with legacy
      const storedEmail =
        sessionStorage.getItem("mondaySignupEmail") ||
        localStorage.getItem("userEmail");

      let userId = null;

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          userId = parsedUser.uid;
        } catch (e) {
          console.error("Error parsing user:", e);
        }
      }

      if (!userId && storedEmail) {
        userId = storedEmail;
      }

      if (!userId) {
        console.warn("No user ID found");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://monday-backend-one.vercel.app/api/boards/user/${encodeURIComponent(
          userId
        )}`
      );
      const data = await response.json();

      if (data.success) {
        setBoards(data.boards);
      }
    } catch (error) {
      console.error("❌ Error fetching boards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBoardClick = (boardId) => {
    router.push(`/boards/${boardId}`);
  };

  return (
    <DashboardContext.Provider
      value={{ boards, loading, onBoardClick: handleBoardClick }}
    >
      {loading && <GlobalLoader />}
      <div className="dashboard-layout-wrapper">
        <div className="dashboard-layout">
          {/* ✅ Top Navbar - Always Visible */}
          <MondayCRMNavbar />

          {/* ✅ Main Container: Sidebar + Content */}
          <div className="dashboard-container">
            {/* ✅ Left Sidebar - Always Visible */}
            <div className="dashboard-sidebar-wrapper">
              <Sidebar boards={boards} onBoardClick={handleBoardClick} />
            </div>

            {/* ✅ Right Content Area */}
            <div className="dashboard-content-wrapper">
              {/* 🆕 CONDITIONAL: Show MondayHeader only on Dashboard Home */}
              {isDashboardHome && <MondayHeader />}

              {/* Main Content */}
              <div className="dashboard-main-content">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
