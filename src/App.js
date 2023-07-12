import React,{useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 298.45,
    date: new Date(2021, 3, 23),
  },
  {
    id: "e2",
    title: "toilet paper",
    amount: 230.67,
    date: new Date(2020, 4, 245),
  },
  { id: "e3", 
  title: "perfume", 
  amount: 199.9, 
  date: new Date(2022, 6, 12) },
  { id: "e4",
   title: "hair gel",
    amount: 45.45, 
    date: new Date(2022, 9, 25) },
];

function addExpenseHandler(expense){
  console.log('In App.js');
  console.log(expense);
}

function App() {
  
  const[expenses,setExpense] = useState(DUMMY_EXPENSES);
  
   function addExpenseHandler(expense){
     setExpense((prevExpenses) =>{
       return[expense, ...prevExpenses];
     });
   } ;

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
