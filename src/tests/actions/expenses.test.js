import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('Should setup removeExpense action object', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })

});


test('Should setup editExpense action object', () => {
   const action = editExpense(1,{
        note: 'new Value'
   });
   expect(action).toEqual({
       type: 'EDIT_EXPENSE',
       id: 1,
       updates: {
           note: 'new Value'
       }
   });
});


test('Should setup addExpense action object with provided value', () => {
    const expenseData =   {
        description: 'Rent',
        note: 'Last Rent',
        amount: 109500,
        createdAt: 1000
    };
   const action = addExpense(expenseData);
   expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
           ...expenseData,
           id: expect.any(String)
       }
   });
});

test('Should setup addExpense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});