class ExpenseService{
    baseUrl: string = 'http://localhost:8080/api/v1/expense'

    async findAllExpenses (){
        const response = await fetch(this.baseUrl);
        return response.json();
    }
}


export const useExpenseService = () => new ExpenseService();