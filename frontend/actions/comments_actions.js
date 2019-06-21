import { getComments, getComment, createComment, destroyComment } from '../util/comments';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const fetchComments = () => dispatch => {
    return getComments().then( comments => dispatch(receiveComments(comments)));
};

export const fetchComment = id => dispatch => {
    return getComment(id).then( comment => dispatch(receiveComment(comment)));
};

export const newComment = payload => dispatch => {
   return createComment(payload).then( comment => dispatch(receiveComment(comment)));
};

export const deleteComment = id => dispatch => {
    return destroyComment(id).then( comment => dispatch(removeComment(comment)));
};