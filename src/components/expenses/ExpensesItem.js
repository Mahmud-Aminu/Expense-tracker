import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpensesItem.css";

const ExpenseItem = (props)=> {
//     const [title, setTitle] = useState(props.title)
    
//  const clickHandler = ()=>{

// setTitle("Updated!");
// console.log(setTitle)
//  }
    return <li>
    <Card className="expense-item ">
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
    </li>
}

export default ExpenseItem