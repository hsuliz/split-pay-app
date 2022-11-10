import React, {ChangeEvent, useState} from "react";
import {Expense} from "../services/Types";
import expenseService from "../services/ExpenseService";

const AddExpense: React.FC = () => {

    const initialExpenseState: Expense = {
        name: "", price: "", clientId: ""
    }

    const [expense, setExpense] = useState<Expense>(initialExpenseState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setExpense({...expense, [name]: value});
    };

    const saveExpense = () => {

        const data = {
            name: expense.name, price: expense.price, clientId: expense.clientId
        }

        expenseService.postExpense(data)
            .then(() => {
                console.log(data)
            })
            .then((response: any) => {
                setExpense({
                    name: response.data.name,
                    price: response.data.price.parseFloat,
                    clientId: response.data.clientId.parseInt
                });
                setSubmitted(true);
                console.log("success");
            })
            .catch((e: Error) => {
                console.log(e);
            })

    }

    const newTutorial = () => {
        setExpense(initialExpenseState);
        setSubmitted(false);
    };

    const getDisabled = () => expense.price.length <= 0 || parseFloat(expense.price) <= 0;

    return (
        <div className="submit-form was-validated">
            {submitted ? (<div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newTutorial}>
                    Add
                </button>
            </div>) : (<div>

                <div className="form-group">
                    <label htmlFor="client-id">Client id</label>
                    <input
                        id="client-id"
                        type="text"
                        required
                        className="form-control"
                        value={expense.clientId}
                        onChange={handleInputChange}
                        name="clientId"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="expense">Expense</label>
                    <input
                        id="expense"
                        type="text"
                        required
                        className="form-control"
                        value={expense.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        required
                        className="form-control"
                        value={expense.price}
                        onChange={handleInputChange}
                        name="price"
                    />
                </div>

                <button onClick={saveExpense}
                        disabled={
                            getDisabled()
                        }
                        className="btn btn-success">
                    Submit
                </button>
            </div>)}
        </div>);

}

export default AddExpense