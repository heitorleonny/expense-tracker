export class Expense{
    name?: string;
    value?: number;
    description?: string;
    date?: string;

   constructor(name?: string, value?: number, description?: string){
    this.name = name;
    this.value = value;
    this.description = description;
   }
}