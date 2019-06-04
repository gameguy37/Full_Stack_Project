import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BillsReducer from './bills_reducer';
import PaymentsReducer from './payments_reducer';
import CommentsReducer from './comments_reducer';


export default combineReducers({
    users: UsersReducer,
    bills: BillsReducer,
    payments: PaymentsReducer,
    comments: CommentsReducer,
});