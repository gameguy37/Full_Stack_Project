import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { createFriendship } from './util/friendships';

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {[id]: currentUser}
            },
            session: { id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    //FOR TESTING ONLY
    // window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    // window.logout = logout;
    // window.createFriendship = createFriendship;
    //BE SURE TO REMOVE

});