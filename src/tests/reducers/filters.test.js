import filtersReducer from '../../reducers/filters';
import moment from 'moment';


//Default values test
test('Should setup default filter values', () => {
   const state = filtersReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   });
});

//Sortby amount test
test('Should setup sortByAmount action type', () => {
   const state = filtersReducer({},{type: 'SORT_BY_AMOUNT'});
   expect(state.sortBy).toBe('amount');
});

//Sortby Date test
test('Shouls setup sortByDate action type', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
   const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

// SettextFilter test
test('Should setup setTextFilter action type.', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
   const state = filtersReducer(currentState,{type: 'SET_TEXT_FILTER',update:'e'});
   expect(state.text).toBe('e');
});

//Set_START_DATE
test('Should setup SET_START_DATE action type.', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState,{type: 'SET_START_DATE',startDate:moment(0).valueOf()});
    expect(state.startDate).toBe(moment(0).valueOf());
});

//SET_END_DATE
test('Should setup SET_END_DATE action type.', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState,{type: 'SET_END_DATE',endDate:moment(0).valueOf()});
    expect(state.endDate).toBe(moment(0).valueOf());
});