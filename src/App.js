import React, { useState } from "react";
import Expense from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];


function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES)
 
  const saveNewExpenseData = (expense) =>{
  setExpense((prevExpenses) => {
    return [expense, ...prevExpenses]
    
  })
  console.log(expense);
   }
   
//  return React.createElement(
//   "div", 
//   {},
//  React.createElement("h2", {}, "Lets, get started!"),
//  React.createElement(Expense, {items:expenses})
//  );
 


  return (
    <div>

      
      <Expense items={expenses}/>
      <NewExpense onSaveExpense={saveNewExpenseData}/>
     
      

    </div>
  );
}

export default App;
