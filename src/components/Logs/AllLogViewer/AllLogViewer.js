import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog, toggleAllLogsView } from '../../../ducks/reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './AllLogViewer.css';

class AllLogViewer extends Component {

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
            <div className={this.props.allLogsView ? "all_logs_modal addLog_show" : "addLog_hide"}>
            <button onClick={() => this.props.toggleAllLogsView(!this.props.allLogsView)}> CLOSE </button>
                ALL LOGS VIEW
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
    toggleAllLogsView
}

export default connect(mapStateToProps, outputActions)(AllLogViewer);