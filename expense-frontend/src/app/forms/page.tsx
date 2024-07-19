'use client'

import React, { ChangeEvent } from "react";
import { Template } from "../components/template";
import { useState } from "react";
import { Button } from "../components/button/button";
import { Expense } from "../resources/expense/expense.resource";
import { useExpenseService } from "../resources/expense/expense.service";


const FormPage = () => {

    const expenseService = useExpenseService();

    const [name, setName] = useState<string>("");
    const [value, setValue] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }

    const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const submitForm = async () => {
        const expense: Expense = new Expense(name, value, description);
        await expenseService.saveExpense(expense);
        setName("");
        setValue(0);
        setDescription("");

    }

    return (
        <Template>
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="font-bold text-lg">Create a New Expense</h1>
                <form className="flex flex-col justify-center gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={handleName} placeholder="Type the expense name" className="border border-yellow-500 rounded-lg px-2 py-1"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="value">Value:</label>
                        <input type="number" id="value" value={value} onChange={handleValue} placeholder="Type the expense value" className="border border-yellow-500 rounded-lg px-2 py-1"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" value={description} onChange={handleDescription} placeholder="Type the expense description" className="border border-yellow-500 rounded-lg px-2 py-1 h-20 w-full"/>
                    </div>
                </form>
                <Button text="Submit" style="bg-blue-500 hover:bg-blue-300" onClick={submitForm} />
            </div>
        </Template>
    )
}

export default FormPage;