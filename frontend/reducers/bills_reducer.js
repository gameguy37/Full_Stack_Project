import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bills_actions';
// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendship_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BILLS:
            return merge({}, state, action.bills);
        // case RECEIVE_USER:
        // case RECEIVE_CURRENT_USER:
        case RECEIVE_BILL:
            return merge({}, state, { [action.bill.id]: action.bill });
        // case RECEIVE_FRIENDSHIP:
        // case DELETE_FRIENDSHIP:
        // case REMOVE_BILL:
        //     let newState = merge({}, state);
        //     delete newState[action.bill.id];
        //     newState[action.bill.id] = action.bill;
        //     return newState;
        //     
        default:
            return state;
    }
}