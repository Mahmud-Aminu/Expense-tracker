import "../expenses/ExpensesItem.css";

const TotalExpense = props => {
    return <div className="expense-item">
    <div className="expense-item__description">
    <h2 className="expense-item h2">Total Expenses</h2>
    <div className="expense-item__price">${props.total}</div>
    </div>
</div>
}

export default TotalExpense