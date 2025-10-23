 

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from "./components/common/Sidebar"; 
import TopBar from "./components/common/TopBar"; 
import InvoiceTable from './components/invoices/InvoiceTable';
import DashboardPage from './components/dashboard/DashboardPage';

const TOPBAR_HEIGHT = '64px'; 

// MainLayout now accepts search-related props
function MainLayout({ children, isSidebarCollapsed, toggleSidebar, sidebarWidth, onSearchChange, searchTerm }) {
    const contentWrapperStyle = {
        marginLeft: sidebarWidth,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease-in-out',
        backgroundColor: "#EDF0F4",
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            {/* 🌟 PASS THE SEARCH HANDLER TO THE TopBar */}
            <TopBar 
                toggleSidebar={toggleSidebar} 
                isCollapsed={isSidebarCollapsed} 
                onSearchChange={onSearchChange} // <-- PASSES HANDLER
            />

            <div style={contentWrapperStyle}>
                <div style={{ 
                    padding: `32px`, 
                    paddingTop: `calc(32px + ${TOPBAR_HEIGHT})`,
                    flex: 1
                }}>
                    {/* 🌟 Clone children and PASS THE SEARCH TERM down to them */}
                    {React.Children.map(children, child => 
                        React.cloneElement(child, { searchTerm }) // <-- PASSES SEARCH TERM
                    )}
                </div>
            </div>
        </div>
    );
}

export default function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); 
    // 🌟 GLOBAL SEARCH STATE
    const [globalSearchTerm, setGlobalSearchTerm] = useState(''); 

    const toggleSidebar = () => {
        setIsSidebarCollapsed(prev => !prev);
    };

    // 🌟 HANDLER FUNCTION
    const handleSearchChange = (term) => {
        setGlobalSearchTerm(term);
    };

    const sidebarWidth = isSidebarCollapsed ? '75px' : '220px';

    return (
        <Router> 
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <MainLayout 
                            isSidebarCollapsed={isSidebarCollapsed} 
                            toggleSidebar={toggleSidebar}
                            sidebarWidth={sidebarWidth}
                            onSearchChange={handleSearchChange}
                            searchTerm={globalSearchTerm}
                        >
                            <DashboardPage />
                        </MainLayout>
                    } 
                />
                
                <Route 
                    path="/invoices" 
                    element={
                        <MainLayout 
                            isSidebarCollapsed={isSidebarCollapsed} 
                            toggleSidebar={toggleSidebar}
                            sidebarWidth={sidebarWidth}
                            onSearchChange={handleSearchChange}
                            searchTerm={globalSearchTerm}
                        >
                            <InvoiceTable />
                        </MainLayout>
                    } 
                />
            </Routes>
        </Router>
    );
}