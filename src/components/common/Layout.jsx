// // src/components/common/Layout.jsx

// import React from 'react';
// import TopBar from './TopBar'; // Assuming you have this
// import Sidebar from './Sidebar';

// export default function Layout({ children }) {
//     return (
//         <div style={{ display: 'flex', minHeight: '100vh', background: '#F8F9FA' }}>
//             <Sidebar />
            
//             {/* Main content area shifted by the width of the sidebar (80px) */}
//             <div style={{ flexGrow: 1, marginLeft: '80px' }}>
//                 {/* <TopBar /> // You might embed TopBar inside the content area if it's not fixed */}
                
//                 {/* Content */}
//                 <div style={{ padding: '20px' }}>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }
// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import necessary components
import Sidebar from "./components/common/Sidebar";
import TopBar from "./components/common/TopBar"; 
import DashboardPage from './components/dashboard/DashboardPage';
import InvoiceTable from './components/invoices/InvoiceTable';


// ⭐️ 1. Define the component that wraps the content, sidebar, and top bar ⭐️
// This replaces your attempt to handle the layout directly in App.jsx's return block.
function MainLayout({ children, isSidebarCollapsed, toggleSidebar }) {
    
    // Widths based on your previous discussions (75px collapsed, 220px expanded)
    const sidebarWidth = isSidebarCollapsed ? '80px' : '220px'; 
    
    // Style for the main content wrapper (TopBar + Page Content)
    const contentWrapperStyle = {
        marginLeft: sidebarWidth, // Push the content over by the width of the sidebar
        flexGrow: 1, 
        display: "flex", 
        flexDirection: "column",
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease-in-out',
        backgroundColor: "#F9FAFB", // Background color for the page body
    };

    return (
        <div style={{ display: "flex" }}>
            
            {/* ⭐️ Sidebar Component: Renders once and sits fixed on the left ⭐️ */}
            <Sidebar isCollapsed={isSidebarCollapsed} />
            
            {/* Main Content Area (TopBar + Page View) */}
            <div style={contentWrapperStyle}>
                
                {/* TopBar receives the toggle function */}
                <TopBar toggleSidebar={toggleSidebar} />
                
                {/* Page Content View */}
                <div style={{ padding: "24px", flex: 1 }}>
                    {children} 
                </div>
            </div>
        </div>
    );
}

// ⭐️ 2. Main App Component handles routing and global state ⭐️
export default function App() {
    // State for sidebar collapse/expand
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Default to expanded for clarity

    const toggleSidebar = () => {
        setIsSidebarCollapsed(prev => !prev);
    };

    return (
        <Router>
            <Routes>
                {/* Route for Page 1: Dashboard */}
                <Route path="/" element={
                    <MainLayout 
                        isSidebarCollapsed={isSidebarCollapsed} 
                        toggleSidebar={toggleSidebar}
                    >
                        <DashboardPage />
                    </MainLayout>
                } />

                {/* Route for Page 2: Invoice Table */}
                <Route path="/invoices" element={
                    <MainLayout 
                        isSidebarCollapsed={isSidebarCollapsed} 
                        toggleSidebar={toggleSidebar}
                    >
                        <InvoiceTable />
                    </MainLayout>
                } />

                {/* Add other pages here (e.g., path="/report") */}
            </Routes>
        </Router>
    );
}