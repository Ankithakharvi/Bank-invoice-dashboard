 
//  import React, { useState, useEffect } from 'react'; 
// import invoicesData from '../../data/invoices.json'; // Assuming this file exists locally
// import { FaSearch } from 'react-icons/fa'; // Import the search icon

// const cellStyle = { 
//     padding: '12px', 
//     textAlign: 'left', 
//     fontSize: '14px', 
//     whiteSpace: 'nowrap' 
// };

// const getFormattedDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// };

// const COLORS = {
//     calendarDayActive: '#F48722',
//     primary: '#0D47A1',
//     text: '#141414',
//     border: '#E0E0E0',
//     background: '#FFFFFF',
//     dark: '#141414',
//     searchContainerBg: '#F5F6FA'
// };

// const COLUMN_WIDTHS = {
//     checkbox: '40px',
//     index: '40px',
//     companyName: '180px',
//     gstPan: '100px',
//     orderId: '100px',
//     invoiceId: '100px',
//     issuedDate: '100px',
//     invoiceAmount: '120px',
//     department: '120px',
// };

// export default function InvoiceTable({ searchTerm = '', onSearchChange = () => {} }) { 
//     const initialDate = new Date();
//     const todayDateString = getFormattedDate(initialDate);
 
//     const [invoices, setInvoices] = useState([]);
//     const [expandedRowId, setExpandedRowId] = useState(null);
//     const [filterDate, setFilterDate] = useState(null); 
//     const [currentDate] = useState(initialDate);

//     useEffect(() => {
//         setInvoices(invoicesData);
//     }, []);

//     const handleRowClick = (id) => {
//         setExpandedRowId(expandedRowId === id ? null : id);
//     };

//    const filteredInvoices = invoices.filter(invoice => {
//   const lower = searchTerm.toLowerCase().trim();
//   return (
//     lower === '' ||
//     invoice.companyName.toLowerCase().includes(lower) ||
//     invoice.gstPan.toLowerCase().includes(lower) ||
//     invoice.orderId.toLowerCase().includes(lower) ||
//     invoice.invoiceId.toLowerCase().includes(lower)
//   );
// });


//     const todayDayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
//     const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const currentMonthName = monthNames[currentDate.getMonth()];
//     const currentYear = currentDate.getFullYear();

//     const getWeekDays = () => {
//         const weekDays = [];
//         const todayIndex = currentDate.getDay(); 
//         const startDayOffset = todayIndex - 3; 
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

//     const renderHeader = () => (
//         <thead style={{ background: '#F5F6FA', borderBottom: '1px solid #E0E0E0' }}>
//             <tr>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.checkbox }}>All</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.index }}>No.</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.companyName }}>Company name</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.gstPan }}>GST or Pan</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.orderId }}>Order ID</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceId }}>Invoice ID</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.issuedDate }}>Issued date</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceAmount }}>Invoice amount</th>
//                 <th style={{ ...cellStyle, width: COLUMN_WIDTHS.department }}>Department</th>
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
//                             backgroundColor: expandedRowId === invoice.id ? COLORS.primary : COLORS.background,
//                             color: expandedRowId === invoice.id ? '#FFFFFF' : COLORS.text,
//                             borderBottom: '1px solid #F0F0F0',
//                             transition: 'background-color 0.2s'
//                         }}
//                     >
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.checkbox }}><input type="checkbox" /></td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.index }}>{index + 1}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.companyName }}>{invoice.companyName}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.gstPan }}>{invoice.gstPan}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.orderId }}>{invoice.orderId}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceId }}>{invoice.invoiceId}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.issuedDate }}>{invoice.issuedDate}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceAmount, fontWeight: 'bold' }}>₹ {invoice.invoiceAmount}</td>
//                         <td style={{ ...cellStyle, width: COLUMN_WIDTHS.department }}>{invoice.department}</td>
//                     </tr>

//                     {expandedRowId === invoice.id && (
//   <tr style={{ background: '#E6EFFF', borderBottom: '1px solid #D0DFFF' }}>
//     <td colSpan="9" style={{ padding: '6px 12px' }}> {/* 🔹 Reduced padding */}
//       <div style={{ 
//         padding: '8px 10px', 
//         background: '#FFFFFF', 
//         borderRadius: '8px', 
//         borderLeft: '4px solid #3B82F6',
        
//         wordWrap: 'break-word',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }}>
//         <h4 style={{ 
//           margin: '0 0 4px 0', 
//           fontSize: '13px', 
//           color: COLORS.text 
//         }}>
//           Remark:
//         </h4>
//         <p style={{ 
//           margin: 0, 
//           fontSize: '12px', 
//           color: '#555555', 
//           lineHeight: '1.4' 
//         }}>
//           {invoice.remark}
//         </p>
//       </div>
//     </td>
//   </tr>
// )}

//                 </React.Fragment>
//             ))}
//         </tbody>
//     );

//     return (
//         <>
//             <style>
//             {`
//                 thead th {
//                     position: sticky;
//                     top: 0;
//                     background: #F5F6FA;
//                     z-index: 2;
//                 }
//             `}
//             </style>

//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px', gap: '10px' }}>
//                 <div style={{ color: '#6B7280', fontSize: '14px' }}>
//                     Dashboard / <span style={{ color: COLORS.primary, fontWeight: 500 }}>Invoices</span>
//                 </div>

//                 <div style={{ 
//                     padding: '8px 12px', 
//                     borderRadius: '8px', 
//                     fontSize: '10px',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     flexShrink: 0
//                 }}>
//                     <div style={{ fontSize: '11px', fontWeight: 600, color: '#555', marginBottom: '4px' }}>{monthNames[currentDate.getMonth()]} {currentYear}</div>
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                         {weekDays.map((dayObj) => {
//                             const isToday = dayObj.dateString === todayDateString;
//                             const isFilterSelected = dayObj.dateString === filterDate;
//                             const isSelected = filterDate ? isFilterSelected : isToday;
//                             const activeBackgroundStyle = {
//                                 background: `conic-gradient(from 0deg, ${COLORS.calendarDayActive} 0% 50%, ${COLORS.dark} 50% 100%)`, 
//                                 color: '#FFFFFF',
//                                 border: 'none',
//                                 fontWeight: 700,
//                             };
//                             return (
//                                 <div 
//                                     className="calendar-day-item" 
//                                     key={dayObj.dateString} 
//                                     onClick={() => setFilterDate(filterDate === dayObj.dateString ? null : dayObj.dateString)} 
//                                     style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 500, color: COLORS.text, cursor: 'pointer' }}
//                                 >
//                                     <span className="day-name" style={{ fontSize: '10px', marginBottom: '2px', color: COLORS.text, fontWeight: 500 }}>
//                                         {dayObj.dayName}
//                                     </span>
//                                     <span style={{ 
//                                         width: '24px', 
//                                         height: '24px', 
//                                         borderRadius: '50%',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         fontSize: '12px',
//                                         transition: 'all 0.2s',
//                                         ...(isSelected 
//                                             ? activeBackgroundStyle 
//                                             : { backgroundColor: 'transparent', color: '#555', border: `1px solid ${COLORS.border}`, fontWeight: 500 })
//                                     }}>{dayObj.dayNumber}</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             <h2 style={{ fontSize: '20px', fontWeight: 600, color: COLORS.text, marginBottom: '20px' }}>
//                 Invoice Received
//             </h2>

//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '10px' }}>
//                 <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//                     {['Approval', 'Rejected', 'Pending'].map(status => (
//                         <button 
//                             key={status}
//                             style={{ 
//                                 padding: '8px 15px', 
//                                 borderRadius: '6px', 
//                                 border: `1px solid ${COLORS.border}`, 
//                                 background: status === 'Approval' ? COLORS.primary : '#F8F9FA',
//                                 color: status === 'Approval' ? '#FFFFFF' : '#555555',
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             {status}
//                         </button>
//                     ))}
//                 </div>

//                 <div style={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     padding: '8px 12px',
//                     borderRadius: '6px',
//                     backgroundColor: COLORS.searchContainerBg, 
//                     border: `1px solid ${COLORS.border}`,
//                     width: '300px', 
//                     boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
//                 }}>
//                     <FaSearch style={{ color: '#9CA3AF', marginRight: '8px', fontSize: '14px' }} />
//                     <input
//                         type="text"
//                         placeholder="Search invoices..."
//                         value={searchTerm}
//                         onChange={(e) =>  setSearchTerm(e.target.value)} 
//                         style={{
//                             flexGrow: 1,
//                             border: 'none',
//                             outline: 'none',
//                             backgroundColor: 'transparent',
//                             fontSize: '14px',
//                             color: COLORS.text,
//                         }}
//                     />
//                     <span style={{ 
//                         fontSize: '12px', 
//                         color: COLORS.primary, 
//                         fontWeight: 600, 
//                         marginLeft: '10px',
//                         padding: '2px 8px',
//                         borderRadius: '4px',
//                         backgroundColor: '#E0EFFF'
//                     }}>
//                         {filteredInvoices.length} Found
//                     </span>
//                 </div>
//             </div>

//             <div style={{ overflowX: 'auto', overflowY: 'scroll', width: '100%', height:"500px" }}>
//                 <table style={{ height:'150%', width: '120%', minWidth: '500px', borderCollapse: 'collapse', background: COLORS.background , borderRadius: '12px',boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
//                     {renderHeader()}
//                     {renderRows()}
//                 </table>
//             </div>
//         </>
//     );
// }
import React, { useState, useEffect } from 'react'; 
import invoicesData from '../../data/invoices.json'; // Assuming this file exists locally
import { FaSearch } from 'react-icons/fa';

const cellStyle = { 
    padding: '12px', 
    textAlign: 'left', 
    fontSize: '14px', 
    whiteSpace: 'nowrap' 
};

const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const COLORS = {
    calendarDayActive: '#F48722',
    primary: '#0D47A1',
    text: '#141414',
    border: '#E0E0E0',
    background: '#FFFFFF',
    dark: '#141414',
    searchContainerBg: '#F5F6FA'
};

const COLUMN_WIDTHS = {
    checkbox: '40px',
    index: '40px',
    companyName: '180px',
    gstPan: '100px',
    orderId: '100px',
    invoiceId: '100px',
    issuedDate: '100px',
    invoiceAmount: '120px',
    department: '120px',
};

export default function InvoiceTable() { 
    const initialDate = new Date();
    const todayDateString = getFormattedDate(initialDate);

    const [invoices, setInvoices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedRowId, setExpandedRowId] = useState(null);
    const [filterDate, setFilterDate] = useState(null); 
    const [currentDate] = useState(initialDate);

    useEffect(() => {
        setInvoices(invoicesData);
    }, []);

    const handleRowClick = (id) => {
        setExpandedRowId(expandedRowId === id ? null : id);
    };

    // Filter invoices by search term and date
    const filteredInvoices = invoices.filter(invoice => {
        const lower = searchTerm.toLowerCase().trim();
        const matchesSearch = lower === '' ||
            invoice.companyName.toLowerCase().includes(lower) ||
            invoice.gstPan.toLowerCase().includes(lower) ||
            invoice.orderId.toLowerCase().includes(lower) ||
            invoice.invoiceId.toLowerCase().includes(lower);

        const matchesDate = filterDate ? invoice.issuedDate === filterDate : true;

        return matchesSearch && matchesDate;
    });

    const todayDayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

   const getWeekDays = () => {
    const weekDays = [];
    // Start from Sunday of current week
    const startOfWeek = new Date(currentDate);
    const dayOfWeek = startOfWeek.getDay(); // 0 = Sunday, 1 = Monday ...
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek); 

    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        weekDays.push({
            dayNumber: day.getDate(),
            dayName: todayDayName[day.getDay()],
            dateString: getFormattedDate(day),
        });
    }
    return weekDays;
};

    
    const weekDays = getWeekDays();

    const renderHeader = () => (
        <thead style={{ background: '#F5F6FA', borderBottom: '1px solid #E0E0E0' }}>
            <tr>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.checkbox }}>All</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.index }}>No.</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.companyName }}>Company name</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.gstPan }}>GST or Pan</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.orderId }}>Order ID</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceId }}>Invoice ID</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.issuedDate }}>Issued date</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceAmount }}>Invoice amount</th>
                <th style={{ ...cellStyle, width: COLUMN_WIDTHS.department }}>Department</th>
            </tr>
        </thead>
    );

    const renderRows = () => (
        <tbody>
            {filteredInvoices.map((invoice, index) => (
                <React.Fragment key={invoice.id}>
                    <tr 
                        onClick={() => handleRowClick(invoice.id)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: expandedRowId === invoice.id ? COLORS.primary : COLORS.background,
                            color: expandedRowId === invoice.id ? '#FFFFFF' : COLORS.text,
                            borderBottom: '1px solid #F0F0F0',
                            transition: 'background-color 0.2s'
                        }}
                    >
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.checkbox }}><input type="checkbox" /></td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.index }}>{index + 1}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.companyName }}>{invoice.companyName}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.gstPan }}>{invoice.gstPan}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.orderId }}>{invoice.orderId}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceId }}>{invoice.invoiceId}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.issuedDate }}>{invoice.issuedDate}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.invoiceAmount, fontWeight: 'bold' }}>₹ {invoice.invoiceAmount}</td>
                        <td style={{ ...cellStyle, width: COLUMN_WIDTHS.department }}>{invoice.department}</td>
                    </tr>

                    {expandedRowId === invoice.id && (
                        <tr style={{ background: '#E6EFFF', borderBottom: '1px solid #D0DFFF' }}>
                            <td colSpan="9" style={{ padding: '6px 12px' }}>
                                <div style={{ 
                                    padding: '8px 10px', 
                                    background: '#FFFFFF', 
                                    borderRadius: '8px', 
                                    borderLeft: '4px solid #3B82F6',
                                    wordWrap: 'break-word',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                }}>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', color: COLORS.text }}>Remark:</h4>
                                    <p style={{ margin: 0, fontSize: '12px', color: '#555555', lineHeight: '1.4' }}>
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
            <style>
            {`
                thead th {
                    position: sticky;
                    top: 0;
                    background: #F5F6FA;
                    z-index: 2;
                }
            `}
            </style>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px', gap: '10px' }}>
                <div style={{ color: '#6B7280', fontSize: '14px' }}>
                    Dashboard / <span style={{ color: COLORS.primary, fontWeight: 500 }}>Invoices</span>
                </div>

                <div style={{ 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    fontSize: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0
                }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#555', marginBottom: '4px' }}>{monthNames[currentDate.getMonth()]} {currentYear}</div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {weekDays.map((dayObj) => {
                           const isToday = dayObj.dateString === todayDateString;
const isFilterSelected = dayObj.dateString === filterDate;
const isSelected = filterDate ? isFilterSelected : isToday;

                            const activeBackgroundStyle = {
                                background: `conic-gradient(from 0deg, ${COLORS.calendarDayActive} 0% 50%, ${COLORS.dark} 50% 100%)`, 
                                color: '#FFFFFF',
                                border: 'none',
                                fontWeight: 700,
                            };
                            return (
                                <div 
                                    className="calendar-day-item" 
                                    key={dayObj.dateString} 
                                    onClick={() => setFilterDate(filterDate === dayObj.dateString ? null : dayObj.dateString)} 
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 500, color: COLORS.text, cursor: 'pointer' }}
                                >
                                    <span className="day-name" style={{ fontSize: '10px', marginBottom: '2px', color: COLORS.text, fontWeight: 500 }}>
                                        {dayObj.dayName}
                                    </span>
                                    <span style={{ 
                                        width: '24px', 
                                        height: '24px', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        transition: 'all 0.2s',
                                        ...(isSelected 
                                            ? activeBackgroundStyle 
                                            : { backgroundColor: 'transparent', color: '#555', border: `1px solid ${COLORS.border}`, fontWeight: 500 })
                                    }}>{dayObj.dayNumber}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: 600, color: COLORS.text, marginBottom: '20px' }}>
                Invoice Received
            </h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Approval', 'Rejected', 'Pending'].map(status => (
                        <button 
                            key={status}
                            style={{ 
                                padding: '8px 15px', 
                                borderRadius: '6px', 
                                border: `1px solid ${COLORS.border}`, 
                                background: status === 'Approval' ? COLORS.primary : '#F8F9FA',
                                color: status === 'Approval' ? '#FFFFFF' : '#555555',
                                cursor: 'pointer'
                            }}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '8px 12px',
                    borderRadius: '6px',
                    backgroundColor: COLORS.searchContainerBg, 
                    border: `1px solid ${COLORS.border}`,
                    width: '400px', 
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                }}>
                    <FaSearch style={{ color: '#9CA3AF', marginRight: '8px', fontSize: '14px' }} />
                    <input
                        type="text"
                        placeholder="Search invoices..."
                        value={searchTerm}
                        onChange={(e) =>  setSearchTerm(e.target.value)} 
                        style={{
                            flexGrow: 1,
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            fontSize: '14px',
                            color: COLORS.text,
                        }}
                    />
                    <span style={{ 
                        fontSize: '12px', 
                        color: COLORS.primary, 
                        fontWeight: 600, 
                        marginLeft: '10px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: '#E0EFFF'
                    }}>
                        {filteredInvoices.length} Found
                    </span>
                </div>
            </div>

            <div style={{ overflowX: 'auto', overflowY: 'scroll', width: '100%', height:"420px" }}>
                <table style={{ width: '120%', minWidth: '500px', borderCollapse: 'collapse', background: COLORS.background , borderRadius: '12px',boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {renderHeader()}
                    {renderRows()}
                </table>
            </div>
        </>
    );
}
