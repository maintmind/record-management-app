import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog, toggleEditMenu, toggleAllLogsView } from '../../../ducks/reducer';
import './AllLogViewer.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class AllLogViewer extends Component {
    // componentDidMount() {
    //     this.props.getAllLogs(this.props.user.user_id)
    // }

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
        const catSpecLogs = this.props.logList.filter((c, i) => {
            return c.cat_id === this.props.catView
        })

        const displayLogs = catSpecLogs.map((c, i, arr) => {
            const completionDate = c.date_complete ? (c.date_complete).substring(0, (c.date_complete).indexOf('T')) : null
            let result;
            return result = (
                <section key={i} className="log_row">
                    <div className="log_buttons">
                        <button onClick={() => this.toggleAddEditModal('log', true)} className="edit_button fa fa-pencil-square-o" ></button>
                        <button className="fa fa-trash delete_button" onClick={() => this.confirmModal(c.log_id, this.props.user.user_id)}></button>
                    </div>
                    <div className="log_info">
                        <div className="log_title">{c.title}</div>
                        <div className="log_desc"><i>{c.description}</i></div>
                        <div className="log_date">{completionDate}</div>
                        <div className="log_cost">{c.cost}</div>
                    </div>
                    <a href={c.img} className="log_img" target="blank"><img src={c.img} alt="no images available" /></a>
                </section>
            )

            return result;
        })

        return (
            <div className={this.props.allLogsView ? "all_logs_modal addLog_show" : "addLog_hide"}>
                <button onClick={() => this.props.toggleAllLogsView(!this.props.allLogsView)}> CLOSE </button>
                <section className="log_header">
                    <div className="log_header_title">TITLE</div>
                    <div className="log_desc">DESCRIPTION</div>
                    <div className="log_date">DATE COMPLETE</div>
                    <div className="log_cost">COST</div>
                    <div><small>CLICK IMAGE TO ENLARGE</small></div>
                </section>
                {displayLogs}
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
    toggleAllLogsView
}

export default connect(mapStateToProps, outputActions)(AllLogViewer);