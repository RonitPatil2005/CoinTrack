import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PieChartBox = () => {
  const { transactions } = useContext(AppContext);

  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const category = t.category || "Other";
      categoryData[category] =
        (categoryData[category] || 0) + Number(t.amount);
    }
  });

  const data = Object.entries(categoryData);

  if (!data.length) {
    return <div className="card">No expense data</div>;
  }

  const maxValue = Math.max(...data.map((d) => d[1]));

  return (
    <div className="card">
      <h3>Spending Breakdown</h3>

      {data.map(([category, value], index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{category}</span>
            <span>₹{value}</span>
          </div>

          <div
            style={{
              height: "10px",
              width: `${(value / maxValue) * 100}%`,
              background: "#aa3bff",
              borderRadius: "5px",
              marginTop: "4px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PieChartBox;