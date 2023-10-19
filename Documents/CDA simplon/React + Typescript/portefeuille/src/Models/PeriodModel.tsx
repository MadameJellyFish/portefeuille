export interface Period 
{
    selectedOption: 'Sélectionner' | 'Journalier' | 'Mensuel' | 'Hebdomadaire';
};

export interface  TimePeriodSelectorType {
    onPeriodChange: (selectedValue: string) => void;
};