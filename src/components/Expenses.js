import ExpenseItem from "./ExpenseItem";
function Expenses(props)
{
    return(
    <div>
        {props.filteredExp.map( (indivExpense)=> 
        <ExpenseItem 
            key={indivExpense.id}
            title={indivExpense.title} 
            amount={indivExpense.amount} 
            date={indivExpense.date} 
        />
        )};
    </div>
    );
}
export default Expenses;