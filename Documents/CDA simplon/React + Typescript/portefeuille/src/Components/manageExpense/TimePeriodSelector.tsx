import React, { useState } from 'react';
import { Period, TimePeriodSelectorType } from '../../Models/PeriodModel';
import './StyleExpense.css';

const TimePeriodSelector: React.FC<TimePeriodSelectorType> = ({ onPeriodChange }) => {
    const initialValue: Period = {
        selectedOption: 'Sélectionner',
    }

    const [selectedDate, setSelectedDate] = useState<Period>(initialValue);

    const handlePeriodChange = (e : React.ChangeEvent<HTMLSelectElement>) : void =>
    {
        const { value } = e.target;
        if (value === 'Sélectionner' || value === 'Journalier' || value === 'Mensuel' || value === 'Hebdomadaire') {
            setSelectedDate({ selectedOption: value });
        }
    };

    const [showExpenses, setShowExpenses] = useState(false);

    const toggleExpenses = () => {
        setShowExpenses(!showExpenses);
    }

    return (
        <div>
            <div className='Period form-group d-flex f-row'>
                <label htmlFor='selectedOption' className='Period-label'>Sélectionner une Période</label>
                <select className='input-group-text' id='selectedOption' name='selectedOption' value={selectedDate.selectedOption} onChange={handlePeriodChange}>
                    <option value='Sélectionner'>Sélectionner</option>
                    <option value='Journalier'>Journalier</option>
                    <option value='Mensuel'>Mensuel</option>
                    <option value='Hebdomadaire'>Hebdomadaire</option>
                </select>
            </div>
            <div className='Period d-flex justify-content-end'>
                <button className='Btn btn' onClick={toggleExpenses}>Afficher</button>
            </div>
        </div>
    );
};

export default TimePeriodSelector;