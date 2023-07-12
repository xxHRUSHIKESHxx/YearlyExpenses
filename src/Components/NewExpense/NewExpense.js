import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enterExpenseData) {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  function startEditingHandler() {
    setIsEditing(true);
  };

  function stopEditingHandler() {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add a new Expense</button>
      )}
      {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel = {stopEditingHandler} />)}
    </div>
  );
}

export default NewExpense;
