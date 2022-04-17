import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import react, { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const changeFilterHandler = selectedYear => {
        setFilteredYear(selectedYear)

    }
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangedSelect={changeFilterHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </li>
    )
}
export default Expenses;
