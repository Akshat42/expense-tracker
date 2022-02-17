import React from "react";

import "./expenseFilter.css";

const ExpensesFilter = ({ onSelectYear }) => {
    const selectYearHandler = (event) => {
        onSelectYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={selectYearHandler}>
                    <option value=""></option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
