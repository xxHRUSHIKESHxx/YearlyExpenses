import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enterTitle, setEnteredTitle] = useState("");

  const [enterAmount, setEnteredAmount] = useState("");

  const [enterDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //    enteredAmount:'',
  //    eneteredDate:'',
  // //});

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    // })//;

    // setUserInput((prevState)=> {
    //   return{...prevState,enteredTitle: event.target.value };
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //    ...userInput,
    //  enteredAmount:event.target.value,
    //  });
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredAmount:event.target.value,
    // });
  }
  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

   props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>TItle</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-01-01"
            max="2023-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
