import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Wrappers/Card/Card";

const ExpenseItem = ({ date, name, amount }) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{"$" + amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
