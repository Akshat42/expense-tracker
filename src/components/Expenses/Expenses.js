import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
    return (
        <div className="expenses">
            <ExpenseItem
                date={expenses[0].date}
                amount={expenses[0].amount}
                name={expenses[0].title}
            ></ExpenseItem>
            <ExpenseItem
                date={expenses[1].date}
                amount={expenses[1].amount}
                name={expenses[1].title}
            ></ExpenseItem>
            <ExpenseItem
                date={expenses[2].date}
                amount={expenses[2].amount}
                name={expenses[2].title}
            ></ExpenseItem>
            <ExpenseItem
                date={expenses[3].date}
                amount={expenses[3].amount}
                name={expenses[3].title}
            ></ExpenseItem>
        </div>
    );
};

export default Expenses;
