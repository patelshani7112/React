import React, { useState } from "react";
import ExpanseItem from "./ExpanseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expanses.css";

function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expenseContent = <p>No Expenses Found</p>;

  if (filterExpanses.length > 0) {
    expenseContent = filterExpanses.map((expense) => (
      <ExpanseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expenseContent}
      </Card>
    </div>
  );
}

export default Expanses;
