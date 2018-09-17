import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';



const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <button onClick={() => props.dispatch(startLogout())}>Logout</button>
    </header>
);

export default connect()(Header);