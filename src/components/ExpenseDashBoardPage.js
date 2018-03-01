import React from 'react';

//components
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashBoardPage;