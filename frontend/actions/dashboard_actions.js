import { createFriendship } from '../util/friendships';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';

const receiveFriendship = user => {
    return {
        type: RECEIVE_FRIENDSHIP,
        user
    };
};

export const addFriend = formUser => dispatch => createFriendship(formUser).then(user => dispatch(receiveFriendship(user)));