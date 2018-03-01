import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Components
import Header from './components/Header';
import ExpenseDashBoardPage from './components/ExpenseDashBoardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import HelpPage from './components/HelpPage';
import NotFound from './components/NotFoundPage';

//Redux
const store = configureStore();

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



ReactDOM.render(jsx,document.getElementById('app'));
