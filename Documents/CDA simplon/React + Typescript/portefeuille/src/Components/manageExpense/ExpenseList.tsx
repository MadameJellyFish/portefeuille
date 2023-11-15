import React, { useEffect, useState} from 'react';
import { Expense } from '../../Models/ExpenseModel';
import AddExpense from './AddExpense';
import './StyleExpense.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState<Expense[]>([
        { id:1, amount: 9, description: 'Uber', date:new Date(2024,8,18) },
        { id:2, amount: 4, description: 'Boulangerie', date:new Date(2024,8,18) },
        { id:3, amount: 26, description: 'Restaurant', date:new Date(2024,8,18) },
        { id:4, amount: 38, description: 'Supermarché', date:new Date(2024,8,18) },
        { id:5, amount: 75, description: 'Carburant', date:new Date(2024,8,19) },
        { id:6, amount: 26, description: 'Restaurant midi', date:new Date(2024,8,19) },
        { id:7, amount: 12, description: 'Pharmacy', date:new Date(2024,8,19) },
        { id:8, amount: 8, description: 'Boulangerie', date:new Date(2024,8,18) },
        { id:9, amount: 37, description: 'Decathlon', date:new Date(2024,8,18) },
        { id:10, amount: 17, description: 'Cave', date:new Date(2024,8,18) },
        { id:11, amount: 8, description: 'Boulangerie', date:new Date(2024,9,19) },
        { id:12, amount: 36, description: 'Cinéma', date:new Date(2024,9,19) },
        { id:13, amount: 4, description: 'Frais de stationnement en centre-ville', date:new Date(2024,9,19) },
    ]);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [filteredListExpenses, setFilteredListExpenses] = useState<Expense[]>([]);

    /**
     * 
     * @param data Cette méthode permettre d'ajouter une nouvelle expense dans la list d'expenses
     */
    const addExpense = (data: Expense): void => {
        setExpenses([...expenses, data]);
    };

    /**
     * 
     * @param idExpense Cette méthode permettre de supprimer une expense de la list d'expenses
     */
    const handleDelete = (idExpense : number): void => 
    {
        setExpenses(expenses.filter(expense => expense.id !== idExpense));
    };

    const handleDateFilter = (date: Date) => {
        setSelectedDate(date); 
        filterExpenses();
    };

    //quand selectedDate change
    useEffect(() => {
        console.log("Selected Date:", selectedDate);
        
       //affiche les filtres de depenses par raport à la date selectioné
        const filteredExpenses = getFilteredExpenses();

        //actualise la list des expenses filtrés
        setFilteredListExpenses(filteredExpenses);
        console.log("Filtered Expenses:", filteredExpenses);
    }, [selectedDate, expenses]);

    /**
     * 
     * @returns cet function affiche les filtres de depenses par raport à la date selectioné
     */
    const getFilteredExpenses = () => {
        if (!selectedDate) {
            return expenses;
        }

        //Si une date est selectioné elle devient une chaine de charactere
        const formattedSelectedDate = selectedDate.toDateString();
        console.log("selectedDate:", selectedDate);
        console.log("expenses:", expenses);
        console.log("filteredExpenses:", filteredExpenses); 

        //crée une nouvelle array avec les elements qui pasent la condición especificada
        return expenses.filter((expense) => {
            const formattedExpenseDate = expense.date.toDateString();
            //Pour pouvoir comparer les dates avec une même format
            return formattedExpenseDate === formattedSelectedDate;
        });
    };

    //Retourn les dates filtres
    const filteredExpenses = expenses.filter((expense) => {
        return selectedDate && expense.date.toDateString() === selectedDate.toDateString();
    });

    //apelle la function getFilteredExpenses qui filtre les dates et les stock
    const filterExpenses = () => {
        const filteredExpenses = getFilteredExpenses();
        setFilteredListExpenses(filteredExpenses);
    };

    const totalAmount = expenses.reduce((accumulateur, expense) => accumulateur + expense.amount, 0);
    console.log('selectedDate:', selectedDate);
    console.log('filteredListExpenses:', filteredListExpenses);

    return (
        <div>
            <div className='Section'>
                <h2>Enregistrement des Dépenses</h2>
                <AddExpense onCreateExpense={addExpense}/>
            </div>
            <div className='Section'>
                <h2>Résumé des Dépenses</h2>
                <div className='Period form-group d-flex f-row'>
                    <label htmlFor='datePicker' className='Period-label'>Sélectionner une période</label>
                    <div className="date-picker-container Picker">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateFilter}
                            dateFormat='dd/MM/yyyy'
                            id='datePicker'
                            placeholderText="19/10/2023"
                        />
                    </div>
                </div>
                <div className='Period d-flex justify-content-end'>
                    <button className='Btn btn' onClick={() => filterExpenses()}>Afficher</button>
                </div>          
            </div>
            <div className='Section'>
                <h2>Liste des Dépenses</h2>
                <div className='Container-Expense-List mb-5'>   
                    {selectedDate ? (
                        <ul>
                            {
                                filteredExpenses.map((expense) => (
                                    <li key={expense.id} className='Expense-List'>
                                        <div className='Expense-List-Item d-flex'>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
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
                                                        <button className='btn Icon-Size' title='Supprimer' onClick={() => handleDelete(expense.id) }>
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    </li>
                                ))
                            }
                        </ul>
                     )}
                     {!selectedDate && (
                        <div className='d-flex f-row Total my-4'>
                            <p className='me-5'>Total</p>
                            <span>{totalAmount}€</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExpenseList;