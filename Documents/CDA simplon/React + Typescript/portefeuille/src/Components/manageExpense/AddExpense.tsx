import React, { useState } from 'react';
import { Expense, AddExpenseType } from '../../Models/ExpenseModel';

const AddExpense: React.FC<AddExpenseType> = ({ onCreateExpense }) => {
    
    const initialValue: Expense = {
        id: Date.now(),
        amount: 0,
        description: '',
        date: new Date(),
    }
    
    /**
     * Atribut contenant les infos d'une nouvelle expense
     */
    const [newExpense, setNewExpense] = useState<Expense>(initialValue);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void =>  
    {
        const { name, value } = e.target;
        setNewExpense((prevExpense) => ({
            ...prevExpense, 
            [name]:name === 'amount' ? parseFloat(value) : value,
        }));
    }

    const handleAddExpense = (): void => {
        onCreateExpense(newExpense);
        setNewExpense(initialValue);
    }

    return (
        <div className='Expenses'>
            <div className='Expenses-Add form-group d-flex f-row'>
                <label htmlFor='amount'>Amount</label>
                <div className='d-flex f-row'>
                    <input className='Expenses-Input-current Input-space input-group-text' id='amount' name='amount' value={newExpense.amount} onChange={handleChange}  />
                    <span className="input-group-text Currency">€</span>
                </div>
            </div>
            <div className='Expenses-Add d-flex f-row'>
                <label htmlFor="description">Description</label>
                <input className='Expenses-Input Input-space input-group-text' id='description' name='description' value={newExpense.description} onChange={handleChange}  />
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={handleAddExpense} className='Btn btn'>Ajouter</button>    
            </div>
        </div>
    );
}

export default AddExpense;