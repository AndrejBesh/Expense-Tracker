import react, { useState } from 'react';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return (

        <Card className='expense-item'>

            <div className='expense-item__description' >
                <div>
                    <ExpenseDate date={props.date} />
                </div>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}$</div>
                <button>Change title</button>
            </div>

        </Card>
    )

}
export default ExpenseItem;