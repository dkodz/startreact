import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseFormHandler = (expenseData) => {
    const expenseDetails = {
      ...expenseData,
      id: Math.random().toString,
    };
    props.addExpense(expenseDetails);
    s;
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
