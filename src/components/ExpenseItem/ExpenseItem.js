import "./ExpenseItem.css";

const ExpenseItem = ({ date, name, amount }) => {
    return (
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
