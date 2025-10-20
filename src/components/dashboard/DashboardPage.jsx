 
// import React, { useState } from 'react';
// import data from "../../data/dashboardData.json"; 
// import MetricCard from "./MetricCard";
// import ChartCard from "./ChartCard";
// import DueByAgeSummary from "./DueByAgeSummary";
// import { FaFileInvoice, FaMoneyBillWave, FaClock, FaCheckCircle, FaTimesCircle, FaBuilding, FaUsers, FaHandsHelping } from 'react-icons/fa';

//  const metricIconColorMap = {
//     "Invoice Received": { icon: <FaFileInvoice />, color: '#007bff' },
//     "Payable amount": { icon: <FaMoneyBillWave />, color: '#F48722' },
//     "Overdue": { icon: <FaClock />, color: '#DC3545' },
//     "Paid amount": { icon: <FaCheckCircle />, color: '#28A745' },
//     "Rejected": { icon: <FaTimesCircle />, color: '#DC3545' },
//     "Dispute": { icon: <FaHandsHelping />, color: '#6C757D' },
//     "Department": { icon: <FaBuilding />, color: '#20C997' },
//     "Vendors": { icon: <FaUsers />, color: '#6F42C1' }
// };

// // 3. Process the imported JSON data (data.metrics) to add the icons and colors
// const finalMetricData = data.metrics.map(metric => ({
//     ...metric, // Keeps label, total, and amount from JSON
//     icon: metricIconColorMap[metric.label]?.icon,
//     iconColor: metricIconColorMap[metric.label]?.color
// }));

// // Static UI data (OK to hardcode)
// const calendarData = {
//     month: "October 2025",
//     days: [ 19,20,21,22,23,24,25],
//     dayNames: ['S','M','T','W','T','F','S']
// };

// const COLORS = {
//     text: '#555555',
//     calendarDayActive: '#FFA741',
//     border: '#E0E0E0',
//     primary: '#007bff',
//     highlightBg: '#E8F5FF',
//     highlightText: '#1F2439',
// };


// export default function DashboardPage({ pathSegments = ['Dashboard'] }) {

//     // Component state and static text variables
//     const today = new Date().getDate();
//     const [activeDay, setActiveDay] = useState(today);

//     const breadcrumb = pathSegments.join(' / ') + ' /';
//     const mainTitle = pathSegments[pathSegments.length - 1];
    
//     // 4. Use the overallOutstanding value from the JSON
//     const outstandingMetric = { 
//         label: "Over all outstanding", 
//         // Ensure the number is formatted for display
//         amount: data.overallOutstanding ? data.overallOutstanding.toLocaleString('en-IN') : 'N/A' 
//     };


//     return (
//         <div style={{ padding: "3px", backgroundColor: '#EDF0F4', minHeight: '100vh' }}>
            
//             {/* TOP HEADER */}
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
//                 <div>
//                     <span style={{ fontSize: "12px", color: COLORS.text }}>{breadcrumb}</span>
//                     <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#141414", marginTop: "10px"}}>{mainTitle}</h2>
//                     {/* Overall Outstanding Metric - Uses JSON data */}
//                     <div style={{
//                         marginTop: '30px',
//                         padding: '12px 16px',
//                         borderRadius: '8px',
//                         backgroundColor: COLORS.highlightBg,
//                         border: `1px solid ${COLORS.primary}`,
//                         gap:'2px',
//                         display: 'inline-block'
//                     }}>
//                         <span style={{ fontSize: '14px',  fontWeight: 600 }}>{outstandingMetric.label}</span>
//                         <span style={{ fontSize: '18px', color: COLORS.highlightText, fontWeight: 700, marginLeft: '10px' }}>₹ {outstandingMetric.amount}</span>
//                     </div>
//                 </div>

//                 {/* Calendar (Static UI) */}
//                 <div style={{
//                     border: `1px solid ${COLORS.border}`,
//                     borderRadius: '8px',
//                     padding: '12px',
//                     backgroundColor: '#FFFFFF',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center'
//                 }}>
//                     <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.text, marginBottom: '8px' }}>{calendarData.month}</div>

//                     {/* Weekday row */}
//                     <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
//                         {calendarData.dayNames.map((d, idx) => (
//                             <div key={idx} style={{ width: '28px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: COLORS.text }}>{d}</div>
//                         ))}
//                     </div>

//                     {/* Dates row */}
//                     <div style={{ display: 'flex', gap: '6px' }}>
//                         {calendarData.days.map((day) => {
//                             const isActive = day === activeDay;
//                             return (
//                                 <div key={day} onClick={() => setActiveDay(day)}
//                                     style={{
//                                         width: '28px',
//                                         height: '28px',
//                                         borderRadius: '50%',
//                                         cursor: 'pointer',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         fontSize: '10px',
//                                         fontWeight: 700,
//                                         color: isActive ? '#000' : COLORS.text,
//                                         background: isActive ? COLORS.calendarDayActive : 'transparent',
//                                         border: isActive ? 'none' : `1px solid ${COLORS.border}`
//                                     }}
//                                 >
//                                     {day}
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Metric Cards - Uses processed JSON data (finalMetricData) */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
//                 {finalMetricData.map((m, idx) => (
//                     <MetricCard key={idx} 
//                         label={m.label} 
//                         total={m.total} 
//                         amount={m.amount} 
//                         icon={m.icon} 
//                         iconColor={m.iconColor} 
//                     />
//                 ))}
//             </div>

//             {/* Charts - Uses imported JSON data directly */}
//             <div style={{ display: "flex", gap: "24px", marginTop: "40px" }}>
//                 <ChartCard title="Queues Chart" data={data.queuesChart} />
//                 <ChartCard title="KPI Chart" data={data.kpiChart} />
//             </div>

//             {/* Due By Age - Uses imported JSON data directly */}
//             <div style={{ marginTop: "40px" }}>
//     <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1F2439", marginBottom: "16px" }}></h3>
//     {/* PASS THE PENALTY SAVED AMOUNT HERE */}
//     <DueByAgeSummary 
//         data={data.dueByAgeSummary} 
//         penaltySavedAmount={data.penaltySavedAmount} // <--- ADD THIS LINE
//     />
// </div>
//         </div>
//     );
// }
 // components/dashboard/DashboardPage.jsx

import React, { useState } from 'react';
import data from "../../data/dashboardData.json"; 
import MetricCard from "./MetricCard";
import ChartCard from "./ChartCard";
import DueByAgeSummary from "./DueByAgeSummary";
import { FaFileInvoice, FaMoneyBillWave, FaClock, FaCheckCircle, FaTimesCircle, FaBuilding, FaUsers, FaHandsHelping } from 'react-icons/fa';

const metricIconColorMap = {
    "Invoice Received": { icon: <FaFileInvoice />, color: '#007bff' },
    "Payable amount": { icon: <FaMoneyBillWave />, color: '#F48722' },
    "Overdue": { icon: <FaClock />, color: '#DC3545' },
    "Paid amount": { icon: <FaCheckCircle />, color: '#28A745' },
    "Rejected": { icon: <FaTimesCircle />, color: '#DC3545' },
    "Dispute": { icon: <FaHandsHelping />, color: '#6C757D' },
    "Department": { icon: <FaBuilding />, color: '#20C997' },
    "Vendors": { icon: <FaUsers />, color: '#6F42C1' }
};

// 3. Process the imported JSON data (data.metrics) to add the icons and colors
const initialMetricData = data.metrics.map(metric => ({
    ...metric, // Keeps label, total, and amount from JSON
    icon: metricIconColorMap[metric.label]?.icon,
    iconColor: metricIconColorMap[metric.label]?.color
}));

// Static UI data 
const calendarData = {
    month: "October 2025",
    days: [ 19,20,21,22,23,24,25],
    dayNames: ['S','M','T','W','T','F','S']
};

const COLORS = {
    text: '#555555',
    calendarDayActive: '#F48722', // Orange for the highlight
    border: '#E0E0E0',
    primary: '#007bff',
    highlightBg: '#E8F5FF',
    highlightText: '#1F2439',
};


export default function DashboardPage({ pathSegments = ['Dashboard'], searchTerm = '' }) {

    // Component state and static text variables
    const today = new Date().getDate();
    const [activeDay, setActiveDay] = useState(today); // Today is active by default

    const breadcrumb = pathSegments.join(' / ') + ' /';
    const mainTitle = pathSegments[pathSegments.length - 1];
    
    // 4. Use the overallOutstanding value from the JSON
    const outstandingMetric = { 
        label: "Over all outstanding", 
        amount: data.overallOutstanding ? data.overallOutstanding.toLocaleString('en-IN') : 'N/A' 
    };

    // FILTER LOGIC: Filter metrics based on the global search term
    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    const filteredMetricData = initialMetricData.filter(metric => {
        if (lowerSearchTerm === '') return true; 
        
        const amountString = String(metric.amount || '');
        const totalString = String(metric.total || '');

        return (
            metric.label.toLowerCase().includes(lowerSearchTerm) ||
            amountString.includes(lowerSearchTerm) ||
            totalString.includes(lowerSearchTerm)
        );
    });
    // ----------------------------


    return (
        <div style={{ padding: "32px", backgroundColor: '#EDF0F4', minHeight: '100vh' }}>
            
            {/* TOP HEADER */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                <div>
                    <span style={{ fontSize: "12px", color: COLORS.text }}>{breadcrumb}</span>
                    <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#141414", marginTop: "4px"}}>{mainTitle}</h2>
                    {/* Overall Outstanding Metric */}
                    <div style={{
                        marginTop: '20px', 
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: COLORS.highlightBg,
                        border: `1px solid ${COLORS.primary}`,
                        gap:'2px',
                        display: 'inline-block'
                    }}>
                        <span style={{ fontSize: '14px',  fontWeight: 600 }}>{outstandingMetric.label}</span>
                        <span style={{ fontSize: '18px', color: COLORS.highlightText, fontWeight: 700, marginLeft: '10px' }}>₹ {outstandingMetric.amount}</span>
                    </div>
                </div>

                {/* 📅 Calendar - FINAL REVISED DESIGN */}
                <div style={{
                    // NO OUTER BORDER
                    borderRadius: '8px',
                    padding: '12px 16px', 
                    backgroundColor: '#EDF0F4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)' 
                }}>
                    <div style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        color: '#141414', 
                        marginBottom: '10px' 
                    }}>{calendarData.month}</div>

                    {/* Weekday row */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                        {calendarData.dayNames.map((d, idx) => {
                            // Check if the current day name corresponds to the active date's day of the week
                            // Note: This relies on your static calendarData arrays being aligned correctly.
                            const correspondingDay = calendarData.days[idx];
                            const isDayActive = correspondingDay === activeDay;

                            return (
                                <div 
                                    key={idx} 
                                    style={{ 
                                        width: '28px', 
                                        textAlign: 'center', 
                                        fontSize: '10px', 
                                        fontWeight: isDayActive ? 700 : 500, // Bold the active day name
                                        // 🌟 HIGHLIGHT ACTIVE DAY NAME IN ORANGE
                                        color: isDayActive ? COLORS.calendarDayActive : COLORS.text 
                                    }}
                                >
                                    {d}
                                </div>
                            );
                        })}
                    </div>

                    {/* Dates row */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {calendarData.days.map((day) => {
                            const isActive = day === activeDay;
                            
                            // 🌟 UNIQUE SPLIT-COLOR BACKGROUND STYLE
                            const activeBackgroundStyle = {
                                // Orange (top half, 50%) and Black (bottom half, 50%)
                                background: `conic-gradient(from 0deg, ${COLORS.calendarDayActive} 0% 50%, black 50% 100%)`, 
                                color: '#FFFFFF', 
                                border: 'none',
                            };

                            return (
                                <div key={day} onClick={() => setActiveDay(day)}
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px', 
                                        fontWeight: 700,
                                        
                                        // Apply the split style if active, else transparent
                                        ...(isActive ? activeBackgroundStyle : { 
                                            background: 'transparent',
                                            color: '#141414', 
                                            border: `1px solid ${COLORS.border}`
                                        }),
                                        
                                        transition: 'all 0.2s ease-in-out',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    {day}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Metric Cards - Uses FILTERED metric data */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
                {filteredMetricData.map((m, idx) => ( 
                    <MetricCard key={idx} 
                        label={m.label} 
                        total={m.total} 
                        amount={m.amount} 
                        icon={m.icon} 
                        iconColor={m.iconColor} 
                    />
                ))}
            </div>

            {/* Charts - Uses imported JSON data directly */}
            <div style={{ display: "flex", gap: "24px", marginTop: "40px" }}>
                <ChartCard title="Queues Chart" data={data.queuesChart} />
                <ChartCard title="KPI Chart" data={data.kpiChart} />
            </div>

            {/* Due By Age - Uses imported JSON data directly */}
            <div style={{ marginTop: "40px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1F2439", marginBottom: "16px" }}></h3>
                <DueByAgeSummary 
                    data={data.dueByAgeSummary} 
                    penaltySavedAmount={data.penaltySavedAmount}
                />
            </div>
        </div>
    );
}