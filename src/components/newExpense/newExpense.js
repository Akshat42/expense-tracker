import ExpenseForm from "../ExpenseForm/expenseForm";
import "./newExpense.css";

const newExpense = ({ newExpenseData }) => {
    const newExpenseDataHandler = (userInput) => {
        const newExpense = {
            id: Math.random().toString(),
            ...userInput
        };
        newExpenseData(newExpense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm
                onSubmitExpenseForm={newExpenseDataHandler}
            ></ExpenseForm>
        </div>
    );
};

export default newExpense;
