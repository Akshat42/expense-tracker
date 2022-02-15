import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, name, amount }) => {
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    const day = date.getDate();
    return (
        <div className="expense-item">
            <ExpenseDate month={month} year={year} day={day}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
