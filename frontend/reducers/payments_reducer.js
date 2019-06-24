import { RECEIVE_PAYMENTS, RECEIVE_PAYMENT } from '../actions/payments_actions';
import { RECEIVE_BILL_PAYLOAD, REMOVE_BILL } from '../actions/bills_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAYMENTS:
        case RECEIVE_BILL_PAYLOAD:
            let newState = merge({}, state, action.payments);
            return newState;
        case RECEIVE_PAYMENT:
            return merge({}, state, { [action.payment.id]: action.payment });
        case REMOVE_BILL:
            let newPaymentsState = merge({}, state);
            Object.values(action.payments).forEach(payment => {
                delete newPaymentsState[payment.id];
            })
            return newPaymentsState;
        default:
            return state;
    }
}