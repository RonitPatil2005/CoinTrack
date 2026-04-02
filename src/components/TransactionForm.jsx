import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TransactionForm = () => {
    const { role, transactions, setTransactions } = useContext(AppContext);
    const [type, setType] = useState("expense");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    if (role !== "admin") return null;



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount || !category) {
            alert("Please fill all fields");
            return;
        }

        // const newTransaction = {
        //     id: Date.now(),
        //     title,
        //     amount: Number(amount),
        //     category,
        //     type,
        //     date: new Date().toISOString(),
        // };

        const newTransaction = {
            id: Date.now(),
            title: title || "Untitled",
            amount: Number(amount) || 0, // ✅ always number
            category: category || "General", // ✅ never empty
            type: type || "expense", // ✅ default safe
            date: new Date().toISOString(), // ✅ MUST EXIST
        };

        setTransactions([...transactions, newTransaction]);
       
        setTitle("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit} className="form card">
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            {/* 👉 ADD THIS PART */}
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <button>Add Transaction</button>
        </form>

    );
};

export default TransactionForm;