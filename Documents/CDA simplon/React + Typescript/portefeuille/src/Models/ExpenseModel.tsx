export interface Expense
{
    id: number;
    amount: number;
    description: string;
    date: Date;
};

export interface AddExpenseType
{
    onCreateExpense: (data: Expense) => void;
};