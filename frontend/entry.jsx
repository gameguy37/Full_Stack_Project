import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    //FOR TESTING ONLY
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //BE SURE TO REMOVE

});