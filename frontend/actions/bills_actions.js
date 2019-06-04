import { getBills, getBill, createBill, updateBill, destroyBill } from '../util/bills';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'DELETE_BILL';

const receiveBills = bills => ({
    type: RECEIVE_BILLS,
    bills
});

const receiveBill = bill => ({
    type: RECEIVE_BILL,
    bill
});

const removeBill = bill => ({
    type: REMOVE_BILL,
    bill
});

export const fetchBills = () => dispatch => {
    return getBills().then( bills => dispatch(receiveBills(bills)));
};

export const fetchBill = id => dispatch => {
    return getBill(id).then( bill => dispatch(receiveBill(bill)));
};

export const newBill = bill => dispatch => {
    return createBill(bill).then( bill => dispatch(receiveBill(bill)));
};

export const editBill = bill => dispatch => {
    return updateBill(bill).then( bill => dispatch(receiveBill(bill)));
};

export const deleteBill = id => dispatch => {
    return destroyBill(id).then( bill => dispatch(removeBill(bill)));
};