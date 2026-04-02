import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import LineChartBox from "../components/LineChartBox";
import PieChartBox from "../components/PieChartBox";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Insights from "../components/Insights";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <SummaryCards />

      <div className="insights">
        <LineChartBox />
        <PieChartBox />
      </div>
      <Insights />
      <TransactionForm />
      <TransactionList />
      
    </div>
  );
};

export default Dashboard;