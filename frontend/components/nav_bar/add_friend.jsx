import React from 'react';
import AddFriendItem from './add_friend_item';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        debugger
        const { users } = this.props;
        debugger

        const friends = users.map( (user) => {
            return (
                <AddFriendItem onClick={this.selectName} key={user.id} friend={user} />
            );
        });

        return (
            <div>
                <h1>Users</h1>
                <div className='addFriend'>
                    {friends}
                    {/* <input
                        onChange={this.handleInput}
                        value={this.state.inputValue}
                        placeholder='Search...' />
                    <ul>
                        {results}
                    </ul> */}
                </div>
            </div>
        );
    }
};