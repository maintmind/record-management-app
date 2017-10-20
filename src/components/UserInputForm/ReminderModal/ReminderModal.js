import React, { Component } from 'react';
import "../UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, getAllAssets, updateReminderName, updateReminderDescription, updateReminderDue, addReminder } from '../../../ducks/reducer';

class ReminderModal extends Component {
    componentDidMount() {
        this.props.getAllAssets(this.props.user.user_id)
    }

    submitReminder(obj) {
        this.props.addReminder(obj);
        this.props.toggleModal(null);
    }

    render(props) {
        const assetTitle = this.props.assetList.map(obj => {
            let result;
            if (obj.asset_id === this.props.assetView) {
                return result = this.props.assetList[this.props.assetList.indexOf(obj)].title
            }
            return result;
        })

        const categoryTitle = this.props.categoryList.map(obj => {
            let result;
            if (obj.cat_id === this.props.catView) {
                return result = this.props.categoryList[this.props.categoryList.indexOf(obj)].title
            }
            return result
        })

        return (
            <div className="modal_container">
                <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                <h2>ADD REMINDER</h2>
                <div>Asset:</div><div>{assetTitle}</div>
                <div>Category:</div><div>{categoryTitle}</div>
                <div>Title:</div><div><input onChange={(e) => { this.props.updateReminderName(e.target.value) }} placeholder="reminder" /></div>
                <div>Description:</div><div><textarea onChange={(e) => { this.props.updateReminderDescription(e.target.value) }} placeholder="reminder" /></div>
                <div>Date Due:</div> <div><input onChange={(e) => { this.props.updateReminderDue(e.target.value) }} type="date" placeholder="" /></div>
                <button onClick={() => this.submitReminder(this.props)}>Submit New Reminder</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    toggleModal,
    getAllAssets,
    updateReminderName,
    updateReminderDescription,
    updateReminderDue,
    addReminder
}

export default connect(mapStateToProps, outputActions)(ReminderModal)