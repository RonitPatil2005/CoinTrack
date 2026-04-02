import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const LineChartBox = () => {
  const { transactions } = useContext(AppContext);

  if (!transactions || transactions.length === 0) {
    return <div className="card">No data available</div>;
  }

  // ✅ Calculate totals
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += Number(t.amount);
    } else if (t.type === "expense") {
      totalExpense += Number(t.amount);
    }
  });

  const max = Math.max(totalIncome, totalExpense, 1);

  return (
    <div className="card">
      <h3>Financial Overview</h3>

      {/* Income */}
      <div className="chart-item">
        <div className="chart-label">
          <span>Income</span>
          <span>₹{totalIncome}</span>
        </div>
        <div className="bar-bg">
          <div
            className="bar income-bar"
            style={{ width: `${(totalIncome / max) * 100}%` }}
          />
        </div>
      </div>

      {/* Expense */}
      <div className="chart-item">
        <div className="chart-label">
          <span>Expense</span>
          <span>₹{totalExpense}</span>
        </div>
        <div className="bar-bg">
          <div
            className="bar expense-bar"
            style={{ width: `${(totalExpense / max) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChartBox;