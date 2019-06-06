import React from 'react';

class FriendExpenseCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(e) {
        this.setState({
            checked: !this.state.checked
        })
        this.props.handlechange({ target: { name: e.target.name, value: e.target.checked } });
    }

    render () {
        return (
            <input type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.handleCheck} />
        );
    }

};

export default FriendExpenseCheckbox;