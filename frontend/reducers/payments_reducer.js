import { RECEIVE_PAYMENTS, RECEIVE_PAYMENT, REMOVE_PAYMENT } from '../actions/payments_actions';
// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendship_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAYMENTS:
            return merge({}, state, action.payments);
        // case RECEIVE_USER:
        // case RECEIVE_CURRENT_USER:
        case RECEIVE_PAYMENT:
            return merge({}, state, { [action.payment.id]: action.payment });
        // case RECEIVE_FRIENDSHIP:
        // case DELETE_FRIENDSHIP:
        // case REMOVE_PAYMENT:
        //     let newState = merge({}, state);
        //     delete newState[action.payment.id];
        //     newState[action.payment.id] = action.payment;
        //     return newState;
        //     
        default:
            return state;
    }
}