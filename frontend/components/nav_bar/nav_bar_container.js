import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        currentUser: state.session.currentUser,
        openModal: ownProps.openModal,
        closeModal: ownProps.closeModal
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        logout: () => dispatch(logout()),
        clearErrors: dispatch(clearErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));