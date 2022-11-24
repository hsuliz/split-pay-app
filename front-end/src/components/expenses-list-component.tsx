import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {Expense} from "../types/expense-type";
import ClientService from "../services/client-service";
import {Navigate} from "react-router-dom";

const ExpensesList: React.FC = () => {

    const [expenses, setExpenses] = useState<Array<Expense>>([])

    const isLoggedIt: boolean = ClientService.isLogged();

    useEffect(() => {
        ClientService.getClientExpenses()
            .then((response) => {
                setExpenses(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }, []);

    return (
        {isLoggedIt} ?
            <Navigate to={"/"}/> :
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
