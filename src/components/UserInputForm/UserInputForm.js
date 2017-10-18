import React, { Component } from 'react';
import "./UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, updateAssetName, updateAssetDescription, 
         addAsset, updateCategoryName, updateCategoryDescription, 
         addCategory, updateLogName, updateLogDescription, addLog, 
         updateLogComplete, updateLogCost } from './../../ducks/reducer';

import PhotoUploader from '../../components/PhotoUploader/PhotoUploader';
// import Redux stuff

class UserInputForm extends Component {
    constructor() {
        super();
    }

    displayController(props) {

        {/* This displays on the top of each form */}
        var inputHeader = () => {
            return (
                <div>
                    <button onClick={() => this.props.toggleModal(null)}>CLOSE BUTTON</button>
                </div>
            )
        }

        if (this.props.modalToggler === null) {
            return (<div></div>)

        } else if (this.props.modalToggler === "asset") {
            return (
                <div>
                    {inputHeader()}
                    <div>Title:</div><div><input onChange={ (e) => this.props.updateAssetName(e.target.value) } placeholder="asset" /></div>
                    <div>Description:</div><div><textarea onChange={ (e) => this.props.updateAssetDescription(e.target.value) } placeholder="asset" /></div>
                    <div className="userinputform"><button onClick={ () => this.props.addAsset(this.props) } >Submit New Asset</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "cat") {
            return (
                <div>
                    {inputHeader()}
                    <div>Title:</div><div><input onChange={ (e) => this.props.updateCategoryName(e.target.value) } placeholder="cat" /></div>
                    <div>Description:</div><div><textarea onChange={ (e) => this.props.updateCategoryDescription(e.target.value) }  placeholder="cat" /></div>
                    <div className="userinputform"><button onClick={ () => this.props.addCategory(this.props) } >Submit New Category</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "log") {
            return (
                <div>
                    {inputHeader()}
                    <div>Title:</div><div><input onChange={ (e) => this.props.updateLogName(e.target.value) } placeholder="cat" /></div>
                    <div>Description:</div><div><textarea onChange={ (e) => this.props.updateLogDescription(e.target.value) }  placeholder="cat" /></div>
                    <div>Date of Service:</div> <div><input onChange={ (e) => this.props.updateLogComplete(e.target.value) } type="date" placeholder="" /></div>
                    <div>Cost:</div> <div><input onChange={ (e) => this.props.updateLogCost(e.target.value) } placeholder="" /></div>
                    <div><PhotoUploader /><button>Upload Photo</button></div>
                    <div>Image Preview Here</div>
                    <div><button onClick={ () => this.props.addLog(this.props) } >Submit New Log</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "reminder") {
            return (
                <div>
                    {inputHeader()}
                    <div>Title:</div><div><input placeholder="reminder" /></div>
                    <div>Description:</div><div><textarea placeholder="reminder" /></div>
                    <div>Date Due:</div> <div><input type="date" placeholder="" /></div>
                    <div><button>Submit New Reminder</button></div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="userinputform">
                <div>{this.displayController()}</div>
            </div>
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
    updateLogCost
    
}

export default connect(mapStateToProps, outputActions)(UserInputForm)