import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../animation/Winter Train.json';
import { LuMessageCircleHeart } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";



export default function MondayHeader() {
  const [userName, setUserName] = useState('Staff');
  const [greeting, setGreeting] = useState('Good evening');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('mondaySignupEmail') || localStorage.getItem('userEmail');
    let storedName = sessionStorage.getItem('userName') || localStorage.getItem('userName');

    if (storedName && storedName.startsWith('{')) {
      try {
        const nameObj = JSON.parse(storedName);
        storedName = nameObj.fullName || nameObj.firstName || nameObj.lastName || null;
      } catch (e) {
        console.error('Error parsing userName:', e);
      }
    }

    const name = storedName || storedEmail?.split('@')[0] || 'Staff';
    setUserName(name);

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <div className="header-wrapper">
      <div className="header-main">
        {/* Left side - Text Container */}
        <div className="header-left">
          <div className="header-greeting">
            {greeting}, {userName}!
          </div>

          <div className="header-subtext">
            Quickly access your recent boards, Inbox and workspaces
          </div>
        </div>

        {/* Center - Lottie Animation Container */}
        <div className="header-center">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="header-lottie"
            style={{
              width: '140%',
              height: '100%'
            }}
          />
        </div>

        {/* Right side - Buttons Container */}
        <div className="header-right">
          <div className="header-buttons">
            <div className="header-feedback">
              <span className="feedback-icon"
                style={{
                  display: 'block',
                  height: '22.5px',
                  width: '15px',
                  marginRight: '8px',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '22.5px',
                  color: 'rgb(50, 51, 56)',
                  cursor: 'pointer',
                  padding: '0',
                  boxSizing: 'border-box'
                }}
              >
                <LuMessageCircleHeart size={20} />
              </span>
              <span className="feedback-text">Give feedback</span>
            </div>

            <button type="submit" className="header-search-btn">
              <i
                style={{
                  display: 'block',
                  width: '11.6875px',
                  marginRight: '5px',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: 'rgb(255, 255, 255)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                <AiOutlineThunderbolt size={20} />
              </i>
              Quick Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}