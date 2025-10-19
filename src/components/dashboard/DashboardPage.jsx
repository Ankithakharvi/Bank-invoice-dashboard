 
import React, { useState } from 'react';
import data from "../../data/dashboardData.json";
import MetricCard from "./MetricCard";
import ChartCard from "./ChartCard";
import DueByAgeSummary from "./DueByAgeSummary";
import { FaFileInvoice, FaMoneyBillWave, FaClock, FaCheckCircle, FaTimesCircle, FaBuilding, FaUsers, FaHandsHelping } from 'react-icons/fa';

const metricDataWithIcons = [
  { label: "Invoice Received", total: "2123", amount: "12341233234", icon: <FaFileInvoice />, color: '#007bff' },
  { label: "Payable amount", total: "2123", amount: "12341233", icon: <FaMoneyBillWave />, color: '#F48722' },
  { label: "Overdue", total: "2123", amount: "12341233", icon: <FaClock />, color: '#DC3545' },
  { label: "Paid amount", total: "2123", amount: "12341233", icon: <FaCheckCircle />, color: '#28A745' },
  { label: "Rejected", total: "2123", amount: "12341233234", icon: <FaTimesCircle />, color: '#DC3545' },
  { label: "Dispute", total: "2123", amount: "12341233", icon: <FaHandsHelping />, color: '#6C757D' },
  { label: "Department", total: "2123", amount: "12341233", icon: <FaBuilding />, color: '#20C997' },
  { label: "Vendors", total: "2123", amount: "12341233", icon: <FaUsers />, color: '#6F42C1' }
];

const calendarData = {
  month: "October 2025",
  days: [ 19,20,21,22,23,24,25],
  dayNames: ['S','M','T','W','T','F','S']
};

const COLORS = {
  text: '#555555',
  calendarDayActive: '#FFA741',
  border: '#E0E0E0',
  primary: '#007bff',
  highlightBg: '#E8F5FF',
  highlightText: '#1F2439',
};

export default function DashboardPage({ pathSegments = ['Dashboard'] }) {

  // Get today's date (dynamic)
  const today = new Date().getDate();
  const [activeDay, setActiveDay] = useState(today);

  const breadcrumb = pathSegments.join(' / ') + ' /';
  const mainTitle = pathSegments[pathSegments.length - 1];
  const outstandingMetric = { label: "Over all outstanding", amount: "12341233" };

  return (
    <div style={{ padding: "32px", backgroundColor: '#EDF0F4', minHeight: '100vh' }}>
      {/* TOP HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
        <div>
          <span style={{ fontSize: "12px", color: COLORS.text }}>{breadcrumb}</span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#141414", margin: "0" }}>{mainTitle}</h2>
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

        {/* Calendar */}
        <div style={{
          border: `1px solid ${COLORS.border}`,
          borderRadius: '8px',
          padding: '12px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.text, marginBottom: '8px' }}>{calendarData.month}</div>

          {/* Weekday row */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
            {calendarData.dayNames.map((d, idx) => (
              <div key={idx} style={{ width: '28px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: COLORS.text }}>{d}</div>
            ))}
          </div>

          {/* Dates row */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {calendarData.days.map((day, idx) => {
              const isActive = day === activeDay;
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
                    fontSize: '10px',
                    fontWeight: 700,
                    color: isActive ? '#000' : COLORS.text,
                    background: isActive ? COLORS.calendarDayActive : 'transparent',
                    border: isActive ? 'none' : `1px solid ${COLORS.border}`
                  }}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
        {metricDataWithIcons.map((m, idx) => (
          <MetricCard key={idx} label={m.label} total={m.total} amount={m.amount} icon={m.icon} iconColor={m.color} />
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: "flex", gap: "24px", marginTop: "40px" }}>
        <ChartCard title="Queues Chart" data={data.queuesChart} />
        <ChartCard title="KPI Chart" data={data.kpiChart} />
      </div>

      {/* Due By Age */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1F2439", marginBottom: "16px" }}></h3>
        <DueByAgeSummary data={data.dueByAgeSummary} />
      </div>
    </div>
  );
}

 