 
import React from 'react';

// Define styles and colors for the card
const COLORS = {
  cardBackground: '#FFFFFF',
  cardBorder: '#E0E0E0',
  cardShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  mainText: '#1F2439',
  secondaryText: '#555555',
  amountText: '#141414',
  iconBackground: '#F0F5FF', // Light blue/grey background for the icon
};

/**
 * Renders a single metric card.
 * @param {object} props - Component props.
 * @param {string} props.label - The title of the metric (e.g., "Invoice Received").
 * @param {string} props.total - The total count number (e.g., "2123").
 * @param {string} props.amount - The total currency amount (e.g., "12341233").
 * @param {React.ReactNode} props.icon - The React component for the icon.
 * @param {string} props.iconColor - The color of the icon element.
 */
export default function MetricCard({ label, total, amount, icon, iconColor }) {
  return (
    <div style={{
      backgroundColor: COLORS.cardBackground,
      borderRadius: '8px',
      padding: '20px',
      boxShadow: COLORS.cardShadow,
      border: `1px solid ${COLORS.cardBorder}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Icon Container with background circle */}
        <div style={{
          fontSize: '20px',
          color: iconColor, // Use the specific color passed in
        }}>
          {icon}
        </div>
        
        {/* Card Label */}
        <span style={{ fontSize: '14px', fontWeight: 500, color: COLORS.secondaryText }}>
          {label}
        </span>
      </div>

      {/* Metric Totals */}
      <div>
        <div style={{ fontSize: '12px', color: COLORS.secondaryText, marginBottom: '2px' }}>
          Total <span style={{ fontWeight: 600 }}>{total}</span>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 700, color: COLORS.amountText }}>
          ₹ {amount}
        </div>
      </div>
    </div>
  );
}