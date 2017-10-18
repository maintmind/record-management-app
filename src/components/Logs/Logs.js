import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal } from '../../ducks/reducer';

import './Logs.css';

class Logs extends Component {
    componentDidMount() {
        this.props.getAllLogs(this.props.user.user_id)
    }

    render() {
        const displayLogs = this.props.logList.map((c, i) => {
            const completionDate = (c.date_complete).substring(0, (c.date_complete).indexOf('T'));            
            if(c.cat_id === this.props.catView) {
                return (
                    <div key={i} className="log_row">
                        {c.title} - {c.description} - {completionDate} - {c.cost}
                    </div>
                )
            }
        })

        return (
            <div className="log_viewer">
                <button onClick={() => {this.props.toggleModal('log')}} className={this.props.catView === 0 ? "addLog_hide" : "addLog_show"}>ADD LOG</button>

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
    toggleModal
}

export default connect(mapStateToProps, outputActions)(Logs);