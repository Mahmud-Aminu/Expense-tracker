import Chart from "../chart/Chart";


const ExpensesChart = props => {

const chartDataPoints = [
    {label:"jan", value: 0},
    {label:"Feb", value: 0},
    {label:"Mar", value: 0},
    {label:"Apr", value: 0},
    {label:"May", value: 0},
    {label:"Jun", value: 0},
    {label:"Jul", value: 0},
    {label:"Aug", value: 0},
    {label:"Sep", value: 0},
    {label:"Oct", value: 0},
    {label:"Nov", value: 0},
    {label:"Dec", value: 0},

]
//loops through the array anc change the value
for (const expense of props.expenses) {
    // loops throght all expences Array
    // and get the month of that expense and update the
    // value base on the expense amount
    const expenseMonth = expense.date.getMonth(); // starting at 0 => jan => 0 
    chartDataPoints[expenseMonth].value += expense.amount;

}

return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpensesChart