import React, { useState } from "react";
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;