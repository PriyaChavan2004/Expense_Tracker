import React from 'react'
const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];
import CustomPieChart from "../Charts/CustomPieChart "

const FinanceOverview = ({ totalBalance, totalIncome, totalExpens }) => {
  const balanceData = [
    { name: "Total Balance", value: totalBalance },
    { name: "Total Expenses", value: totalExpens },
    { name: "Total Income", value: totalIncome }
  ];

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
}

export default FinanceOverview;
