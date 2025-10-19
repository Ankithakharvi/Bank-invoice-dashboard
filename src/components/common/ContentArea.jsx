import React from 'react';

// This component receives the search term from the parent (App.js)
export default function ContentArea({ searchTerm }) {
    
    // --- 1. Normalize the search term ---
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    // --- 2. Define visibility flags using case-insensitive partial matching ---
    // If the search term includes 'invoice', this is TRUE (e.g., "inv" or "Invoice report")
    const isInvoiceVisible = normalizedSearchTerm.includes('invoice');
    
    // If the search term includes 'report', this is TRUE
    const isReportVisible = normalizedSearchTerm.includes('report');
    
    // A generic flag to know if ANY specific matching div should be shown
    const matchFound = isInvoiceVisible || isReportVisible;

    // The default view is visible only when the search bar is empty
    const isDefaultVisible = normalizedSearchTerm === '';

    // --- Styles (for visual clarity) ---
    const contentStyle = { 
        padding: '24px',
        flexGrow: 1,
        // The padding below TopBar and Sidebar (adjust this based on your actual layout)
        marginTop: '64px',
        marginLeft: '220px', 
        minHeight: '100vh',
        backgroundColor: '#f0f2f5'
    };
    
    const sectionStyle = {
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        // Use conditional display based on visibility flags
        display: 'none' 
    };

    return (
        <main style={contentStyle}>
            
            {/* 1. DEFAULT CONTENT (Visible ONLY when search is empty) */}
            {isDefaultVisible && (
                <div style={{ ...sectionStyle, display: 'block', backgroundColor: '#ffffff' }}>
                    <h2>Dashboard / Main View</h2>
                    <p>Welcome! Use the search bar to instantly jump to your Invoice or Report sections.</p>
                </div>
            )}
            
            {/* 2. INVOICE CONTENT (Show if a match is found, but only if it's the right one) */}
            {/* Note: This logic shows the section ONLY if the search term matches it, and hides the default content */}
            {isInvoiceVisible && (
                <div style={{ ...sectionStyle, display: 'block', backgroundColor: '#e6f7ff' }}>
                    <h2>🔍 Invoice Details View</h2>
                    <p>This is your dedicated Invoice content, displayed because your search term **"{searchTerm}"** contains "invoice".</p>
                    {/* Your actual Invoice Component goes here */}
                </div>
            )}

            {/* 3. REPORT CONTENT (Show if a match is found, but only if it's the right one) */}
            {isReportVisible && (
                <div style={{ ...sectionStyle, display: 'block', backgroundColor: '#fff0e6' }}>
                    <h2>🔍 Report Generation Page</h2>
                    <p>This is your Report content, displayed because your search term **"{searchTerm}"** contains "report".</p>
                    {/* Your actual Report Component goes here */}
                </div>
            )}

            {/* If a match was made, but the user is not seeing a result, they may be confused. */}
            {/* You could add a "No results" message here if you want to explicitly filter out the default content on ANY search. */}
            {!isDefaultVisible && !matchFound && (
                <div style={{ ...sectionStyle, display: 'block', backgroundColor: '#ffcccc' }}>
                    <h2>No Results Found</h2>
                    <p>No content matching **"{searchTerm}"** was found. Try "invoice" or "report".</p>
                </div>
            )}
            
        </main>
    );
}