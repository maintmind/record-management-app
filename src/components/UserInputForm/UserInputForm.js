import React, { Component } from 'react';
import "./UserInputForm.css";
import { connect } from 'react-redux';
import {
    toggleModal, updateAssetName, updateAssetDescription,
    addAsset, updateCategoryName, updateCategoryDescription,
    addCategory, updateLogName, updateLogDescription, addLog,
    updateLogComplete, updateLogCost, getAllAssets, updateReminderName,
    updateReminderDescription, updateReminderDue, addReminder
} from './../../ducks/reducer';

import PhotoUploader from '../../components/PhotoUploader/PhotoUploader';
// import Redux stuff

class UserInputForm extends Component {

    componentDidMount() {
        this.props.getAllAssets(this.props.user.user_id)
    }

    displayController(props) {
        const assetTitle = this.props.assetList.map(obj => {
            if (obj.asset_id === this.props.assetView) {
                return this.props.assetList[this.props.assetList.indexOf(obj)].title
            }
        })

        const categoryTitle = this.props.categoryList.map(obj => {
            if (obj.cat_id === this.props.catView) {
                return this.props.categoryList[this.props.categoryList.indexOf(obj)].title
            }
        })


        if (this.props.modalToggler === null) {
            return (<div></div>)

        } else if (this.props.modalToggler === "asset") {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD ASSET</h2>
                    <div>Title:</div><div><input onChange={(e) => this.props.updateAssetName(e.target.value)} placeholder="asset" /></div>
                    <div>Description:</div><div><textarea onChange={(e) => this.props.updateAssetDescription(e.target.value)} placeholder="asset" /></div>
                    <div className="userinputform"><button onClick={() => this.props.addAsset(this.props)} >Submit New Asset</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "cat") {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD CATEGORY</h2>
                    <div>Title:</div><div><input onChange={(e) => this.props.updateCategoryName(e.target.value)} placeholder="cat" /></div>
                    <div>Description:</div><div><textarea onChange={(e) => this.props.updateCategoryDescription(e.target.value)} placeholder="cat" /></div>
                    <div className="userinputform"><button onClick={() => this.props.addCategory(this.props)} >Submit New Category</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "log") {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD LOG</h2>
                    <div>Title:</div><div><input onChange={(e) => this.props.updateLogName(e.target.value)} placeholder="cat" /></div>
                    <div>Description:</div><div><textarea onChange={(e) => this.props.updateLogDescription(e.target.value)} placeholder="cat" /></div>
                    <div>Date of Service:</div> <div><input onChange={(e) => this.props.updateLogComplete(e.target.value)} type="date" placeholder="" /></div>
                    <div>Cost:</div> <div><input onChange={(e) => this.props.updateLogCost(e.target.value)} placeholder="" /></div>
                    <div><PhotoUploader /></div>
                    <div><button onClick={() => this.props.addLog(this.props)} >Submit New Log</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "reminder") {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD REMINDER</h2>
                    <div>Asset:</div><div>{assetTitle}</div>
                    <div>Category:</div><div>{categoryTitle}</div>
                    <div>Title:</div><div><input onChange={(e) => {this.props.updateReminderName (e.target.value)}} placeholder="reminder" /></div>
                    <div>Description:</div><div><textarea onChange={(e) => {this.props.updateReminderDescription (e.target.value)}} placeholder="reminder" /></div>
                    <div>Date Due:</div> <div><input onChange={(e) => {this.props.updateReminderDue (e.target.value)}} type="date" placeholder="" /></div>
                    <button onClick={() => {this.props.addReminder (this.props)}}>Submit New Reminder</button>
                </div>
            )
        }
    }

    render() {
        return (
            // <div className="userinputform">
            <div className={this.props.modalToggler === null ? "modal_popout_container hide_modal" : "modal_popout_container show_modal"}>
                {this.displayController()}
            </div>
            // </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    toggleModal,
    updateAssetName,
    updateAssetDescription,
    addAsset,
    updateCategoryName,
    updateCategoryDescription,
    addCategory,
    updateLogName,
    updateLogDescription,
    addLog,
    updateLogComplete,
    updateLogCost,
    getAllAssets,
    updateReminderName,
    updateReminderDescription,
    updateReminderDue,
    addReminder

}

export default connect(mapStateToProps, outputActions)(UserInputForm)