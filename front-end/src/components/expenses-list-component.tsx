import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {Expense} from "../types/expense-type";
import ClientService from "../services/client-service";
import AuthService from "../services/auth-service";

const ExpensesList: React.FC = () => {

    const [expenses, setExpenses] = useState<Array<Expense>>([]);

    const [isError, setIsError] = useState<boolean>(false);


    useEffect(() => {
        ClientService.getClientExpenses()
            .then((response) => {
                setExpenses(response.data);
            })
            .catch(() => {
                AuthService.deleteCurrentClientToken()
                setIsError(true)
            })
    }, []);

    if (isError) {
        window.location.reload();
    }

    return (
        <Container>
            <h1 className="text-center">Expense list</h1>
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
    );

};

export default ExpensesList;
