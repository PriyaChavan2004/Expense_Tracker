
import moment from "moment";
// Validate Email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Get initials from full name
export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" "); // ✅ fixed "aplit" -> "split"
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

// Format number with thousands separator
export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  const [integerPart, fractionalPart] = num.toString().split("."); // ✅ fixed "aplit" -> "split"
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ✅ fixed regex

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData=(data=[])=>{
  const chartData=data.map((item)=>({
    category:item?.category,
    amount:item?.amount,
  }));
  return chartData
}
 

export const prepareIncomeBarChartData = (data = []) => {
  // sort by date
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // map to chart-friendly structure
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    source: item?.source,
    amount: item?.amount, 
  }));

  return chartData;
};


 

export const prepareExpenseLineChartData = (data = []) => {
  const sortData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const chartData = sortData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};

