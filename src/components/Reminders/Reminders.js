import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllReminders, addReminder, updateReminderStatus, updateReminderName,
        updateReminderDescription, updateReminderDue } from '../../ducks/reducer';

import './Reminders.css';


 class Reminders extends Component {
    
    componentDidMount(){
        // this.props.getAllReminders(this.props.user)
    }
    render () {
        return (
            <div>
                <div>ADD REMINDER</div>
                <button onClick={() => this.props.toggleModal(null)}>CLOSE BUTTON</button>
                <div className>Title:</div><div><input onChange={ (e) => this.props.updateReminderName(e.target.value) } placeholder="reminder" /></div>
                <div>Description:</div><div><textarea onChange={ (e) => this.props.updateReminderDescription(e.target.value) } placeholder="reminder" /></div>
                <div>Date Due:</div><div><input onChange={ (e) => this.props.updateReminderDue(e.target.value) } type="date" placeholder="" /></div>
                <div className="reminderform"><button onClick={ () => this.props.addReminder(this.props) } >Submit New Reminder</button></div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    getAllReminders,
    addReminder,
    updateReminderStatus,
    updateReminderName,
    updateReminderDescription,
    updateReminderDue
}

export default connect(mapStateToProps, outputActions) (Reminders);