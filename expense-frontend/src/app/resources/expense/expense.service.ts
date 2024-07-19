import { Expense } from "./expense.resource";


class ExpenseService{
    baseUrl: string = 'http://localhost:8080/api/v1/expense'
    


    async findAllExpenses(){
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

    async saveExpense(expense: Expense){
        try{
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        }
        );

        window.alert("Sucess");
        
    
        
    } catch(error){
        window.alert("Error");
        return false;
    }
    
}
}


export const useExpenseService = () => new ExpenseService();