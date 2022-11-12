import React, {useEffect, useState} from "react";
import {Expense} from "../services/Types";
import ExpenseService from "../services/ExpenseService";
import {Container, Table} from "react-bootstrap";

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
        <Container>
            <h2 className="text-center">Expense list</h2>
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Price</th>
                        <th>User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expense.map(expense =>
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.price}</td>
                            <td>{expense.client.id}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )
};


export default ExpenseList;