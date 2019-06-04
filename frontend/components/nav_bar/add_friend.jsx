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
        const { acceptedFriendIds } = this.props;
        const { pendingFriendIds } = this.props;
        const allFriendIds = acceptedFriendIds.concat(pendingFriendIds);
        
        const notFriends = this.props.users.map( user => {
            if (!allFriendIds.includes(user.id)) {
                return (
                    <AddFriendItem key={user.id} friend={user} />
                );
            }
        });

        return (
            <div>
                <h1>Users</h1>
                <div className='addFriend'>
                    {notFriends}
                </div>
            </div>
        );
    }
};