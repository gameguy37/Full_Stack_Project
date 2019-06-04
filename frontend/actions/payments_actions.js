import { getPayments, getPayment, createPayment, updatePayment, destroyPayment } from '../util/payments';

export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
export const REMOVE_PAYMENT = 'DELETE_PAYMENT';

const receivePayments = payments => ({
    type: RECEIVE_PAYMENTS,
    payments
});

const receivePayment = payment => ({
    type: RECEIVE_PAYMENT,
    payment
});

const removePayment = payment => ({
    type: REMOVE_PAYMENT,
    payment
});

export const fetchPayments = () => dispatch => {
    return getPayments().then( payments => dispatch(receivePayments(payments)));
};

export const fetchPayment = id => dispatch => {
    return getPayment(id).then( payment => dispatch(receivePayment(payment)));
};

export const newPayment = payment => dispatch => {
    return createPayment(payment).then( payment => dispatch(receivePayment(payment)));
};

export const editPayment = payment => dispatch => {
    return updatePayment(payment).then( payment => dispatch(receivePayment(payment)));
};

export const deletePayment = id => dispatch => {
    return destroyPayment(id).then( payment => dispatch(removePayment(payment)));
};