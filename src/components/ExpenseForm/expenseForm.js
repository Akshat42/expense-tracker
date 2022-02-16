import { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = ({ onSubmitExpenseForm }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const dateHandler = (event) => {
        setDate(event.target.value);
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    };

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const expenseFormHandler = (event) => {
        event.preventDefault();
        const userInput = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        setTitle("");
        setDate("");
        setAmount("");
        onSubmitExpenseForm(userInput);
    };

    return (
        <form onSubmit={expenseFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title">Title</label>
                    <input
                        required
                        id="title"
                        type="text"
                        onChange={titleHandler}
                        value={title}
                    ></input>
                </div>

                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input
                        required
                        id="amount"
                        type="number"
                        onChange={amountHandler}
                        value={amount}
                    ></input>
                </div>

                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input
                        required
                        id="date"
                        type="date"
                        onChange={dateHandler}
                        value={date}
                    ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;