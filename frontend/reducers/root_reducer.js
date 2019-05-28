import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';


export default combineReducers({
    entities: EntitiesReducer,
    ui: UiReducer,
    errors: ErrorsReducer,
    session: SessionReducer,
});