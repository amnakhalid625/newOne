"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

const CreateAccountThirteen = () => {
  const router = useRouter();
  const { user } = useAuth();

  // State management adapted from MERN to Next.js (using sessionStorage fallback)
  const [boardName, setBoardName] = useState("My first project");
  const [taskNames, setTaskNames] = useState(["", "", ""]);
  const [isCreating, setIsCreating] = useState(false);
  const [boardData, setBoardData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = sessionStorage.getItem("boardName");
      if (storedName) {
        setBoardName(storedName);
      }

      // Load other data for payload construction
      const storedColumns = sessionStorage.getItem("selectedColumns");
      setBoardData({
        boardName: storedName || "My first project",
        selectedColumns: storedColumns ? JSON.parse(storedColumns) : null,
      });
    }
  }, []);

  const handleTaskChange = (index, value) => {
    const newTasks = [...taskNames];
    newTasks[index] = value;
    setTaskNames(newTasks);
    // In MERN this updated context, here we just keep local state
    // as this is the final step before submission
  };

  // ✅ MAIN FUNCTION: Create Board in Database
  const handleGetStarted = async () => {
    setIsCreating(true);

    try {
      // Get user from sessionStorage OR context
      let userId = null;
      let userEmail = null;

      if (typeof window !== "undefined") {
        const storedUser = sessionStorage.getItem("mondayUser");
        const storedEmail =
          sessionStorage.getItem("mondaySignupEmail") ||
          localStorage.getItem("userEmail");

        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            userId = parsedUser.uid;
            userEmail = parsedUser.email;
          } catch (e) {
            console.error("Error parsing user:", e);
          }
        }

        // If no user in session, use email as fallback userId
        if (!userId && storedEmail) {
          userId = storedEmail; // Use email as temporary user ID
          userEmail = storedEmail;
        }
      }

      // If still no user, use context
      if (!userId && user) {
        userId = user.uid;
        userEmail = user.email;
      }

      const boardPayload = {
        boardName: boardName,
        selectedColumns: boardData.selectedColumns || {
          owner: true,
          status: true,
          dueDate: true,
          priority: false,
          lastUpdated: false,
          timeline: false,
          notes: false,
          budget: false,
          files: false,
        },
        tasks: taskNames.filter((task) => task.trim() !== ""),
        userId: userId || "anonymous-user",
        userEmail: userEmail || "no-email",
      };

      console.log("Creating board with data:", boardPayload);

      const response = await fetch(
        "https://monday-backend-one.vercel.app/api/boards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(boardPayload),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("✅ Board created successfully:", data.board);

        if (typeof window !== "undefined") {
          sessionStorage.setItem("createdBoardId", data.board._id);
        }

        // Redirect to dashboard page to see all boards
        router.push("/dashboard");
      } else {
        console.error("❌ Failed to create board:", data.message);
        alert("Failed to create board: " + data.message);
      }
    } catch (error) {
      console.error("❌ Error creating board:", error);
      alert("Network error. Please check if backend is running.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(41,47,76,0.7)] flex items-center justify-center"
      style={{ fontFamily: "Figtree, Roboto, sans-serif" }}
    >
      <div className="bg-white w-full h-full overflow-hidden shadow-2xl flex relative">
        <button
          className="fixed top-2.5 right-2.5 z-10 w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-[#323338]" />
        </button>

        {/* LEFT PANEL */}
        <div className="w-1/2 flex flex-col justify-between bg-white">
          <div className="flex-1 overflow-y-auto px-20 pt-20 pb-12">
            <div className="flex justify-between items-center mb-11">
              <div className="h-[25px]">
                <img
                  className="h-full"
                  src="https://dapulse-res.cloudinary.com/image/upload/assets/work-management.png"
                  alt="monday work management"
                />
              </div>
            </div>

            <div className="max-w-[600px] min-w-[375px]">
              <div className="mb-6">
                <h2
                  className="text-[24px] font-medium text-[#323338] leading-[30px] tracking-[-0.1px] mb-2"
                  style={{ fontFamily: "Poppins, Roboto, sans-serif" }}
                >
                  List your projects
                </h2>
              </div>

              <div className="space-y-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="relative">
                    <input
                      type="text"
                      value={taskNames[index]}
                      onChange={(e) => handleTaskChange(index, e.target.value)}
                      placeholder={`Task ${index + 1}`}
                      maxLength={40}
                      className="w-full h-[40px] px-3 border border-[#c3c6d4] rounded text-[15px] text-[#323338] focus:outline-none focus:border-[#0073ea] focus:ring-1 focus:ring-[#0073ea]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 px-20 py-6 flex justify-between items-center bg-white">
            <Link href="/auth/setup/view-layout">
              <button className="px-4 py-2 border border-[#c3c6d4] rounded text-[#323338] hover:bg-[#e6e9ef] transition-colors flex items-center gap-1">
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            </Link>

            <button
              onClick={handleGetStarted}
              disabled={isCreating}
              className={`px-4 py-2 rounded text-white transition-colors flex items-center gap-1 ${
                isCreating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0073ea] hover:bg-[#0060b9]"
              }`}
            >
              {isCreating ? "Creating..." : "Get started"}
              {!isCreating && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* RIGHT PANEL - TABLE VIEW */}
        <div className="w-1/2 bg-[#eceff8] flex items-center justify-center overflow-hidden">
          <div
            className="bg-white w-full h-[650px] relative ml-16 rounded-tl-2xl rounded-bl-2xl overflow-hidden"
            style={{
              filter: "drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.2))",
              paddingTop: "30px",
              paddingLeft: "30px",
            }}
          >
            <div className="mb-6">
              <h1
                className="text-[32px] font-medium text-[#323338] leading-[40px] tracking-[-0.5px] mb-4"
                style={{ fontFamily: "Poppins, Roboto, sans-serif" }}
              >
                {boardName}
              </h1>

              <div className="flex gap-4 border-b border-[#d0d4e4]">
                <button className="pb-2 px-1 text-[15px] font-medium text-[#323338] border-b-2 border-[#0073ea]">
                  Table
                </button>
                <button className="pb-2 px-1 text-[24px] text-[#676879] leading-none">
                  +
                </button>
              </div>
            </div>

            <div className="h-[456px] overflow-hidden">
              <div className="flex gap-0">
                <div style={{ width: "240px", flexShrink: 0 }}>
                  <div className="mb-0">
                    <div
                      className="flex items-center mb-3"
                      style={{ height: "24px" }}
                    >
                      <div className="h-1.5 w-[120px] bg-[#579bfc] rounded"></div>
                    </div>

                    <div
                      className="flex items-center bg-white"
                      style={{
                        borderLeft: "4px solid #579bfc",
                        borderTop: "0.8px solid #d0d4e4",
                        borderBottom: "0.8px solid #d0d4e4",
                        borderRight: "0.8px solid #d0d4e4",
                        borderTopLeftRadius: "4px",
                        height: "40px",
                        paddingLeft: "12px",
                      }}
                    >
                      <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                    </div>

                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center bg-white"
                        style={{
                          borderLeft: "4px solid #579bfc",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          height: "40px",
                          paddingLeft: "12px",
                        }}
                      >
                        {taskNames[i] ? (
                          <span className="text-[15px] text-[#323338] truncate">
                            {taskNames[i]}
                          </span>
                        ) : (
                          <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                        )}
                      </div>
                    ))}

                    <div
                      className="flex items-center bg-white"
                      style={{
                        borderLeft: "4px solid rgba(87, 155, 252, 0.5)",
                        borderBottom: "0.8px solid #d0d4e4",
                        borderRight: "0.8px solid #d0d4e4",
                        borderBottomLeftRadius: "4px",
                        height: "40px",
                        paddingLeft: "12px",
                      }}
                    >
                      <div className="h-1 w-20 bg-[rgba(103,104,121,0.1)] rounded"></div>
                    </div>

                    <div
                      style={{
                        height: "40px",
                        borderRight: "0.8px solid #d0d4e4",
                      }}
                    ></div>
                  </div>

                  <div>
                    <div
                      className="flex items-center mb-3"
                      style={{ height: "24px" }}
                    >
                      <div className="h-1.5 w-[120px] bg-[#00c875] rounded"></div>
                    </div>

                    <div
                      className="flex items-center bg-white"
                      style={{
                        borderLeft: "4px solid #00c875",
                        borderTop: "0.8px solid #d0d4e4",
                        borderBottom: "0.8px solid #d0d4e4",
                        borderRight: "0.8px solid #d0d4e4",
                        borderTopLeftRadius: "4px",
                        height: "40px",
                        paddingLeft: "12px",
                      }}
                    >
                      <div className="h-1 w-20 bg-[#c3c6d4] rounded"></div>
                    </div>

                    <div
                      className="flex items-center bg-white"
                      style={{
                        borderLeft: "4px solid rgba(0, 200, 117, 0.5)",
                        borderBottom: "0.8px solid #d0d4e4",
                        borderRight: "0.8px solid #d0d4e4",
                        borderBottomLeftRadius: "4px",
                        height: "40px",
                        paddingLeft: "12px",
                      }}
                    >
                      <div className="h-1 w-20 bg-[rgba(103,104,121,0.1)] rounded"></div>
                    </div>

                    <div
                      style={{
                        height: "40px",
                        borderRight: "0.8px solid #d0d4e4",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-0">
                    <div style={{ height: "24px", marginBottom: "12px" }}></div>

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Owner
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Status
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Due date
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          width: "48px",
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      >
                        <span className="text-[#676879] text-lg font-light">
                          +
                        </span>
                      </div>
                    </div>

                    {[0, 1, 2].map((rowIdx) => (
                      <div
                        key={rowIdx}
                        className="flex"
                        style={{ height: "40px" }}
                      >
                        <div
                          className="flex items-center justify-center bg-white"
                          style={{
                            borderBottom: "0.8px solid #d0d4e4",
                            borderRight: "0.8px solid #d0d4e4",
                            width: "136px",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src="https://cdn1.monday.com/dapulse_default_photo.png"
                            alt="owner"
                            className="w-[24px] h-[24px] rounded-full"
                          />
                        </div>
                        <div
                          className="flex items-center justify-center"
                          style={{
                            borderBottom: "0.8px solid #d0d4e4",
                            borderRight: "0.8px solid #d0d4e4",
                            width: "136px",
                            flexShrink: 0,
                            backgroundColor:
                              rowIdx === 0
                                ? "#fdab3d"
                                : rowIdx === 1
                                ? "#00c875"
                                : "#df2f4a",
                          }}
                        >
                          <span className="text-[15px] text-white leading-[40px]">
                            {rowIdx === 0
                              ? "Working on it"
                              : rowIdx === 1
                              ? "Done"
                              : "Stuck"}
                          </span>
                        </div>
                        <div
                          className="flex items-center justify-center bg-white gap-1"
                          style={{
                            borderBottom: "0.8px solid #d0d4e4",
                            borderRight: "0.8px solid #d0d4e4",
                            width: "136px",
                            flexShrink: 0,
                          }}
                        >
                          {rowIdx === 0 && (
                            <>
                              <span className="text-red-500 text-sm">⚠</span>
                              <span className="text-[15px] text-[#323338]">
                                Dec 7
                              </span>
                            </>
                          )}
                          {rowIdx === 1 && (
                            <>
                              <span className="text-green-500 text-sm">✓</span>
                              <span className="text-[15px] text-[#323338]">
                                Dec 8
                              </span>
                            </>
                          )}
                          {rowIdx === 2 && (
                            <>
                              <span className="text-gray-500 text-sm">◐</span>
                              <span className="text-[15px] text-[#323338]">
                                Dec 9
                              </span>
                            </>
                          )}
                        </div>
                        <div
                          className="bg-white"
                          style={{
                            width: "48px",
                            borderBottom: "0.8px solid #d0d4e4",
                          }}
                        ></div>
                      </div>
                    ))}

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          width: "48px",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      ></div>
                    </div>

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          width: "48px",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div style={{ height: "24px", marginBottom: "12px" }}></div>

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Owner
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Status
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      >
                        <span className="text-[15px] text-[#323338]">
                          Due date
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{
                          width: "48px",
                          borderTop: "0.8px solid #d0d4e4",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      >
                        <span className="text-[#676879] text-lg font-light">
                          +
                        </span>
                      </div>
                    </div>

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          width: "48px",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      ></div>
                    </div>

                    <div className="flex" style={{ height: "40px" }}>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          borderBottom: "0.8px solid #d0d4e4",
                          borderRight: "0.8px solid #d0d4e4",
                          width: "136px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <div
                        className="bg-white"
                        style={{
                          width: "48px",
                          borderBottom: "0.8px solid #d0d4e4",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountThirteen;
