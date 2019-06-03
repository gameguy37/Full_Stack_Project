import React from 'react';
import AddFriendItem from './add_friend_item';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users } = this.props;
        debugger
        const friends = users.map( (user) => {
            return (
                <AddFriendItem key={user.id} friend={user} />
            );
        });

        return (
            <div>
                <h1>Users</h1>
                <div className='addFriend'>
                    {friends}
                </div>
            </div>
        );
    }
};