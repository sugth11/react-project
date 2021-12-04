
import './App.css';
import Expense from './component/expense/Expense'

function App() {
  const expense=[{title:'Orange',price:'Rs 100',date:"11 March 2021"},{title:'Apple',price:'Rs 250',date:"11 March 2021"},{title:'Plums',price:'Rs 400',date:"11 March 2021"}]
  return (
    <Expense data={expense}/>
  );
}
export default App;
