
import './expense.css';
import ExpenseItem from './expense-item/expense-item'
import Cards from '../../UI/cards';

function Expense(props){
    
    return(
       <Cards className="expenses">
           <h1 >Budget 2021</h1>
           <ExpenseItem date ={props.data[0].date} title={props.data[0].title} price={props.data[0].price}/>
           <ExpenseItem date ={props.data[1].date} title={props.data[1].title} price={props.data[1].price}/>
           <ExpenseItem date ={props.data[2].date} title={props.data[2].title} price={props.data[2].price}/>
        </Cards>
        
    )
}
export default Expense;