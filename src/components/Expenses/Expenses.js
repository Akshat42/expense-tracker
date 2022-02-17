import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Wrappers/Card/Card";
import ExpensesFilter from "../expenseFilter/expenseFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("");

    const handleSelectedYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter((expense) => {
        if (filteredYear)
            return expense.date.getFullYear() === Number(filteredYear);
        else return expenses;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectYear={handleSelectedYear}></ExpensesFilter>
            {filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                        name={expense.title}
                    ></ExpenseItem>
                );
            })}
        </Card>
    );
};

export default Expenses;
