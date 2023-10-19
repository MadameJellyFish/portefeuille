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

    return (
        <div>
            <div className='Section'>
                <h2>Résumé des Dépenses</h2>
                <TimePeriodSelector onPeriodChange={handlePeriodChange} />
            </div>
            <ExpenseList />
        </div>
    );
};

export default ExpenseSummary;