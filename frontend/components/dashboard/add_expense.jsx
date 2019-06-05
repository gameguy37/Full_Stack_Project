import React from 'react';
import Checkbox from './checkbox';

export default class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            selfChecked: false,
            payerIds: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkChange1 = this.checkChange1.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    checkChange1() {
        this.setState({
            selfChecked: !this.state.selfChecked,
        });
    }

    handleCheckboxChange(e) {
        debugger
        if (e.target.value) {
            this.setState({
                payerIds: this.state.payerIds.concat([e.target.name])
            });
        } else {
            this.setState({
                payerIds: payerIds.splice(payerIds.indexOf(e.target.name), 1)
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newBill({ total_amount: this.state.amount, payerIds: this.state.payerIds, selfChecked: this.state.selfChecked, description: "default", category: "default" });
    }

    render() {

        const { acceptedFriendIds } = this.props;
        const { pendingFriendIds } = this.props;
        const allFriendIds = acceptedFriendIds.concat(pendingFriendIds);

        const allFriends = Object.values(this.props.users).map( user => {
            if (allFriendIds.includes(user.id)) {
                debugger
                return (
                    <li key={user.id}>
                        <label>
                            <Checkbox name={user.id} checked={this.state.checked} handlechange={this.handleCheckboxChange} />
                            <span>{user.name}</span>
                        </label>
                    </li>
                );
            }
        });

        return (
            <div className='add-expense-box'>
                Choose friends with whom to split expense:
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.amount} onChange={this.change("amount")} placeholder="Enter an amount" />
                    <br/>
                    <br/>
                    <ul>
                        <label>
                        <input type="checkbox" onChange={this.checkChange1} value={this.state.selfChecked} />
                        Myself</label>
                        <br/>
                        {allFriends}
                    </ul>
                    <br/>
                    <br/>
                    <input type="submit" value="Create Bill" />
                </form>
            </div>
        );
    }
};