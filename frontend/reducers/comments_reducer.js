import { RECEIVE_COMMENTS, RECEIVE_COMMENT, RECEIVE_COMMENT_PAYLOAD, REMOVE_COMMENT } from '../actions/comments_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            let newState = merge({}, state, action.comments);
            return newState;
        case RECEIVE_COMMENT:
        case RECEIVE_COMMENT_PAYLOAD:
            debugger
            return merge({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newPaymentsState = merge({}, state);
            delete newPaymentsState[comment.id];
            return newPaymentsState;
        default:
            return state;
    }
}