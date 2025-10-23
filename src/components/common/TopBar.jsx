 

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

// 🌟 NOTE: Adjusted LEFT_OFFSET_PADDING to 0px for calculation clarity, 
// since the padding is typically handled outside the TopBar.
const LEFT_OFFSET_PADDING = '0px'; 
const RIGHT_PADDING = '24px';

// Receive isCollapsed AND onSearchChange prop
export default function TopBar({ toggleSidebar, isCollapsed, onSearchChange }) { 
    
    // Using a more standard approach for left padding calculation
    const sidebarActualWidth = isCollapsed ? 75 : 220; // Assuming actual widths in pixels
    const totalLeftPadding = `${sidebarActualWidth + 24}px`; // Example offset/padding

    const topBarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        // This dynamic padding adjustment needs to be fixed for your layout:
        // Let's rely on the sidebar's push for now and just set a standard padding.
        // For a fixed TopBar, the content usually starts after the sidebar.
        padding: `0 ${RIGHT_PADDING} 0 24px`, // Fixed padding, ignoring old complex calc
        
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${COLORS.border}`,
        height: '64px',
        boxSizing: 'border-box',
        
        position: 'fixed',
        top: 0,
        left: 0, 
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
        paddingRight: '35px', // Make space for the icon
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
                }}
            >
                <FaBars
                    style={{ fontSize: '20px', cursor: 'pointer', color: COLORS.logoText }}
                    onClick={toggleSidebar}
                />
                <span style={{ fontWeight: 700, fontSize: '24px', color: COLORS.logoText }}>Logo</span>
            </div>

            {/* Center Section: Search Bar - Hooked up to onSearchChange */}
            <div style={searchContainerStyle}>
                {/* 🌟 KEY CHANGE: Link onChange to the prop handler */}
                <input 
                    type="text" 
                    placeholder="Search" 
                    style={searchInputStyle} 
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <FaSearch
                    style={{
                        position: 'absolute',
                        right: '12px',
                        fontSize: '14px',
                        color: COLORS.text,
                    }}
                />
            </div>

            {/* Right Section: Icons & Avatar (Unchanged) */}
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