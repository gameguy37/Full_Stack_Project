import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_BILL, RECEIVE_BILL_PAYLOAD } from '../actions/bills_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
        case RECEIVE_BILL_PAYLOAD:
        case REMOVE_BILL:
            return merge({}, state, action.users);
        case RECEIVE_USER: 
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.user.id]: action.user});
        case RECEIVE_FRIENDSHIP:
        case REMOVE_FRIENDSHIP:
            let newState = merge({}, state);
            delete newState[action.user.id];
            newState[action.user.id] = action.user;
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}