import React,{useState} from 'react';
import './expense.css';
import ExpenseItem from './expense-item/expense-item'
import Cards from '../../UI/cards';
import ExpensesFilter from './expenseFilter/expenseFilter';
function Expense(props){
    const [changedYear, setChangedYear] = useState('2020');
    const yearChangeHandler =(selectedYear)=>{ 
        console.log(selectedYear);  
        setChangedYear(selectedYear);
    }
    return(
        <>
       <Cards className="expenses">
       <ExpensesFilter selected={changedYear} onChangeYear={yearChangeHandler}></ExpensesFilter>
           <h1 >Budget {changedYear}</h1>
           <ExpenseItem date ={props.data[0].date} title={props.data[0].title} price={props.data[0].price}/>
           <ExpenseItem date ={props.data[1].date} title={props.data[1].title} price={props.data[1].price}/>
           <ExpenseItem date ={props.data[2].date} title={props.data[2].title} price={props.data[2].price}/>
        </Cards>
        </>
        
    )
}
export default Expense;