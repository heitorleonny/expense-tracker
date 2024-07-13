class TaskService{
    baseUrl: string = 'http://localhost:8080/api/v1/expense'

    async findAllTasks (){
        const response = await fetch(this.baseUrl);
        return response.json();
    }
}


export const useTaskService = () => new TaskService();