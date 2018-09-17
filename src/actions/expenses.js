import uuid from 'uuid';
import database from '../firebase/firebase';

//ADDEXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
export const startAddExpense = (expense) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expense;
        const newExpense = {description, note, amount, createdAt};
        database.ref(`users/${uid}/expenses`).push(newExpense).then( (ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...newExpense
            }))
        });
    };
};


//REMOVE EXPENSE action generator
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
      database.ref(`users/${uid}/expenses/${id}`).remove().then( () => {
          dispatch(removeExpense({id}));
      }).catch( () => {
          console.log("iets ging fout (REMOVE EXPENSE)");
      });
    };
};

//EDIT EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then( () => {
            dispatch(editExpense(id, updates));
        }).catch( () => {
            console.log("start edit expense fout");
        });
    };
};

export const setExpenses = (expenses) => ({
   type: 'SET_EXPENSES',
   expenses
});


export const startSetExpenses = () => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/expenses`).once('value').then( (snapshots) => {
          const expenses = [];

          snapshots.forEach( (childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
          dispatch(setExpenses(expenses));
    });

  };
};