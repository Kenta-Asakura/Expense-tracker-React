import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpeneseData) => {
    const expenseData = {
      ...enteredExpeneseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
