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

    let expenseContent = (
        <p className="expenses__fallback">No Expense Found!</p>
    );

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    name={expense.title}
                ></ExpenseItem>
            );
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectYear={handleSelectedYear}></ExpensesFilter>
            {expenseContent}
        </Card>
    );
};

export default Expenses;
