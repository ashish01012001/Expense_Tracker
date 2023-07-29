import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expense(props) {
  const [notSelected, setNotSelected] = useState("2020 ,2021, 2022 & 2023");
  const [filteredYear, setFilterYear] = useState("2019");
  const receiveValue = (receiveData) => {
    console.log(receiveData);
    setFilterYear(receiveData);
    if (receiveData === "2019") setNotSelected("2020 ,2021, 2022 & 2023");
    else if (receiveData === "2020") setNotSelected("2019 ,2021, 2022 & 2023");
    else if (receiveData === "2021") setNotSelected("2019 ,2020, 2022 & 2023");
    else if (receiveData === "2022") setNotSelected("2019 ,2020, 2021 & 2023");
    else setNotSelected("2019 ,2020, 2021 & 2022");
  };
  const filteredExpenses = props.info.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          sendData={receiveValue}
          currentyear={filteredYear}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <p className="colorChange">Data for years {notSelected} is hidden</p>
        {filteredExpenses.length === 0 ? (
          <p className="colorChange">No item found !</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            ></ExpenseItem>
          ))
        )}
      </Card>
    </div>
  );
}
export default Expense;
