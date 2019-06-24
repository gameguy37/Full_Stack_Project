import { RECEIVE_BILLS, RECEIVE_BILL, RECEIVE_BILL_PAYLOAD, REMOVE_BILL } from '../actions/bills_actions';
import { RECEIVE_COMMENT_PAYLOAD } from '../actions/comments_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BILLS:
            return merge({}, state, action.bills);
        case RECEIVE_BILL:
        case RECEIVE_BILL_PAYLOAD:
        case RECEIVE_COMMENT_PAYLOAD:
            debugger
            let newState = merge({}, state, { [action.bill.id]: action.bill });
            return newState;
        case REMOVE_BILL:
            let newBillsState = merge({}, state);
            delete newBillsState[action.bill.id];
            return newBillsState;
        default:
            return state;
    }
}