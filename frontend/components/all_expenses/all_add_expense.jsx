import React from 'react';
import AllExpenseCheckbox from './all_expense_checkbox';

export default class AllAddExpense extends React.Component {
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
        if (e.target.value) {
            this.setState({
                payerIds: this.state.payerIds.concat([e.target.name])
            });
        } else {
            this.setState({
                payerIds: this.state.payerIds.splice(this.state.payerIds.indexOf(e.target.name), 1)
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newBill({ bill: { total_amount: this.state.amount, description: "default", category: "default" }, payment: { payer_ids: this.state.payerIds, self_checked: this.state.selfChecked } });
    }

    render() {

        const Friend = () => {
            return (
                <li key={this.props.friendId}>
                    <label>
                        <AllExpenseCheckbox name={this.props.friendId} checked={this.state.checked} handlechange={this.handleCheckboxChange} />
                        <span>{Object.values(this.props.users)[this.props.friendId].name}</span>
                    </label>
                </li>
            );
        }

        return (
            <div className='add-expense-box'>
                <h1>Split expense:</h1>
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
                        {Friend}
                    </ul>
                    <br/>
                    <br/>
                    <input className="create-bill-btn" type="submit" value="Create Bill" />
                </form>
            </div>
        );
    }
};