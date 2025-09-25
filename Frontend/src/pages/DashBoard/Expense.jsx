 
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
 import Modal from "../../components/Modal"
import axiosInstance from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPath";
 
import { toast } from "react-hot-toast";
import { useUserAuth } from "../../hooks/useUserAuth";

import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import { ModuleGraph } from "vite";

import AddExpenseForm from "../../components/Expense/AddExpenseForm";
const Expense = () => {
  useUserAuth();

  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ get all expense details
  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATH.EXPENSE.GET_ALL_EXPENSE);
      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
      toast.error("Failed to fetch expense data.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ handle add expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("category is required.");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }
    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATH.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error(
        "Error adding expense:",
        error.response?.data?.message || error.message
      );
      toast.error("Failed to add expense. Please try again.");
    }
  };

  useEffect(()=>{
    fetchExpenseDetails();
    return()=>{

    }
  },[])

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={()=> setOpenAddExpenseModal(true)}
            />

          </div>
        </div>
        <Modal
        isOpen={openAddExpenseModal}
        onClose={()=> setOpenAddExpenseModal(false)}
        title="Add Expense"
        > 
        <AddExpenseForm onAddExpense={handleAddExpense}/>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Expense;
