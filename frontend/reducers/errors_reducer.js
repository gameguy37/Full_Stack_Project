import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import FriendshipsErrorsReducer from './friendships_errors_reducer';
import BillsErrorsReducer from './bills_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    friendships: FriendshipsErrorsReducer,
    bills: BillsErrorsReducer,
});