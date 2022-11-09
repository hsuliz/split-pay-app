import React, {useEffect, useState} from "react";
import {Expense} from "../services/Types";
import ExpenseService from "../services/ExpenseService";

const ExpenseList: React.FC = () => {

    const [expense, setExpense] = useState<Array<Expense>>([])

    useEffect(() => {
        getExpenses()
    }, [])

    const getExpenses = () => {
        ExpenseService.getExpenses()
            .then((response: any) => {
                setExpense(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <h3>Expenses</h3>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expense.map(expense =>
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.price}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>);
};


export default ExpenseList;