import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            let newState = merge({}, state, action.comments);
            return newState;
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            debugger
            let newPaymentsState = merge({}, state);
            delete newPaymentsState[action.comment.id];
            return newPaymentsState;
        default:
            return state;
    }
}