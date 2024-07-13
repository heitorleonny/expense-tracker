import React from "react"

interface ExpenseCardProps{
    name?: string;
    value?: number;
    date?: string;
    description?: string;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({name, value, date, description}: ExpenseCardProps) => {
    return(
        <div className="card relatice bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <div>
            <h4>{name}</h4>
            <span>R${value}</span>
            </div>
            <p>{description}</p>
            <span>{date}</span>

        </div>
    );
}