import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SummaryCards = () => {
  const { transactions } = useContext(AppContext);

  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  const balance = income - expense;

  return (
    <div className="insights">
      <div className="card">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>

      <div className="card">
        <h3>Total Income</h3>
        <p>₹{income}</p>
      </div>

      <div className="card">
        <h3>Total Expenses</h3>
        <p>₹{expense}</p>
      </div>
    </div>
  );
};

export default SummaryCards;