import React, { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
const [ enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount]= useState('')
const [enteredDate, setEnteredDate]= useState('')
const [expenseForm, setExpenseForm] = useState(false)

const handleTitle= (e) =>{
setEnteredTitle(e.target.value);

}

const handleAmount = (e) =>{
setEnteredAmount(e.target.value)
};
const dateChangeHandler =  (e) => {
setEnteredDate(e.target.value)
};

const handleSubmitForm = (e) =>{
    e.preventDefault();
    const expenseData = ({
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    })
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount('');
    setEnteredDate('');
    setExpenseForm(false)
    
}



const showForm = () => {
setExpenseForm(true)
}
   

return ( <div>
    {!expenseForm ? 
        (<div className="new-expense__actions_show" onClick= {showForm}>
                <button type="submit">Add New Expense</button>
            </div>
            ):( 
    <form onSubmit={handleSubmitForm}>
        <div className="new-expense__controls">
            <div className="new-expense__control" >
                <label >Title</label>
                <input type="text" onChange={handleTitle} value={enteredTitle}/>
            </div>
            <div className="new-expense__control" >
                <label htmlFor="">Amount</label>
                <input type="num" min="0.01" step="0.01" onChange={handleAmount} name="amount" value={enteredAmount}/>
            </div>
            <div className="new-expense__control" >
                <label htmlFor="">Date</label>
                <input type="date" min="2020-01-01" max="2030-01-01" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
            <div className="new-expense__actions">
               <button type="submit" onClick={cancel => setExpenseForm(false)}>Cancel</button>
                <button type="submit">Add Expense</button>
              
            </div>
        </div>
    </form>)}
        

</div>
    
   
)
}

export default ExpenseForm
 