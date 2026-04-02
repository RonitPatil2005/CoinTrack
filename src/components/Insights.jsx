import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  if (!transactions || transactions.length === 0) {
    return <div className="card">No insights available</div>;
  }

  // ✅ Separate income & expense
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += Number(t.amount);
    } else if (t.type === "expense") {
      totalExpense += Number(t.amount);
    }
  });

  // ✅ Highest Spending Category (ONLY expenses)
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};

  expenses.forEach((t) => {
    const category = t.category || "Other";
    categoryTotals[category] =
      (categoryTotals[category] || 0) + Number(t.amount);
  });

  let highestCategory = "None";
  let maxAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <div className="card">
      <h3>Insights</h3>

      <div className="insight-item">
        <p>Total Income</p>
        <h4>₹{totalIncome}</h4>
      </div>

      <div className="insight-item">
        <p>Total Expense</p>
        <h4>₹{totalExpense}</h4>
      </div>

      <div className="insight-item">
        <p>Highest Spending Category</p>
        <h4>
          {highestCategory} {maxAmount > 0 && `(₹${maxAmount})`}
        </h4>
      </div>
    </div>
  );
};

export default Insights;