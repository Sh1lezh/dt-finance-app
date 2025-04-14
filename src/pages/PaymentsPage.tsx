import React from 'react';
import Card from '../component/common/Card';
import { FaPaperPlane, FaHandHoldingUsd } from 'react-icons/fa';

const PaymentsPage: React.FC = () => {
  // Placeholder state for form inputs (in real app use useState)
  // const [recipient, setRecipient] = useState('');
  // const [amount, setAmount] = useState('');
  // etc.

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Payments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Send Money Card */}
        <Card title="Send Money">
          <form className="space-y-4">
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recipient (Email or Username)</label>
              <input type="text" id="recipient" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="e.g., user@example.com"/>
            </div>
             <div>
              <label htmlFor="amount-send" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount ($)</label>
              <input type="number" id="amount-send" step="0.01" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="0.00"/>
            </div>
             <div>
              <label htmlFor="note-send" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Note (Optional)</label>
              <textarea id="note-send" rows={2} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="What's this for?"></textarea>
            </div>
             <button type="submit" className="w-full flex justify-center items-center bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                 <FaPaperPlane className="mr-2"/> Send Money
             </button>
          </form>
        </Card>

        {/* Request Money Card */}
        <Card title="Request Money">
          <form className="space-y-4">
             <div>
              <label htmlFor="requester" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From (Email or Username)</label>
              <input type="text" id="requester" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="e.g., friend@example.com"/>
            </div>
             <div>
              <label htmlFor="amount-request" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount ($)</label>
              <input type="number" id="amount-request" step="0.01" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="0.00"/>
            </div>
             <div>
              <label htmlFor="note-request" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Note (Optional)</label>
              <textarea id="note-request" rows={2} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary dark:focus:ring-offset-gray-800" placeholder="Reason for request"></textarea>
            </div>
             <button type="submit" className="w-full flex justify-center items-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                 <FaHandHoldingUsd className="mr-2"/> Request Money
             </button>
          </form>
        </Card>
      </div>

       {/* Recent Payment Activity (Placeholder) */}
       <Card title="Recent Activity">
          <div className="h-40 flex items-center justify-center text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded">
              Payment history will appear here...
          </div>
       </Card>
    </div>
  );
};

export default PaymentsPage;