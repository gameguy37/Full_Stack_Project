import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import { deleteBill } from '../../actions/bills_actions';
import { fetchComments, newComment, deleteComment } from '../../actions/comments_actions';
import { fetchBill } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.friendId,
        friend: state.entities.users[ownProps.friendId],
        amount: ownProps.amount,
        className: ownProps.className,
        bill: ownProps.bill,
        payment: ownProps.payment,
        payments: state.entities.payments,
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        comments: state.entities.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBill: id => dispatch(fetchBill(id)),
        deleteBill: bill => dispatch(deleteBill(bill)),
        fetchComments: () => dispatch(fetchComments()),
        fetchUsers: () => dispatch(fetchUsers()),
        newComment: comment => dispatch(newComment(comment)),
        deleteComment: id => dispatch(deleteComment(id)),
    }
}

class FriendShowItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
        }

        this.showBill = this.showBill.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showBill() {
        const billItem = document.getElementById(`${this.props.bill.id}`);
        if (billItem.classList.contains('hide-bill')) {
            billItem.classList.remove('hide-bill');
            billItem.classList.add('show-bill');
        } else {
            billItem.classList.remove('show-bill');
            billItem.classList.add('hide-bill');
        }
    }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newComment({ comment: { author_id: this.props.currentUser.id, bill_id: this.props.bill.id, body: this.state.comment } });
        this.setState({ comment: '' });
    }

    render() {
        if (Object.values(this.props.users).length < 2) {
            return null;
        }

        let whoLentWho;
        if (this.props.friend && this.props.className === "x-owes-you") {
            whoLentWho = this.props.friend.name + " owes you"
        } else if (this.props.friend && this.props.className && this.props.className === "you-owe-x") {
            whoLentWho = "you owe " + this.props.friend.name
        } else {
            whoLentWho = null;
        }

        const billParticipants = Object.values(this.props.payments).map(payment => {
            if (payment.bill_id === this.props.bill.id && payment.user_id !== this.props.currentUser.id) {
                return (
                    <span id="bill-participant" key={payment.user_id}>
                        <img src={window.profilePic} />
                        <strong>{this.props.users[payment.user_id].name}</strong> owes <strong>${parseFloat(payment.initial_amount - payment.paid_amount).toFixed(2)}</strong>
                    </span>
                );
            }
        });
        
        const billComments = Object.values(this.props.comments).map(comment => {
            
            if (comment.bill_id === this.props.bill.id) {
                
                if (!comment.created_at) {
                    return null;
                }

                return (
                    <li key={comment.id}>
                        <div id="comment-container">
                            <div id="comment-info">
                                <div>
                                    <span id="author-name">{this.props.users[comment.author_id].name}</span>
                                    <span id="authored-at">{(comment.created_at).split('T')[0]}</span>
                                </div>
                                <button onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
                            </div>
                            <span>{comment.body}</span>
                        </div>
                    </li>
                );
            }
        });

        let owedAmount;
        let reactiveId;
        let description;
        let friendName;
        let billAmount;

        if (this.props.bill && this.props.payment && this.props.friend && (this.props.payment.bill_id === this.props.bill.id) && (this.props.payment.user_id === this.props.friendId) && (this.props.bill.biller_id === this.props.currentUser.id)) {
            owedAmount = (parseFloat(this.props.payment.initial_amount - this.props.payment.paid_amount)).toFixed(2);
            reactiveId = "green";
            description = this.props.bill.description;
            friendName = "you"
            billAmount = (parseFloat(this.props.bill.total_amount)).toFixed(2);
        }

        if (this.props.bill && this.props.payment && this.props.friend && (this.props.payment.bill_id === this.props.bill.id) && (this.props.bill.biller_id === this.props.friendId) && (this.props.payment.user_id === this.props.currentUser.id)) {
            owedAmount = (parseFloat(this.props.payment.initial_amount - this.props.payment.paid_amount)).toFixed(2);
            reactiveId = "orange";
            description = this.props.bill.description;
            friendName = this.props.friend.name;
            billAmount = (parseFloat(this.props.bill.total_amount)).toFixed(2);
        }

        return (
            <li className={this.props.className}>
                <div id="friend-show-item" onClick={this.showBill}>
                    <div id="friend-show-left">
                        <div id="fsl-date">
                            <span id="fsl-date-month">JUN</span>
                            <span id="fsl-date-num">05</span>
                        </div>
                        <img src={window.uncategorized} />
                        <span id="description">{description}</span>
                    </div>
                    <div id="friend-show-right0">
                        <div id="friend-show-right1">
                            <div id="this-person-paid">
                                <span>{friendName} paid</span>
                                <span id="tpp-amt">${billAmount}</span>
                            </div>
                        </div>
                        <div id="friend-show-right2">
                            <div id="amount-owed">
                                <span>{whoLentWho}</span>
                                <span id={reactiveId}>${owedAmount}</span>
                            </div>
                        </div>
                    </div>
                    <div id="friend-show-delete">
                        <button onClick={() => this.props.deleteBill(this.props.bill.id)}>Delete</button>
                    </div>
                </div>
                <div id={this.props.bill.id} className="hide-bill friend-show-bill">
                    <div id="friend-show-bill-topbar">
                        <img id="topbar-image" src={window.uncategorized} />
                        <div id="topbar-info">
                            <span id="topbar-span1">
                                {this.props.bill.description}
                            </span>
                            <span id="topbar-span2">
                                ${parseFloat(this.props.bill.total_amount).toFixed(2)}
                            </span>
                            <span id="topbar-span3">
                                Added by {this.props.users[this.props.bill.biller_id].name} on {(this.props.bill.created_at).split('T')[0]}
                            </span>
                            <button id="edit-expense-btn">Edit expense</button>
                        </div>
                    </div>
                    <div id="friend-show-bill-main">
                        <div id="bill-participants">
                            <span id="bill-payer">
                                <img src={window.profilePic} />
                                <strong>{this.props.users[this.props.bill.biller_id].name}</strong> paid <strong>${parseFloat(this.props.bill.total_amount).toFixed(2)}</strong>
                            </span>
                            {billParticipants}
                        </div>
                        <div id="comments">
                            <h4><i className="icon-comment" /> NOTES AND COMMENTS</h4>
                            <ul>
                                {billComments}
                            </ul>
                            <form id="comment-form" onSubmit={this.handleSubmit}>
                                <textarea value={this.state.comment} onChange={this.change("comment")} placeholder="Add a comment"></textarea>
                                <input id="comment-btn" type="submit" value="Post" />
                            </form>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendShowItem);