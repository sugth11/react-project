
import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props)=>{
const saveExpenseForm = (expenseData)=>{
    const newExpenseData = {...expenseData,id:Math.random().toString()}
    props.getExpenseData(newExpenseData);
}
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseForm={saveExpenseForm}></ExpenseForm>
    </div>
};
export default NewExpense;