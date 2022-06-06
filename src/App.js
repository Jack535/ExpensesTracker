import React,{ useState } from 'react';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpense from "./components/NewExpense";
import './components/NewExpense.css';

const INIT_EXPENSES= [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() 
{ 
  const [expenses, setExpenses]= useState(INIT_EXPENSES);
  const [displayForm,setDisplayForm]=useState('0');
  function addExpenseHandler(expitem)
  {
    setExpenses((prevState)=>[
      ...prevState,
      expitem
    ]);
  }
  function displayFormHandler()
  {
    setDisplayForm('1');
  }
  function cancelFormHandler()
  {
	  setDisplayForm('0');
  }

  if(displayForm==='0')
  {
      return(
        <div>
            <div className='new-expense'>
              <button onClick={displayFormHandler}>Add New Expense</button>
            </div>
			<ExpensesFilter exp={expenses} />
        </div>
      );
  }
  else
  {
      return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} onPressCancel={cancelFormHandler} />
          <ExpensesFilter exp={expenses} />
        </div>
      );
  }
}

export default App;
