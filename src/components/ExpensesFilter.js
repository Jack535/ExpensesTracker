import React,{ useState } from 'react';
import Expenses from './Expenses';
import ExpensesChart from './ExpensesChart';
import './ExpensesFilter.css';

function ExpensesFilter(props)
{
    const [selectedYear,setSelectedYear]=useState('2021');
    function selectYearHandler(event)
    {
        setSelectedYear(event.target.value);
    }

    const filteredExpenses=props.exp.filter((indivExpense)=>{
        return indivExpense.date.getFullYear().toString()===selectedYear
    });

    return(
        <div>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label for="year">Filter By Year</label>
                    <select id="year" value={selectedYear} onChange={selectYearHandler}>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
            <ExpensesChart expenses={filteredExpenses} />
            <Expenses filteredExp={filteredExpenses} />
        </div>
    );
}

export default ExpensesFilter;