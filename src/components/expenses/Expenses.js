import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
import YearlyExpense from "./YearlyExpense";



function Expense(props){
 const [filteredYear, setFilteredYear] = useState("2020")
  const filterExpense=(selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() ===filteredYear
  })

  




//  let expenseContent = <p>No content found.</p>
//  if (filterdExpenses.length > 0){
//   expenseContent = filterdExpenses.map((expense, index) => <ExpenseItem
//   key={index}
//    title={expense.title}
//    amount={expense.amount}
//    date= {expense.date}
//  />)
//  }


    return (<div >

<Card className="expenses">
<ExpensesFilter onFilteredExpense={filterExpense} selected={filteredYear}/>
<ExpensesChart expenses = {filterdExpenses}/>
<ExpenseList items = {filterdExpenses}/>
{filterdExpenses.length > 0 && (<YearlyExpense expenses = {filterdExpenses}/>) }



     
    </Card>
    </div>)
    
}

export default Expense;