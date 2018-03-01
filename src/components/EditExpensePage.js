import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit {props.expense.description && props.expense.description} here!</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense) => {
                    props.dispatch(editExpense(props.match.params.id,expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/');
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