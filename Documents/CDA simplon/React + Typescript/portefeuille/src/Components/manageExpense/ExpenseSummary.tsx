import React, { useState } from 'react';
import TimePeriodSelector from './TimePeriodSelector';
import AddExpense from './AddExpense';
import { Expense } from '../../Models/ExpenseModel';
import ExpenseList from './ExpenseList';

const ExpenseSummary = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('');

    const handlePeriodChange = (selectedValue: string) => {
        setSelectedPeriod(selectedValue);
    }

    /**
     * Attribut contenant la list d'expenses
     */
    const [expenses, setExpenses] = useState<Expense[]>([]);

    /**
     * 
     * @param data Cette méthode permettre d'ajouter une nouvelle expense dans la list d'expenses
     */
    const addExpense = (data: Expense): void => {
        setExpenses([...expenses, data]);
    }
    return (
        <div>
            <h2>Enregistrement des Dépenses</h2>
            <AddExpense onCreateExpense={addExpense}/>
             <h2>Résumé des Dépenses</h2>
            <TimePeriodSelector onPeriodChange={handlePeriodChange} />
            <ExpenseList />
        </div>
    );
};

export default ExpenseSummary;