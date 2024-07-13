'use client'

import { useState } from "react";
import { Template } from "./components/template";
import { useExpenseService } from "./resources/task/expense.service"; 
import { Expense } from "./resources/task/expense.resource";
import { ExpenseCard } from "./components/expense/expenseCard";
import { Span } from "next/dist/trace";
import { Button } from "./components/button/button";


export default function Home() {

  const [expense, setExpense] = useState<[]>([]);
  const expenseService = useExpenseService();

  async function findAllExpenses(){
    const response = await expenseService.findAllExpenses();
    console.table(response);
    setExpense(response);

    if(!response){
      console.log('nada');
    }

  }

  function renderExpenseCard(expense: Expense){
    return (
      <ExpenseCard name={expense.name} value={expense.value} date={expense.date} description={expense.description} />
    );
  }

  function renderExpenseCards(){
    if (expense.length > 0){
    return expense.map(renderExpenseCard);
  }
  return (<div className="flex justify-center">
    <p>Nenhum item a ser mostrado</p>
  </div>)
  }

  return (
    <Template>
      <section className="flex flex-col justify-center mx-12 my-5 gap-5">
        <div className="flex justify-center">
        <Button text="Clique aqui para ver a lista de compras"  style="bg-blue-500 hover:bg-blue-300" onClick={findAllExpenses}/>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {renderExpenseCards()}
      </div>
      </section>
      
    </Template>
  );
}
