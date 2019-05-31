import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddFriend from '../../components/nav_bar/add_friend_container';

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
        case 'addFriend':
            component = <AddFriend />;
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