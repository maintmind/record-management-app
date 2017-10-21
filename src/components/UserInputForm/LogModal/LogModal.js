import React, { Component } from 'react';
import "../UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, updateLogName, updateLogDescription, updateLogComplete, updateLogCost, addLog } from '../../../ducks/reducer';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import PhotoUploader from '../../../components/PhotoUploader/PhotoUploader';


class LogModal extends Component {
    submitLog(obj) {
        this.props.addLog(obj);
        this.props.toggleModal(null);
    }
    
    



    render(props) {
            const styles = {
                errorStyle: {
                    color: orange500,
                },
                underlineStyle: {
                    borderColor: orange500,
                },
                floatingLabelStyle: {
                    color: orange500,
                },
                floatingLabelFocusStyle: {
                    color: blue500,
                },
            };


        return (
            <div className="modal_container">
                <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                <h2>ADD LOG</h2>
                <div>Title:</div><div><TextField onChange={(e) => this.props.updateLogName(e.target.value)} hintText="Title" underlineStyle={styles.underlineStyle} /></div>
                <div>Description:</div><div><TextField onChange={(e) => this.props.updateLogDescription(e.target.value)} hintText="Description" underlineStyle={styles.underlineStyle}/></div>
                <div>Date of Service:</div> <div><input onChange={(e) => this.props.updateLogComplete(e.target.value)} type="date" placeholder="" /></div>
                <div>Cost:</div> <div><TextField onChange={(e) => this.props.updateLogCost(e.target.value)} hintText="Cost" underlineStyle={styles.underlineStyle} /></div>
                <div><PhotoUploader /></div>
                <div className="imagePreview">{this.props.cloudinaryUrl ?
                    <img src={this.props.cloudinaryUrl} alt="" />
                    : "Your upload will display here."}
                </div>
                <div><button onClick={() => this.submitLog(this.props)} >Submit New Log</button></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    toggleModal, 
    updateLogName, 
    updateLogDescription, 
    updateLogComplete, 
    updateLogCost,
    addLog
}

export default connect(mapStateToProps, outputActions)(LogModal)