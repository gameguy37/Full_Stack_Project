import { combineReducers } from 'redux';
import LoginErrorsReducer from './entities/users_reducer';
import FriendshipErrorsReducer from './entities/bills_reducer';
import SessionErrorsReducer from './entities/payments_reducer';

export default combineReducers({
    login: LoginErrorsReducer,
    friendship: FriendshipErrorsReducer,
    session: SessionErrorsReducer,
});