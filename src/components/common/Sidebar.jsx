
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaFileAlt, FaPlus, FaUserPlus } from 'react-icons/fa';
import { HiOutlineDocumentMinus } from 'react-icons/hi2';
import { CgComponents } from 'react-icons/cg';

// Navigation options
const options = [
  { label: "Dashboard", icon: <FaTachometerAlt />, key: 'dashboard', path: '/', navigates: true },
  { label: "Report", icon: <FaFileAlt />, key: 'report', path: '/invoices', navigates: true },
  { label: "Add Invoice", icon: <FaPlus />, key: 'add-invoice', path: '#', navigates: false },
  { label: "Without PO", icon: <HiOutlineDocumentMinus />, key: 'without-po',  navigates: true },
  { label: "Add User", icon: <FaUserPlus />, key: 'add-user',  navigates: true },
  { label: "Company", icon: <CgComponents />, key: 'company',   navigates: true }
];

// Colors
const COLORS = {
  text: '#555555',
  activeText: '#FFFFFF',
  activeBg: '#334D6E',
  logoText: '#141414',
};

export default function Sidebar({ isCollapsed }) {
  const location = useLocation();
  const sidebarWidth = isCollapsed ? '60px' : '220px';
  // Removed explicit height calculation

  const sidebarStyle = {
    width: sidebarWidth,
    backgroundColor: isCollapsed ? '#FFFFFF' : '#EDF0F4',
    // Ensures the container shrinks to content height when collapsed
    minHeight: isCollapsed ? 'auto' : '100vh', 
    height: isCollapsed ? 'auto' : '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '0',
    zIndex: 100,
    boxShadow: isCollapsed ? 'none' : '2px 0 5px rgba(0,0,0,0.05)',
    transition: 'all 0.3s',
    top: isCollapsed ? '200px' : '0',
    borderRadius: isCollapsed ? '0px 8px 8px 0px' : '0',
    padding: isCollapsed ? '7px 0' : '0',
     
  };

  const topHeaderStyle = {
    display: isCollapsed ? 'none' : 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    height: '64px',
    borderBottom: '1px solid #eee',
    flexShrink: 0,
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 700,
    color: COLORS.logoText,
  };

  const navContainerStyle = {
    // FIX APPLIED HERE: Only allow flexGrow when the sidebar is NOT collapsed.
    // Setting flexGrow to 0 prevents it from taking up any extra vertical space.
    flexGrow: isCollapsed ? 0 : 1, 
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: isCollapsed ? '0' : '8px',
    justifyContent: 'flex-start',
    marginTop: isCollapsed ? '0' : '64px',
  };

  return (
    <div style={sidebarStyle}>
      <div style={topHeaderStyle}>
        <h3 style={logoStyle}>Logo</h3>
      </div>

      <div style={navContainerStyle}>
        {options.map(opt => {
          const isActive = location.pathname === opt.path;

          const itemStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 0',
            borderRadius: '8px',
            cursor: opt.navigates ? 'pointer' : 'default',

            backgroundColor: isActive ? COLORS.activeBg : 'transparent',
            color: isActive
              ? COLORS.activeText
              : COLORS.text,
            transition: 'all 0.2s',
            width: '100%',
          };

          const iconStyle = {
            fontSize: '20px',
            color: isActive ? COLORS.activeText : COLORS.text,
          };

          const labelStyle = {
            fontSize: isCollapsed ? '10px' : '14px',
            fontWeight: 500,
            marginTop: '4px',
            textAlign: 'center',
            color: isActive ? COLORS.activeText : COLORS.text,
            display: 'block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          };

          const content = (
            <div style={itemStyle}>
              <span style={iconStyle}>{opt.icon}</span>
              <span style={labelStyle}>{opt.label}</span>
            </div>
          );

          if (opt.navigates) {
            return (
              <Link key={opt.key} to={opt.path} style={{ textDecoration: 'none' }}>
                {content}
              </Link>
            );
          }
          return <div key={opt.key}>{content}</div>;
        })}
      </div>
    </div>
  );
}