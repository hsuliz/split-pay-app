import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {Expense} from "../types/expense-type";
import ClientService from "../services/client-service";

const ExpensesList: React.FC = () => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const [expenses, setExpenses] = useState<Array<Expense>>([])

    useEffect(() => {
        ClientService.getClientExpenses()
            .then((response) => {
                setExpenses(response.data);
                setAuthenticated(true)
            })
    }, []);

    if (!authenticated) {
        return (
            <h1 className="text-center"> No auth</h1>
        )
    }

    return (
        <Container>
            <h2 className="text-center">Expense list</h2>
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expenses.map(expense =>
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.price}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )

}

export default ExpensesList;
