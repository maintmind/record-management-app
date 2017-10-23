import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog } from '../../ducks/reducer';
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
          onCancel: () => {}, 
        })
      };

    render() {
        const displayLogs = this.props.logList.map((c, i) => {
            const completionDate = c.date_complete ? (c.date_complete).substring(0, (c.date_complete).indexOf('T')) : null
            let result;
            if (c.cat_id === this.props.catView) {
                return result = (
                    <div key={i} className="log_row">
                        <div className="log_buttons">
                        <button className="edit button" >Edit</button>
                        <button className="delete button" onClick={() => this.confirmModal(c.log_id, this.props.user.user_id)} >Delete</button>
                        </div>
                        <div>{c.title}</div>
                        <div><i>{c.description}</i></div>
                        <div>{completionDate}</div>
                        <div>{c.cost}</div>
                        <a href={c.img} className="log_row" target="blank"><img src={c.img} alt="preview" /></a>
                    </div>
                )
            }
            return result;
        })

        return (
            <div className="log_viewer">
                <div>
                    <button onClick={() => { this.props.toggleModal('log') }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD LOG</button>
                    <button onClick={() => { this.props.toggleModal('reminder') }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD REMINDER</button>
                </div>
                <div className="log_header">
                    <div>TITLE</div>
                    <div>DESCRIPTION</div>
                    <div>DATE COMPLETE</div>
                    <div>COST</div>
                    <div><small>click image to enlarge</small></div>
                </div>
                <div>
                
                </div>
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
    deleteLog
}

export default connect(mapStateToProps, outputActions)(Logs);