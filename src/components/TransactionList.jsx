// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const TransactionList = () => {
//   const { transactions } = useContext(AppContext);

//   if (!transactions || transactions.length === 0) {
//     return <div className="card">No transactions yet</div>;
//   }

//   return (
//     <div className="card">
//       <h3>Transactions</h3>

//       {transactions.map((t) => (
//         <div className="transaction-item" key={t.id}>
//           <div>
//             <p className="title">{t.title}</p>
//             <p className="category">{t.category}. {new Date(t.date).toLocaleDateString()}</p>
//           </div>

//           <div className={`amount ${t.type}`}>
//             ₹{t.amount}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TransactionList;

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TransactionList = () => {
  const { transactions } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  if (!transactions || transactions.length === 0) {
    return <div className="card">No transactions yet</div>;
  }

  // ✅ FILTER LOGIC
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="card">
      <h3>Transactions</h3>

      {/* 🔍 SEARCH + FILTER UI */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📋 TRANSACTION LIST */}
      {filteredTransactions.length === 0 ? (
        <p>No matching transactions</p>
      ) : (
        filteredTransactions.map((t) => (
          <div className="transaction-item" key={t.id}>
            <div>
              <p className="title">{t.title}</p>
              <p className="category">
                {t.category} •{" "}
                {new Date(t.date).toLocaleDateString()}
              </p>
            </div>

            <div className={`amount ${t.type}`}>
              ₹{t.amount}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;