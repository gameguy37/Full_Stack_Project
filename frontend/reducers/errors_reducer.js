import { combineReducers } from 'redux';
import SessionErrorsReducer from './errors/session_errors_reducer';
import FriendshipsErrorsReducer from './errors/friendships_errors_reducer';
import BillsErrorsReducer from './errors/bills_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    friendships: FriendshipsErrorsReducer,
    bills: BillsErrorsReducer,
});