import { getUsers } from '../util/users';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => dispatch => {
    return getUsers().then(users => dispatch(receiveUsers(users)));
};