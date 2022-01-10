
import './App.css';
import Expense from './component/expense/Expense'
import NewExpense from './component/expense/NewExpense/NewExpense'
function App() {
  const expense=[{id:1,title:'Orange',price:'Rs 100',date:"11 March 2021"},{id:2,title:'Apple',price:'Rs 250',date:"11 March 2021"},{id:3,title:'Plums',price:'Rs 400',date:"11 March 2021"}]
  const updateExpenseData=(expenseData)=>{
    expense.push(expenseData);
    console.log(expense);
  }
  return (
    <>
    <NewExpense getExpenseData={updateExpenseData}></NewExpense>
    <Expense data={expense}/>
    </>
  );
}
export default App;
