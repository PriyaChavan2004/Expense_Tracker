import React from 'react';
import { LuArrowRight } from 'react-icons/lu'; // ✅ import added
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';
const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn flex items-center space-x-1" onClick={onSeeMore}>
          <span>See All</span>
          <LuArrowRight className="text-base" />
        </button>
      </div>

      {/* ✅ show transactions preview */}
      <div className='mt-6'>
        {transactions?.slice(0,5)?.map((expense)=>{
            <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.data).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
            />
        })}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
