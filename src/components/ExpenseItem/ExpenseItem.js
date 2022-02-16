import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Wrappers/Card/Card";
import { useState } from "react";

const ExpenseItem = ({ date, name, amount }) => {
    const [_name, setName] = useState(name);

    const clickHandler = () => {
        setName("updated");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{_name}</h2>
                <div className="expense-item__price">{amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
