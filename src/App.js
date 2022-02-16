import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/newExpense";

const DUMMY_DATA = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28)
    }
];

function App() {
    console.log("App re-render");
    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const newExpenseDataHandler = (newExpenseData) => {
        setExpenses([newExpenseData, ...expenses]);
    };

    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "Let's get Started"),
    //     React.createElement(Expenses, { expenses: expenses })
    // );

    return (
        <div>
            <NewExpense newExpenseData={newExpenseDataHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
