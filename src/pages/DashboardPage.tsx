import React from 'react';
import Card from '../component/common/Card';
import { FaArrowUp, FaArrowDown, FaPlus } from 'react-icons/fa';
// Import other necessary components like charts, lists, AI insights
// import SummaryCard from '../components/dashboard/SummaryCard';
// import TransactionList from '../components/dashboard/TransactionList';
// import AiInsights from '../components/dashboard/AiInsights';
// import ChartPlaceholder from '../components/common/ChartPlaceholder'; // You'd create this

const DashboardPage: React.FC = () => {
  // --- Placeholder Data ---
  const totalIncome = 5450.75;
  const totalExpense = 2130.50;
  const recentTransactions = [
    { id: 1, type: 'income', description: 'Salary', amount: 4500, date: '2025-04-10' },
    { id: 2, type: 'expense', description: 'Groceries', amount: 150.25, date: '2025-04-11' },
    { id: 3, type: 'expense', description: 'Rent', amount: 1200, date: '2025-04-05' },
    { id: 4, type: 'income', description: 'Freelance Project', amount: 950.75, date: '2025-04-08' },
    { id: 5, type: 'expense', description: 'Dinner Out', amount: 80, date: '2025-04-12' },
  ];
  // --- End Placeholder Data ---

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Total Income</p>
              <p className="text-3xl font-bold">${totalIncome.toFixed(2)}</p>
            </div>
            <FaArrowUp size={24} className="opacity-70"/>
          </div>
        </Card>
        <Card className="bg-gradient-to-r from-red-400 to-rose-500 text-white">
          <div className="flex items-center justify-between">
             <div>
              <p className="text-sm font-medium opacity-80">Total Expense</p>
              <p className="text-3xl font-bold">${totalExpense.toFixed(2)}</p>
            </div>
            <FaArrowDown size={24} className="opacity-70"/>
          </div>
        </Card>
         <Card className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
           <div className="flex items-center justify-between">
             <div>
              <p className="text-sm font-medium opacity-80">Net Balance</p>
              <p className="text-3xl font-bold">${(totalIncome - totalExpense).toFixed(2)}</p>
             </div>
             {/* Optional Icon */}
           </div>
         </Card>
      </div>

      {/* Chart and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" title="Spending Overview">
          {/* Placeholder for Chart */}
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
            Chart Area (e.g., use Recharts or Chart.js)
          </div>
        </Card>
        <Card title="💡 AI Insights">
            {/* AI Insights Component Placeholder */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <p>Your grocery spending is slightly higher this month compared to average.</p>
                <p>Consider setting a budget alert for 'Dining Out'.</p>
                <p>You've successfully saved 15% more this month!</p>
                <a href="#" className="text-primary dark:text-secondary hover:underline font-medium">Learn more...</a>
            </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card title="Recent Transactions">
          <div className="flex justify-end mb-4">
              <button className="flex items-center bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                  <FaPlus className="mr-2"/> Add Transaction
              </button>
          </div>
          <ul className="space-y-3">
              {recentTransactions.map((tx) => (
                  <li key={tx.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center">
                          <div className={`mr-3 p-2 rounded-full ${tx.type === 'income' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                              {tx.type === 'income' ? <FaArrowUp className="text-green-500"/> : <FaArrowDown className="text-red-500"/>}
                          </div>
                          <div>
                              <p className="font-medium text-gray-800 dark:text-gray-100">{tx.description}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
                          </div>
                      </div>
                      <span className={`font-semibold ${tx.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                      </span>
                  </li>
              ))}
          </ul>
      </Card>
    </div>
  );
};

export default DashboardPage;