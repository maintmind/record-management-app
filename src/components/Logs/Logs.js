import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp } from '../../ducks/reducer';

import './Logs.css';

class Logs extends Component {
    componentDidMount() {
        this.props.getAllLogs(this.props.user.user_id)
    }

    render() {
        const displayLogs = this.props.logList.map((c, i) => {
            const completionDate = (c.date_complete).substring(0, (c.date_complete).indexOf('T'));
            let result;
            if (c.cat_id === this.props.catView) {
                return result = (
                    <div key={i} className="log_row">
                        {c.title} - {c.description} - {completionDate} - {c.cost}
                    </div>
                )
            }
            return result;
        })

        return (
            <div className="log_viewer">
                <div>
                    <button className="close_cat_button" onClick={() => this.props.catDisp(0)}>^</button>
                    <button onClick={() => { this.props.toggleModal('log') }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD LOG</button>
                </div>

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
    catDisp
}

export default connect(mapStateToProps, outputActions)(Logs);