export default function DueByAgeSummary({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#D5E3FF", // outer container background
        padding: "16px",
        borderRadius: "8px",
        marginTop: "24px"
      }}
    >
      {/* Heading inside container */}
      <h3 style={{ margin: "0 0 16px 0", fontSize: "18px", color: "#141414" }}>
       Due By Age Summary
      </h3>
      

      {/* Grid of cards */}
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
            <p style={{ fontSize: "14px", color: "#757ac1ff" }}>{item.days}</p>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#141414" }}>
              ₹ {item.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
