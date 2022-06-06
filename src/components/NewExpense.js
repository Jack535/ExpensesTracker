import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props)
{
    function saveExpenseHandler(expense)
    {
        const expensesData={
            ...expense,
            id: Math.ceil(10*Math.random())
        }
        props.onAddExpense(expensesData);
    }

    function pressCancelHandler()
    {
        props.onPressCancel();
    }
    
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler} onFormCancel={pressCancelHandler} />
        </div>
    );
    
}

export default NewExpense;