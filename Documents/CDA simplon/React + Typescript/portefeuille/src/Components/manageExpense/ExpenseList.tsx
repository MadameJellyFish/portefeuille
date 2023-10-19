import React, { useState} from 'react';
import { Expense } from '../../Models/ExpenseModel';
import AddExpense from './AddExpense';
import './StyleExpense.css';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState<Expense[]>([
        { id:1, amount: 9, description: 'Uber', date:new Date(2024,9,18) },
        { id:2, amount: 4, description: 'Boulangerie', date:new Date(2024,9,18) },
        { id:3, amount: 26, description: 'Restaurant', date:new Date(2024,9,18) },
        { id:4, amount: 38, description: 'Supermarché', date:new Date(2024,9,18) },
        { id:5, amount: 75, description: 'Carburant', date:new Date(2024,9,19) },
        { id:6, amount: 26, description: 'Restaurant midi', date:new Date(2024,9,19) },
        { id:7, amount: 12, description: 'Pharmacy', date:new Date(2024,9,19) },
        { id:8, amount: 8, description: 'Boulangerie', date:new Date(2024,9,20) },
        { id:9, amount: 37, description: 'Decathlon', date:new Date(2024,9,20) },
        { id:10, amount: 17, description: 'Cave', date:new Date(2024,9,20) },
        { id:11, amount: 8, description: 'Boulangerie', date:new Date(2024,9,22) },
        { id:12, amount: 36, description: 'Cinéma', date:new Date(2024,9,22) },
        { id:13, amount: 4, description: 'Frais de stationnement en centre-ville', date:new Date(2024,9,22) },
    ]);

    /**
     * 
     * @param data Cette méthode permettre d'ajouter une nouvelle expense dans la list d'expenses
     */
    const addExpense = (data: Expense): void => {
        setExpenses([...expenses, data]);
    }

    return (
        <div>
            <div className='Section'>
                <h2>Enregistrement des Dépenses</h2>
                <AddExpense onCreateExpense={addExpense}/>
            </div>
            <div className='Section'>
                <h2>Liste des Dépenses</h2>
                <div className='Container-Expense-List'>
                    <ul>
                        {
                            expenses && expenses.map((expense) => (
                                <li key={expense.id} className='Expense-List'>
                                    <>  
                                        <div className='Expense-List-Item d-flex'>
                                            <span>&#128176;</span>
                                            <div className='Expense-List'>
                                                <p>{expense.date.toLocaleDateString()}</p>
                                                <div className='Expense-List-Montant d-flex f-row'>
                                                    <p className='Expense-List-Description'>{expense.description}</p>
                                                    <div className='Expense-List-Line'></div>
                                                    <p><span className='Currency'>{expense.amount}<span>€</span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExpenseList;