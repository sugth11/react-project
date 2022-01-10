import {useState} from 'react';
import './expense-item.css'
import ExpenseDate from './expense-date/expense-date';
import ExpenseTitle from './expense-title/expense-title';
import ExpensePrice from './expense-price/expense-price';
import Cards from '../../../UI/cards'
function ExpenseItem(props){
    
    const [title,setTitle]=useState(props.title);
    const [price,setPrice]=useState(props.price);
        let date = props.date;
    const clickable = ()=>{
        setPrice("Rs. 500");
        setTitle("updated!");
        alert(props.price);
    }
    return(
        <>
        
        <Cards className="expense-item">
            <ExpenseDate date ={date}/>
            <div className="expense-item__description">
            <ExpenseTitle title={title}/>
            <ExpensePrice price={price}/>
                
            </div>
            <button onClick={clickable} >Click me</button>
        </Cards>
        </>
    )
}
export default ExpenseItem;