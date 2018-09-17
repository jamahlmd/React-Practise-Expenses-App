import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit {props.expense.description && props.expense.description} here!</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense) => {
                    props.dispatch(startEditExpense(props.match.params.id,expense));
                    props.history.push('/dashboard');
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/dashboard');
            }}>Remove</button>
        </div>
    )
};

const mapStatetoProps = (state,props) =>{
    return {
        expense: state.expenses.find(({id})=> id === props.match.params.id)
    };
};

export default connect(mapStatetoProps)(EditExpensePage);