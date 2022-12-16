import TotalExpense from "../totalExpense/totalExpense"



const YearlyExpense = props => {
  let expenseTotal = props.expenses.map(element => element.amount ).reduce((a, b) => a + b, 0);

   return <TotalExpense total = {expenseTotal} />
}

export default YearlyExpense 