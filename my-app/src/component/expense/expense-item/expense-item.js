import './expense-item.css'
import ExpenseDate from './expense-date/expense-date';
import ExpenseTitle from './expense-title/expense-title';
import ExpensePrice from './expense-price/expense-price';
import Cards from '../../../UI/cards'
function ExpenseItem(props){
    return(
        <Cards className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description">
            <ExpenseTitle title={props.title}/>
            <ExpensePrice price={props.price}/>
                
            </div>
        </Cards>
    )
}
export default ExpenseItem;