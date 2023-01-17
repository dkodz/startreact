import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "../NewExpense/ExpenseForm";
import { useState } from "react";
function Expenses(props) {
  const [enteredYear, setYear] = useState("");
  const ExpenseFilterHandler = (expenseFilterYear) => {
    setYear(expenseFilterYear);
  };
  console.log(enteredYear);
  return (
    <div className="expenses">
      <Card>
        <ExpenseFilter
          selected={enteredYear}
          addExpenseFilterHandler={ExpenseFilterHandler}
        />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
      </Card>
    </div>
  );
}
export default Expenses;
