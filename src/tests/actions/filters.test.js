import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';
//setTextFilter test with default values
test('Should set up setTextFilter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        update: ''
    })
});


//setTextFilter test with given values
test('Should set up setTextFilter action object with given values', () => {
    const action = setTextFilter('date');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        update: 'date'
    })
});

//sortByAmount test
test('Should set up sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

//sortByDate test
test('Should set up sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

//setStartDate test
test('Should set up setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

//setEndDate test
test('Should set up setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});