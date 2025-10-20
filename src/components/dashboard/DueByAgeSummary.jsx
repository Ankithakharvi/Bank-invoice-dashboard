// export default function DueByAgeSummary({ data }) {
//   return (
//     <div
//       style={{
//         backgroundColor: "#D5E3FF", // outer container background
//         padding: "16px",
//         borderRadius: "8px",
//         marginTop: "24px"
//       }}
//     >
//       {/* Heading inside container */}
//       <h3 style={{ margin: "0 0 16px 0", fontSize: "18px", color: "#141414" }}>
//        Due By Age Summary
//       </h3>
      

//       {/* Grid of cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(7, 1fr)",
//           gap: "16px"
//         }}
//       >
//         {data.map((item, idx) => (
//           <div
//             key={idx}
//             style={{
//               backgroundColor: "#FFFFFF", // individual cards remain white
//               padding: "12px",
//               borderRadius: "8px",
//               textAlign: "center"
//             }}
//           >
//             <p style={{ fontSize: "14px", color: "#757ac1ff" }}>{item.days}</p>
//             <p style={{ fontSize: "16px", fontWeight: 700, color: "#141414" }}>
//               ₹ {item.amount.toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react';

export default function DueByAgeSummary({ data, penaltySavedAmount }) {
    
    // Helper function to format the penalty amount
    const formattedPenalty = penaltySavedAmount 
        ? penaltySavedAmount.toLocaleString('en-IN') 
        : 'N/A';

    return (
        <div
            style={{
                backgroundColor: "#D5E3FF", // outer container background
                padding: "16px",
                borderRadius: "8px",
                marginTop: "24px"
            }}
        >
            {/* HEADING AND PENALTY METRIC (SIDE-BY-SIDE) */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: "16px" 
            }}>
                
                {/* Main Heading */}
                <h3 style={{ margin: 0, fontSize: "18px", color: "#141414" }}>
                    Due By Age Summary
                </h3>

                {/* PENALTY SAVED AMOUNT (Single Small Metric on the Right) */}
                <div 
                    style={{
                        backgroundColor: "#FFFFFF",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        textAlign: "center",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                >
                    <span style={{ 
                        fontSize: "14px", 
                        fontWeight: 600, 
                        color: "#757ac1ff" 
                    }}>
                        Penalty Saved
                    </span>
                    <span style={{ 
                        fontSize: "16px", 
                        fontWeight: 700, 
                        color: "#070337ff" // Green for saved amount
                    }}>
                        ₹ {formattedPenalty}
                    </span>
                </div>
            </div>
            
            {/* Grid of cards (REMAINS THE SAME) */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "16px"
                }}
            >
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            backgroundColor: "#FFFFFF", // individual cards remain white
                            padding: "12px",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}
                    >
                        <p style={{ fontSize: "14px", color: "#757ac1ff", margin: 0 }}>{item.days}</p>
                        <p style={{ fontSize: "16px", fontWeight: 700, color: "#141414", margin: '4px 0 0 0' }}>
                            ₹ {item.amount.toLocaleString('en-IN')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}