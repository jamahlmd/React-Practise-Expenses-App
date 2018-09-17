import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Components
import ExpenseDashBoardPage from './components/ExpenseDashBoardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import NotFound from './components/NotFoundPage';
import LoginScreen from './components/LoginScreen';

//Firebase
import { firebase } from './firebase/firebase';

//PriveAuthRoute
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

//Actions
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';


//Redux
const store = configureStore();


const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginScreen} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
      ReactDOM.render(jsx,document.getElementById('app'));
      hasRendered = true;
  }
};


// ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));


firebase.auth().onAuthStateChanged( (user) => {
   if (user){
       store.dispatch(login(user.uid));
       store.dispatch(startSetExpenses()).then( ()=> {
           renderApp();
           if(history.location.pathname === '/'){
               history.push('/dashboard');
           }
       });
   } else {
       store.dispatch(logout());
       renderApp();
       history.push('/');
   }
});

