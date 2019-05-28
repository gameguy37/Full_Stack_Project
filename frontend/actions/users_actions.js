import { getUsers } from '../util/users';


export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => {
    return getUsers().then(users => dispatch(receiveUsers(users)));
};