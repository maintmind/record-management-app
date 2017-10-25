import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog, toggleEditMenu, toggleLogDetailView, toggleAllLogsView } from '../../ducks/reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Logs.css';

class Logs extends Component {
    componentDidMount() {
        this.props.getAllLogs(this.props.user.user_id)
    }

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
        const displayLogs = this.props.logList.map((c, i) => {
            const completionDate = c.date_complete ? (c.date_complete).substring(0, (c.date_complete).indexOf('T')) : null
            let result;
            if (c.cat_id === this.props.catView) {
                return result = (
                    <section key={i} className="log_row">
                        <div className="log_buttons">
                            <button onClick={() => this.toggleAddEditModal('log', true)} className="edit_button fa fa-pencil-square-o" ></button>
                            <button className="fa fa-trash delete_button" onClick={() => this.confirmModal(c.log_id, this.props.user.user_id)}></button>
                        </div>
                        <div className="log_info" onClick={() => {this.props.toggleLogDetailView(!this.props.logDetailsView)}}>
                            <div className="log_title">{c.title}</div>
                            <div className="log_desc"><i>{c.description}</i></div>
                            <div className="log_date">{completionDate}</div>
                            <div className="log_cost">{c.cost}</div>
                        </div>
                        <a href={c.img} className="log_img" target="blank"><img src={c.img} alt="no images available" /></a>
                    </section>
                )
            }
            return result;
        })

        return (
            <div className="log_viewer">
                <div>
                    <button onClick={() => { this.toggleAddEditModal('log', false) }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD LOG</button>
                    <button onClick={() => { this.toggleAddEditModal('reminder', false) }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD REMINDER</button>
                    <button onClick={() => { this.props.toggleAllLogsView(!this.props.allLogsView) }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>SHOW ALL LOGS</button>
                </div>
                <section className="log_header">
                    <div className="log_header_title">TITLE</div>
                    <div className="log_desc">DESCRIPTION</div>
                    <div className="log_date">DATE COMPLETE</div>
                    <div className="log_cost">COST</div>
                    <div><small>CLICK IMAGE TO ENLARGE</small></div>
                </section>
                {displayLogs}
            </div >
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
    toggleLogDetailView,
    toggleAllLogsView
}

export default connect(mapStateToProps, outputActions)(Logs);