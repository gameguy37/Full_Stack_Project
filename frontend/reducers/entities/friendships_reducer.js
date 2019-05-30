import { RECEIVE_FRIENDSHIP } from '../../actions/dashboard_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDSHIP:
            
            return merge({}, state, action.users);
        default:
            return state;
    }
}