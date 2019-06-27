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
            if ( (!allFriendIds.includes(user.id)) && (user.id !== this.props.currentUserId)) {
                return (
                    <AddFriendItem key={user.id} friend={user} />
                );
            }
        });
        
        let users;
        if (allFriendIds.length === (this.props.users.length - 1 )) {
            users = "You are friends with everyone!";
        } else {
            users = "Users";
        }
        
        return (
            <div className='addfriend-box'>
                <h1>{users}</h1>
                {notFriends}
            </div>
        );
    }
};