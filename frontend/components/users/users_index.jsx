import React from 'react';

class UsersIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const users = this.props.users.map( user => {
            return <li key={user.id}>{user.name}</li>
        });
        
        return (
            <ul>
                {users}
            </ul>
        );
    }
}

export default UsersIndex;