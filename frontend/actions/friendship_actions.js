import { createFriendship, destroyFriendship } from '../util/friendships';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

const receiveFriendship = user => {
    return {
        type: RECEIVE_FRIENDSHIP,
        user
    };
};

const deleteFriendship = user => {
    return {
        type: DELETE_FRIENDSHIP,
        user
    }
}

export const addFriend = friendee => dispatch => createFriendship(friendee).then(user => dispatch(receiveFriendship(user)));

export const deleteFriend = id => dispatch => destroyFriendship(id).then( (user) => dispatch(deleteFriendship(user)));