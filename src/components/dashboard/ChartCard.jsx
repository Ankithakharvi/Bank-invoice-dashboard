 
 import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

// Custom label outside donut for ALL slices with a white circle background
const renderOutsideCircleLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, percent, index }) => {
  const RADIAN = Math.PI / 180;
  
  // Calculate the position: outerRadius + 10 moves the label closer to the donut edge
  const radius = outerRadius + 10; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const displayPercent = (percent * 100).toFixed(0) + '%';
  const circleRadius = 15; // Radius of the white circle

  return (
    <g>
      {/* White circle background with a light border */}
      <circle 
        cx={x} 
        cy={y} 
        r={circleRadius} 
        fill="#FFFFFF" 
        stroke="#D3D3D3" 
        strokeWidth={1} 
      />
      
      {/* Percentage text inside the circle */}
      <text
        x={x}
        y={y}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
      >
        {displayPercent}
      </text>
    </g>
  );
};

// Custom Legend (Kept as originally provided)
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {payload.map((entry, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <span
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: entry.color,
              marginRight: 8,
            }}
          ></span>
          <span style={{ color: '#000', fontSize: 12 }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default function ChartCard({ title, data }) {
  const colors = [
    "#13255B", "#FFA741", "#7B7C89", "#EA5455",
    "#4D5061", "#4BAAB4", "#EE7777", "#F4B462",
    "#A6A8B1", "#2B2B2B", "#7B7C89", "#1F2439"
  ];

  return (
    <div style={{ flex: 1, background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#141414", marginBottom: "16px" }}>{title}</h3>
      <PieChart width={450} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="45%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
          paddingAngle={0}
          stroke="none"
          // Using the new custom label function for the outside circle
          label={renderOutsideCircleLabel} 
          // Explicitly set to false to ensure no connecting line appears
          labelLine={false} 
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
      </PieChart>
    </div>
  );
}