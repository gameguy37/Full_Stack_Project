import { getBills, getBill, createBill, updateBill, destroyBill } from '../util/bills';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILL_PAYLOAD = 'RECEIVE_BILL_PAYLOAD';

const receiveBills = bills => ({
    type: RECEIVE_BILLS,
    bills
});

const receiveBill = bill => ({
    type: RECEIVE_BILL,
    bill
});

const receiveBillPayload = payload => ({
    type: RECEIVE_BILL_PAYLOAD,
    bill: payload.bill,
    payments: payload.payments,
    users: payload.users
});

const removeBill = payload => ({
    type: REMOVE_BILL,
    bill: payload.bill,
    payments: payload.payments,
    users: payload.users
})

export const fetchBills = () => dispatch => {
    return getBills().then( bills => dispatch(receiveBills(bills)));
};

export const fetchBill = id => dispatch => {
    return getBill(id).then( bill => dispatch(receiveBill(bill)));
};

export const newBill = payload => dispatch => {
   return createBill(payload).then( payload => dispatch(receiveBillPayload(payload)));
};

export const editBill = bill => dispatch => {
    return updateBill(bill).then( bill => dispatch(receiveBill(bill)));
};

export const deleteBill = id => dispatch => {
    return destroyBill(id).then( payload => dispatch(removeBill(payload)));
};