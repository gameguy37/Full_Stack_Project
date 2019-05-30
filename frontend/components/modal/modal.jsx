import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewFriendContainer from '../../components/dashboard/new_friend_form_container';

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

const Modal = ({ modal, closeModal }) => {
    
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'newfriend':
            component = <NewFriendContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);