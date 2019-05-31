import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendshipsReducer from './friendships_reducer';
import BillsReducer from './bills_reducer';
import PaymentsReducer from './payments_reducer';
import CommentsReducer from './comments_reducer';


export default combineReducers({
    users: UsersReducer,
    friendships: FriendshipsReducer,
    bills: BillsReducer,
    payments: PaymentsReducer,
    comments: CommentsReducer,
});