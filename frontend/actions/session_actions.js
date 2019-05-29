import { createNewUser, createNewSession, destroySession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const signup = formUser => dispatch => createNewUser(formUser).then( user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => createNewSession(formUser).then( user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => destroySession().then( () => dispatch(logoutCurrentUser()));

