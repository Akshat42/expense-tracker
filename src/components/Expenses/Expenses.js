import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Wrappers/Card/Card";
import ExpensesFilter from "../expenseFilter/expenseFilter";

const Expenses = ({ expenses }) => {
    //console.log("Expenses rerender " + expenses);
    const handleSelectedYear = (selectedYear) => {
        console.log(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter onSelectYear={handleSelectedYear}></ExpensesFilter>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
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
