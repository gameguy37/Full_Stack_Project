import React from 'react';
import { connect } from 'react-redux';
// import { addFriend } from '../../actions/friendship_actions';
// import { closeModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         checked: ownProps.checked,
//         handlechange: ownProps.handleCheckboxChange,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         handlechange: e => dispatch(handleCheckboxChange(e))
//     }
// }

class Checkbox extends React.Component {
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
        debugger
        this.props.handlechange({ target: { name: e.target.name, value: e.target.checked } });
    }

    render () {
        return (
            <input type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.handleCheck} />
        );
    }

};

export default Checkbox;