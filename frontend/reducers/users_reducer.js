import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendship_actions';
// import { RECEIVE_PAYMENTS, RECEIVE_PAYMENT, REMOVE_PAYMENT } from '../actions/payments_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL, RECEIVE_BILL_PAYLOAD } from '../actions/bills_actions';
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
        case DELETE_FRIENDSHIP:
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