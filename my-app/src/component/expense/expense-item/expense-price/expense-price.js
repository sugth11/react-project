import './expense-price.css';
function ExpensePrice(props){
    return(
        <div className="expense-item__price">{props.price}</div>
    )
}
export default ExpensePrice;