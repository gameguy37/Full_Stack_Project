import { createNewUser, createSession, destroySession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

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

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const signup = formUser => dispatch =>
    createNewUser(formUser)
    .then( user => dispatch(receiveCurrentUser(user)))
    .fail( err => dispatch(receiveSessionErrors(err.responseJSON)));

export const login = formUser => dispatch =>
    createSession(formUser)
    .then( user => dispatch(receiveCurrentUser(user)))
    .fail( err => dispatch(receiveSessionErrors(err.responseJSON)));

export const logout = () => dispatch => destroySession().then( () => dispatch(logoutCurrentUser()));

