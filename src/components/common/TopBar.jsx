 
import { FaBell, FaQuestionCircle, FaSearch, FaBars } from 'react-icons/fa';
import React from 'react';

const COLORS = {
  text: '#555555',
  logoText: '#334D6E',
  border: '#E0E0E0',
  userAvatarBg: '#334D6E',
};

// Define constants for sidebar widths (matching the Sidebar component)
const COLLAPSED_WIDTH = '75px';
const EXPANDED_WIDTH = '100px';

// 🌟 KEY CHANGE: Set the offset padding to zero to start the content immediately after the sidebar.
const LEFT_OFFSET_PADDING = '-200px'; 
const RIGHT_PADDING = '24px';

// Receive isCollapsed prop
export default function TopBar({ toggleSidebar, isCollapsed }) {
  
  const currentSidebarWidth = isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  // Calculate the total required left padding (Sidebar Width + zero offset)
  const totalLeftPadding = `calc(${currentSidebarWidth} + ${LEFT_OFFSET_PADDING})`;
  
  const topBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    // Applying the dynamic padding here
    padding: `0 ${RIGHT_PADDING} 0 ${totalLeftPadding}`,
    
    backgroundColor: '#FFFFFF',
    borderBottom: `1px solid ${COLORS.border}`,
    height: '64px',
    boxSizing: 'border-box',
    
    position: 'fixed',
    top: 0,
    left: 0, // TopBar background spans full width
    width: '100%',
    transition: 'padding-left 0.3s', 
    zIndex: 101, 
  };

  const searchContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    maxWidth: '500px',
    margin: '0 40px',
  };

  const searchInputStyle = {
    padding: '8px 12px',
    width: '100%',
    borderRadius: '6px',
    border: `1px solid ${COLORS.border}`,
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#F7F7F7',
  };

  return (
    <div style={topBarStyle}>
      {/* Left Section: Hamburger + Logo */}
      <div 
        style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            flexShrink: 0 
            // The padding/margin is handled by the parent topBarStyle's padding-left.
        }}
      >
        {/* Hamburger icon beside logo */}
        <FaBars
          style={{ fontSize: '20px', cursor: 'pointer', color: COLORS.logoText }}
          onClick={toggleSidebar}
        />
        <span style={{ fontWeight: 700, fontSize: '24px', color: COLORS.logoText }}>Logo</span>
      </div>

      {/* Center Section: Search Bar */}
      <div style={searchContainerStyle}>
        <FaSearch
          style={{
            position: 'absolute',
            right: '12px',
            fontSize: '14px',
            color: COLORS.text,
          }}
        />
        <input type="text" placeholder="Search" style={searchInputStyle} />
      </div>

      {/* Right Section: Icons & Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
        <FaBell style={{ fontSize: '18px', cursor: 'pointer', color: COLORS.text }} />
        <FaQuestionCircle style={{ fontSize: '18px', cursor: 'pointer', color: COLORS.text }} />
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: COLORS.userAvatarBg,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          JA
        </div>
      </div>
    </div>
  );
}
 