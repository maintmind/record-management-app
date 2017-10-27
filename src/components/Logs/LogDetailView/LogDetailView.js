import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog, toggleEditMenu, toggleLogDetailView } from '../../../ducks/reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../Logs.css';

class LogDetailView extends Component {


    confirmModal(log_id, user_id) {
        confirmAlert({
            title: 'Are you sure?',
            message: 'Deleting this log will delete all information and images associated with it!',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => this.props.deleteLog(log_id, user_id),
            onCancel: () => { },
        })
    };

    toggleAddEditModal(str, bl) {
        this.props.toggleEditMenu(bl)
        this.props.toggleModal(str)
    }

    render() {
        return (
            <div className={this.props.logDetailsView ? "modal_popout_container addLog_show" : "addLog_hide"}>
                LOG DETAIL VIEW
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    getAllLogs,
    toggleModal,
    catDisp,
    deleteLog,
    toggleEditMenu,
    toggleLogDetailView
}

export default connect(mapStateToProps, outputActions)(LogDetailView);