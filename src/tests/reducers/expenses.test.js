import expensesReducer from '../../reducers/expenses';
// import moment from 'moment';

import expenses from '../fixtures/expenses';


test('Should set default state', ()=> {
   const state = expensesReducer(undefined,{type: "@@INIT"});
   expect(state).toEqual([]);
});

test('Should remove expense by id', ()=> {
   const action = {
       type: "REMOVE_EXPENSE",
       id: expenses[1].id
   };
   const state = expensesReducer(expenses,action);

   expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should NOT remove expense by id', ()=> {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    };
    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);
});

test('Should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 'test'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,{id:'test'}]);
});

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            id: 'changed'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        {
            id: 'changed',
            description: 'gum',
            note: '',
            amount: 195,
            createdAt: 0
        }
        ,expenses[1],expenses[2]]);
});

test('Should NOT edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            id: 'changed'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

