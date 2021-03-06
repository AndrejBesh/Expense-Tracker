import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import Card from "./components/UI/Card";
import react, { useState } from "react";
const SampleExpenses = [
  {
    id: 'e1',
    title: 'Toilet Papper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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

const App = () => {
  const [expenses, setExpenses] = useState(SampleExpenses)

  const expenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (

    <Card>
      <NewExpense onAddExpense={expenseHandler} />
      <div>
        <Expenses item={expenses} />
      </div>
    </Card >

  );
}

export default App;
