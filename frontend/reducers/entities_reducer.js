import { combineReducers } from 'redux';
import UsersReducer from './entities/users_reducer';
import BillsReducer from './entities/bills_reducer';
import PaymentsReducer from './entities/payments_reducer';
import CommentsReducer from './entities/comments_reducer';


export default combineReducers({
    users: UsersReducer,
    bills: BillsReducer,
    payments: PaymentsReducer,
    comments: CommentsReducer,
});