   
// import React, { useState, useEffect } from 'react';
// import invoicesData from '../../data/invoices.json'; // Assuming this file exists locally

// const cellStyle = { 
//     padding: '12px', 
//     textAlign: 'left', 
//     fontSize: '14px', 
//     whiteSpace: 'nowrap' 
// };

// // Helper function to get the date string in YYYY-MM-DD format
// const getFormattedDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// };

// export default function InvoiceTable() {
//     // --- Dynamic Date State ---
//     const initialDate = new Date();
//     const todayDateString = getFormattedDate(initialDate);

//     const [invoices, setInvoices] = useState([]);
//     const [expandedRowId, setExpandedRowId] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     // filterDate is set to null initially to show all data, or to todayDateString to filter by default.
//     const [filterDate, setFilterDate] = useState(null); 
//     const [currentDate] = useState(initialDate); // Stays constant after initial load

//     useEffect(() => {
//         // This will load your local JSON data
//         setInvoices(invoicesData);
//     }, []);

//     const handleRowClick = (id) => {
//         setExpandedRowId(expandedRowId === id ? null : id);
//     };

//     // --- Filter Logic ---
//     const filteredInvoices = invoices.filter(invoice => {
//         const matchesSearch = invoice.companyName.toLowerCase().includes(searchTerm.toLowerCase());
//         // Apply date filter ONLY if filterDate is set
//         const matchesDate = filterDate ? invoice.issuedDate === filterDate : true; 
//         return matchesSearch && matchesDate;
//     });

//     // --- Calendar Data Generation ---
//     const todayDayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
//     const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const currentMonthName = monthNames[currentDate.getMonth()];
//     const currentYear = currentDate.getFullYear();

//     const getWeekDays = () => {
//         const weekDays = [];
//         const todayIndex = currentDate.getDay(); 
//         const startDayOffset = todayIndex - 3; // Center the current day

//         for (let i = 0; i < 7; i++) {
//             const day = new Date(currentDate);
//             day.setDate(currentDate.getDate() + (startDayOffset + i));
            
//             weekDays.push({
//                 dayNumber: day.getDate(),
//                 dayName: todayDayName[day.getDay()],
//                 dateString: getFormattedDate(day),
//             });
//         }
//         return weekDays;
//     };
    
//     const weekDays = getWeekDays();
//     // --------------------------------

//     const renderHeader = () => (
//         <thead style={{ background: '#F5F6FA', borderBottom: '1px solid #E0E0E0' }}>
//             <tr>
//                 <th style={{ ...cellStyle, width: '40px' }}>All</th>
//                 <th style={{ ...cellStyle, width: '40px' }}>No.</th>
//                 <th style={cellStyle}>Company name</th>
//                 <th style={cellStyle}>GST or Pan</th>
//                 <th style={cellStyle}>Order ID</th>
//                 <th style={cellStyle}>Invoice ID</th>
//                 <th style={cellStyle}>Issued date</th>
//                 <th style={cellStyle}>Invoice amount</th>
//                 <th style={cellStyle}>Department</th>
//             </tr>
//         </thead>
//     );

//     const renderRows = () => (
//         <tbody>
//             {filteredInvoices.map((invoice, index) => (
//                 <React.Fragment key={invoice.id}>
//                     <tr 
//                         onClick={() => handleRowClick(invoice.id)}
//                         style={{
//                             cursor: 'pointer',
//                             backgroundColor: expandedRowId === invoice.id ? '#0D47A1' : '#FFFFFF',
//                             color: expandedRowId === invoice.id ? '#FFFFFF' : '#141414',
//                             borderBottom: '1px solid #F0F0F0',
//                             transition: 'background-color 0.2s'
//                         }}
//                     >
//                         <td style={cellStyle}><input type="checkbox" /></td>
//                         <td style={cellStyle}>{index + 1}</td>
//                         <td style={cellStyle}>{invoice.companyName}</td>
//                         <td style={cellStyle}>{invoice.gstPan}</td>
//                         <td style={cellStyle}>{invoice.orderId}</td>
//                         <td style={cellStyle}>{invoice.invoiceId}</td>
//                         <td style={cellStyle}>{invoice.issuedDate}</td>
//                         <td style={{ ...cellStyle, fontWeight: 'bold' }}>₹ {invoice.invoiceAmount}</td>
//                         <td style={cellStyle}>{invoice.department}</td>
//                     </tr>

//                     {expandedRowId === invoice.id && (
//                         <tr style={{ background: '#E6EFFF', borderBottom: '1px solid #D0DFFF' }}>
//                             <td colSpan="9" style={{ padding: '20px' }}>
//                                 <div style={{ 
//                                     padding: '10px', 
//                                     background: '#FFFFFF', 
//                                     borderRadius: '8px', 
//                                     borderLeft: '4px solid #3B82F6' 
//                                 }}>
//                                     <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#141414' }}>Remark:</h4>
//                                     <p style={{ margin: 0, fontSize: '13px', color: '#555555' }}>
//                                         {invoice.remark}
//                                     </p>
//                                 </div>
//                             </td>
//                         </tr>
//                     )}
//                 </React.Fragment>
//             ))}
//         </tbody>
//     );

//     return (
//         <>
//             {/* 🔥 Mobile Responsive Styles (Adjusted for better visibility) */}
//             <style>
//             {`
//                 @media (max-width: 768px) {
//                     td, th { padding: 8px !important; font-size: 12px !important; }
//                     h2 { font-size: 18px !important; }
//                     input, button { font-size: 12px !important; padding: 6px 10px !important; }
//                     .calendar-day-item span {
//                         width: 18px !important;
//                         height: 18px !important;
//                         font-size: 10px !important;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .calendar-day-item span {
//                         width: 20px !important;
//                         height: 20px !important;
//                         font-size: 10px !important;
//                     }
//                     .calendar-day-item .day-name {
//                         font-size: 9px !important;
//                         color: #141414 !important;
//                     }
//                 }
//             `}
//             </style>

//             {/* 🧭 Breadcrumbs + Dashboard-style Calendar */}
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px', gap: '10px' }}>
//                 <div style={{ color: '#6B7280', fontSize: '14px' }}>
//                     Dashboard / <span style={{ color: '#0D47A1', fontWeight: 500 }}>Invoices</span>
//                 </div>

//                 {/* 📅 Calendar (DYNAMIC LOGIC APPLIED) */}
//                 <div style={{ 
//                     border: '1px solid #E0E0E0', 
//                     borderRadius: '8px', 
//                     padding: '8px 12px', 
//                     fontSize: '10px',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     backgroundColor: '#FFFFFF',
//                     flexShrink: 0
//                 }}>
//                     <div style={{ fontSize: '11px', fontWeight: 600, color: '#555', marginBottom: '4px' }}>{currentMonthName} {currentYear}</div>
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                         {weekDays.map((dayObj) => {
//                             // Check for today's date string
//                             const isToday = dayObj.dateString === todayDateString;
//                             const isFilterSelected = dayObj.dateString === filterDate;
                            
//                             // Highlight: 
//                             // 1. If a filter is explicitly set, highlight the filtered date.
//                             // 2. If no filter is set (filterDate is null), highlight today's date.
//                             const isSelected = filterDate ? isFilterSelected : isToday;

//                             return (
//                                 <div 
//                                     className="calendar-day-item" 
//                                     key={dayObj.dateString} 
//                                     // Toggles the filter: sets the date if it's new, or clears it (sets to null) if clicked again.
//                                     onClick={() => setFilterDate(filterDate === dayObj.dateString ? null : dayObj.dateString)} 
//                                     style={{ 
//                                         display: 'flex', 
//                                         flexDirection: 'column', 
//                                         alignItems: 'center', 
//                                         fontWeight: 500, 
//                                         color: '#141414',
//                                         cursor: 'pointer' 
//                                     }}
//                                 >
//                                     {/* Day Name */}
//                                     <span 
//                                         className="day-name" 
//                                         style={{ 
//                                             fontSize: '10px', 
//                                             marginBottom: '2px', 
//                                             color: '#141414',
//                                             fontWeight: 500
//                                         }}
//                                     >
//                                         {dayObj.dayName}
//                                     </span>
//                                     {/* Day Number - Orange background for selected day */}
//                                     <span style={{ 
//                                         width: '24px', 
//                                         height: '24px', 
//                                         borderRadius: '50%',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         backgroundColor: isSelected ? '#F48722' : 'transparent', 
//                                         color: isSelected ? '#FFFFFF' : '#555', 
//                                         border: 'none',
//                                         fontSize: '12px',
//                                         fontWeight: isSelected ? 700 : 500,
//                                         transition: 'background-color 0.2s, color 0.2s'
//                                     }}>{dayObj.dayNumber}</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Header */}
//             <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '20px' }}>
//                 Invoice Received
//             </h2>

//             {/* 🔍 Filter Bar */}
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '10px' }}>
//                 <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//                     {['Approval', 'Rejected', 'Pending'].map(status => (
//                         <button 
//                             key={status}
//                             style={{ 
//                                 padding: '8px 15px', 
//                                 borderRadius: '6px', 
//                                 border: '1px solid #E0E0E0', 
//                                 background: status === 'Approval' ? '#0D47A1' : '#F8F9FA',
//                                 color: status === 'Approval' ? '#FFFFFF' : '#555555',
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             {status}
//                         </button>
//                     ))}
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
//                     <input 
//                         type="text"
//                         placeholder="Search company..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         style={{
//                             padding: '8px 12px',
//                             borderRadius: '6px',
//                             border: '1px solid #E0E0E0',
//                             outline: 'none',
//                             fontSize: '14px'
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* 🧾 Table (Scrollable) */}
//             <div style={{ overflowX: 'auto', width: '100%' }}>
//                 <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
//                     {renderHeader()}
//                     {renderRows()}
//                 </table>
//             </div>
//         </>
//     );
// }
// InvoiceTable.jsx

import React, { useState, useEffect } from 'react';
import invoicesData from '../../data/invoices.json'; // Assuming this file exists locally

const cellStyle = { 
    padding: '12px', 
    textAlign: 'left', 
    fontSize: '14px', 
    whiteSpace: 'nowrap' 
};

// Helper function to get the date string in YYYY-MM-DD format
const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// 🌟 KEY CHANGE: Accept searchTerm prop
export default function InvoiceTable({ searchTerm = '' }) { 
    // --- Dynamic Date State ---
    const initialDate = new Date();
    const todayDateString = getFormattedDate(initialDate);

    const [invoices, setInvoices] = useState([]);
    const [expandedRowId, setExpandedRowId] = useState(null);
    // 🌟 REMOVED: const [searchTerm, setSearchTerm] = useState(''); // Local search state is no longer needed
    // filterDate is set to null initially to show all data, or to todayDateString to filter by default.
    const [filterDate, setFilterDate] = useState(null); 
    const [currentDate] = useState(initialDate); // Stays constant after initial load

    useEffect(() => {
        // This will load your local JSON data
        setInvoices(invoicesData);
    }, []);

    const handleRowClick = (id) => {
        setExpandedRowId(expandedRowId === id ? null : id);
    };

    // --- Filter Logic ---
    const filteredInvoices = invoices.filter(invoice => {
        // 🌟 USE GLOBAL SEARCH TERM
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

        const matchesSearch = lowerCaseSearchTerm === '' ? true : (
            // Search logic: check company name, GST/Pan, Order ID, Invoice ID
            invoice.companyName.toLowerCase().includes(lowerCaseSearchTerm) ||
            String(invoice.gstPan).toLowerCase().includes(lowerCaseSearchTerm) ||
            String(invoice.orderId).toLowerCase().includes(lowerCaseSearchTerm) ||
            String(invoice.invoiceId).toLowerCase().includes(lowerCaseSearchTerm)
        );
        
        // Apply date filter ONLY if filterDate is set
        const matchesDate = filterDate ? invoice.issuedDate === filterDate : true; 
        
        return matchesSearch && matchesDate;
    });

    // --- Calendar Data Generation --- (Unchanged)
    const todayDayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const getWeekDays = () => {
        const weekDays = [];
        const todayIndex = currentDate.getDay(); 
        const startDayOffset = todayIndex - 3; // Center the current day

        for (let i = 0; i < 7; i++) {
            const day = new Date(currentDate);
            day.setDate(currentDate.getDate() + (startDayOffset + i));
            
            weekDays.push({
                dayNumber: day.getDate(),
                dayName: todayDayName[day.getDay()],
                dateString: getFormattedDate(day),
            });
        }
        return weekDays;
    };
    
    const weekDays = getWeekDays();
    // --------------------------------

    const renderHeader = () => (
        <thead style={{ background: '#F5F6FA', borderBottom: '1px solid #E0E0E0' }}>
            <tr>
                <th style={{ ...cellStyle, width: '40px' }}>All</th>
                <th style={{ ...cellStyle, width: '40px' }}>No.</th>
                <th style={cellStyle}>Company name</th>
                <th style={cellStyle}>GST or Pan</th>
                <th style={cellStyle}>Order ID</th>
                <th style={cellStyle}>Invoice ID</th>
                <th style={cellStyle}>Issued date</th>
                <th style={cellStyle}>Invoice amount</th>
                <th style={cellStyle}>Department</th>
            </tr>
        </thead>
    );

    const renderRows = () => (
        <tbody>
            {filteredInvoices.map((invoice, index) => ( // 🌟 USING filteredInvoices
                <React.Fragment key={invoice.id}>
                    <tr 
                        onClick={() => handleRowClick(invoice.id)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: expandedRowId === invoice.id ? '#0D47A1' : '#FFFFFF',
                            color: expandedRowId === invoice.id ? '#FFFFFF' : '#141414',
                            borderBottom: '1px solid #F0F0F0',
                            transition: 'background-color 0.2s'
                        }}
                    >
                        <td style={cellStyle}><input type="checkbox" /></td>
                        <td style={cellStyle}>{index + 1}</td>
                        <td style={cellStyle}>{invoice.companyName}</td>
                        <td style={cellStyle}>{invoice.gstPan}</td>
                        <td style={cellStyle}>{invoice.orderId}</td>
                        <td style={cellStyle}>{invoice.invoiceId}</td>
                        <td style={cellStyle}>{invoice.issuedDate}</td>
                        <td style={{ ...cellStyle, fontWeight: 'bold' }}>₹ {invoice.invoiceAmount}</td>
                        <td style={cellStyle}>{invoice.department}</td>
                    </tr>

                    {expandedRowId === invoice.id && (
                        <tr style={{ background: '#E6EFFF', borderBottom: '1px solid #D0DFFF' }}>
                            <td colSpan="9" style={{ padding: '20px' }}>
                                <div style={{ 
                                    padding: '10px', 
                                    background: '#FFFFFF', 
                                    borderRadius: '8px', 
                                    borderLeft: '4px solid #3B82F6' 
                                }}>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#141414' }}>Remark:</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#555555' }}>
                                        {invoice.remark}
                                    </p>
                                </div>
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
        </tbody>
    );

    return (
        <>
            {/* 🔥 Mobile Responsive Styles (Unchanged) */}
            <style>
            {`
                @media (max-width: 768px) {
                    td, th { padding: 8px !important; font-size: 12px !important; }
                    h2 { font-size: 18px !important; }
                    input, button { font-size: 12px !important; padding: 6px 10px !important; }
                    .calendar-day-item span {
                        width: 18px !important;
                        height: 18px !important;
                        font-size: 10px !important;
                    }
                }

                @media (max-width: 480px) {
                    .calendar-day-item span {
                        width: 20px !important;
                        height: 20px !important;
                        font-size: 10px !important;
                    }
                    .calendar-day-item .day-name {
                        font-size: 9px !important;
                        color: #141414 !important;
                    }
                }
            `}
            </style>

            {/* 🧭 Breadcrumbs + Dashboard-style Calendar (Unchanged) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px', gap: '10px' }}>
                <div style={{ color: '#6B7280', fontSize: '14px' }}>
                    Dashboard / <span style={{ color: '#0D47A1', fontWeight: 500 }}>Invoices</span>
                </div>

                {/* 📅 Calendar */}
                <div style={{ 
                    border: '1px solid #E0E0E0', 
                    borderRadius: '8px', 
                    padding: '8px 12px', 
                    fontSize: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    flexShrink: 0
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#555', marginBottom: '4px' }}>{currentMonthName} {currentYear}</div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {weekDays.map((dayObj) => {
                            const isToday = dayObj.dateString === todayDateString;
                            const isFilterSelected = dayObj.dateString === filterDate;
                            const isSelected = filterDate ? isFilterSelected : isToday;

                            return (
                                <div 
                                    className="calendar-day-item" 
                                    key={dayObj.dateString} 
                                    onClick={() => setFilterDate(filterDate === dayObj.dateString ? null : dayObj.dateString)} 
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        fontWeight: 500, 
                                        color: '#141414',
                                        cursor: 'pointer' 
                                    }}
                                >
                                    {/* Day Name */}
                                    <span 
                                        className="day-name" 
                                        style={{ 
                                            fontSize: '10px', 
                                            marginBottom: '2px', 
                                            color: '#141414',
                                            fontWeight: 500
                                        }}
                                    >
                                        {dayObj.dayName}
                                    </span>
                                    {/* Day Number - Orange background for selected day */}
                                    <span style={{ 
                                        width: '24px', 
                                        height: '24px', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: isSelected ? '#F48722' : 'transparent', 
                                        color: isSelected ? '#FFFFFF' : '#555', 
                                        border: 'none',
                                        fontSize: '12px',
                                        fontWeight: isSelected ? 700 : 500,
                                        transition: 'background-color 0.2s, color 0.2s'
                                    }}>{dayObj.dayNumber}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Header */}
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '20px' }}>
                Invoice Received
            </h2>

            {/* 🔍 Filter Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Approval', 'Rejected', 'Pending'].map(status => (
                        <button 
                            key={status}
                            style={{ 
                                padding: '8px 15px', 
                                borderRadius: '6px', 
                                border: '1px solid #E0E0E0', 
                                background: status === 'Approval' ? '#0D47A1' : '#F8F9FA',
                                color: status === 'Approval' ? '#FFFFFF' : '#555555',
                                cursor: 'pointer'
                            }}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    {/* 🌟 REMOVED LOCAL SEARCH INPUT AND REPLACED WITH A DUMMY LABEL */}
                    {/* The main search is now in the TopBar */}
                    <span style={{ fontSize: '14px', color: '#555555', fontWeight: 500 }}>
                        {filteredInvoices.length} Invoices Found
                    </span>
                </div>
            </div>

            {/* 🧾 Table (Scrollable) */}
            <div style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {renderHeader()}
                    {renderRows()}
                </table>
            </div>
        </>
    );
}