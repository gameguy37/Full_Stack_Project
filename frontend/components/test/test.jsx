import React from 'react';
import TestContainer from './create_post_form_container';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: props.users
        };

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

export default Test;