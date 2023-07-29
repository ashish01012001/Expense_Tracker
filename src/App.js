import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [];
function App() {
  const [expenses, setNewExpense] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setNewExpense((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div>
      <div>
        <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses info={expenses}></Expenses>
      </div>
    </div>
  );
}
export default App;
