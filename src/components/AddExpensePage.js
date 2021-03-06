import React from 'react';
import ExpenseForm from './ExpenseForm';
import{connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddDashBoardPage = (props) => (
    <div>
        <h1>Add expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/dashboard');
            }}
        />
    </div>

);


export default connect()(AddDashBoardPage);