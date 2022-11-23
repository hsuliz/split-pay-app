import React, {useEffect, useState} from "react";
import {Expense} from "../types/ExpenseType";
import ClientService from "../services/ClientService";
import {Container, Table} from "react-bootstrap";

const ExpensesListComponent: React.FC = () => {

    const [expenses, setExpenses] = useState<Array<Expense>>([])


    useEffect(() => {
        fetchExpenses()
    }, [])

    const fetchExpenses = () => {
        ClientService.expenses(localStorage.getItem("token"))
            .then((r: any) => {
                setExpenses(r.data)
            })
            .catch((e: Error) => {
                console.error(e)
            })
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

export default ExpensesListComponent;