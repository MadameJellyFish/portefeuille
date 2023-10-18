import React, { useState } from 'react';
import { Expense } from '../../Models/ExpenseModel';

export interface AddExpenseType {
    onCreateExpense : (data: Expense) => void;
};

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

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => void
    {
        
    }

    return (
        <div className="add-expense">
            <input id="text" name="text" value={newExpense.text} onChange={handleChange}  />
            <button onClick={handleAddTask}>Ajouter</button>    
        </div>
    );
}

export default AddExpense;