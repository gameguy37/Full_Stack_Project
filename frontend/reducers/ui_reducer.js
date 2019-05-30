import { combineReducers } from 'redux';
import ModalReducer from './ui/modal_reducer';

export default combineReducers({
    modal: ModalReducer,
});