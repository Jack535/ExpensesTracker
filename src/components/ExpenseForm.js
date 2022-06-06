import React,{ useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props)
{
    const [userInput,setUserInput]=useState({
        newTitle: '',
        newAmount: '',
        newDate: ''
    });

    //const [cancelForm,setCancelForm]=useState('0');

    function titleChangeHandler(event)
    {
        /*setUserInput({
            ...userInput,
            newTitle: event.target.value,
        });*/
        setUserInput((prevState)=>{
            return {
                ...prevState,
                newTitle:event.target.value
            };
        });
    }

    function amountChangeHandler(event)
    {
        /*setUserInput({
            ...userInput,
            newAmount: event.target.value,
        });*/
        setUserInput((prevState)=>{
            return {
                ...prevState,
                newAmount:event.target.value
            };
        });
    }

    function dateChangeHandler(event)
    {
        /*setUserInput({
            ...userInput,
            newDate: event.target.value,
        });*/
        setUserInput((prevState)=>{
            return {
                ...prevState,
                newDate: event.target.value
            }
        });
    }

    function submitHandler(event)
    {
        event.preventDefault();
        const expenseData={
            title: userInput.newTitle,
            amount: userInput.newAmount,
            date: new Date(userInput.newDate)
        };
        props.onSaveExpense(expenseData);
        setUserInput({
            newTitle:'',
            newAmount:'',
            newDate:''
        });
    }

    function expenseFormCancelHandler()
    {
        props.onFormCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label for="title">Title</label>
                    <input type="text" id="title" value={userInput.newTitle} onChange={titleChangeHandler}/><br />
                </div>
                <div className='new-expense__control'>
                    <label for="amt">Amount</label>
                    <input type="number" id="amt" value={userInput.newAmount} onChange={amountChangeHandler}/><br />
                </div>
                <div className='new-expense__control'>
                    <label for="date">Date</label>
                    <input type="date" id="date" value={userInput.newDate} onChange={dateChangeHandler}/><br />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={expenseFormCancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;