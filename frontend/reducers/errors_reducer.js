import { combineReducers } from 'redux';
import SessionErrorsReducer from './errors/session_errors_reducer';
// import BillsErrorsReducer from './errors/bills_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    // bills: BillsErrorsReducer,
});