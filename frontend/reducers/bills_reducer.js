import { RECEIVE_BILLS, RECEIVE_BILL, RECEIVE_BILL_PAYLOAD, REMOVE_BILL } from '../actions/bills_actions';
// import { RECEIVE_PAYMENTS, RECEIVE_PAYMENT, REMOVE_PAYMENT } from '../actions/payments_actions';
// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
// import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendship_actions'
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BILLS:
            return merge({}, state, action.bills);
        case RECEIVE_BILL:
        case RECEIVE_BILL_PAYLOAD:
            let newState = merge({}, state, { [action.bill.id]: action.bill });
            return newState;
        case REMOVE_BILL:
            debugger
            let newBillsState = merge({}, state);
            delete newBillsState[action.bill.id];
            return newBillsState
        default:
            return state;
    }
}