import React, { Component } from 'react';
import "../UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, updateLogName, updateLogDescription, updateLogComplete, updateLogCost, addLog } from '../../../ducks/reducer';
import TextField from 'material-ui/TextField';
import { orange500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import PhotoUploader from '../../../components/PhotoUploader/PhotoUploader';


class LogModal extends Component {
    constructor() {
        super();

        this.state = {
            date: ''
        }
    }
    submitLog(obj) {
        this.props.addLog(obj);
        this.props.toggleModal(null);
    }

    handleDate = (event, date) => {
        this.setState({
            date: date
        })

    }



    render(props) {
        const styles = {

            underlineStyle: {
                borderColor: orange500,
            },

        };

        const style = {
            backgroundColor: orange500

        };
        if (!this.props.editMode) {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD LOG</h2>
                    <div>Title:</div><div><TextField onChange={(e) => this.props.updateLogName(e.target.value)} hintText="Title" underlineStyle={styles.underlineStyle} /></div>
                    <div className="description">Description:</div><div><TextField onChange={(e) => this.props.updateLogDescription(e.target.value)} hintText="Description" underlineStyle={styles.underlineStyle} /></div>
                    <div className="date">Date of Service:</div> <div><DatePicker onChange={this.handleDate} hintText="mm/dd/yyyy" /></div>
                    <div className="cost">Cost:</div> <div><TextField onChange={(e) => this.props.updateLogCost(e.target.value)} hintText="Cost" underlineStyle={styles.underlineStyle} /></div>
                    <div><PhotoUploader /></div>
                    <div className="imagePreview">{this.props.cloudinaryUrl ?
                        <img src={this.props.cloudinaryUrl} alt="" />
                        : "Your upload will display here."}
                    </div>
                    <div className="log-form-button"><RaisedButton label="Submit New Log" primary={false} style={style} buttonStyle={style} onClick={() => this.submitLog({ props: this.props, date: this.state.date })} /></div>
                </div>
            )
        } else {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>EDIT LOG</h2>
                    {/* <div>Title:</div><div><TextField onChange={(e) => this.props.updateLogName(e.target.value)} hintText={this.props.logName} underlineStyle={styles.underlineStyle} /></div>
                    <div className="description">Description:</div><div><TextField onChange={(e) => this.props.updateLogDescription(e.target.value)} hintText={this.props.logDescription} underlineStyle={styles.underlineStyle} /></div>
                    <div className="date">Date of Service:</div> <div><DatePicker onChange={this.handleDate} hintText={this.props.logCompleteDate} /></div>
                    <div className="cost">Cost:</div> <div><TextField onChange={(e) => this.props.updateLogCost(e.target.value)} hintText={this.props.logCost} underlineStyle={styles.underlineStyle} /></div>
                    <div><PhotoUploader /></div>
                    <div className="imagePreview">{this.props.cloudinaryUrl ?
                        <img src={this.props.cloudinaryUrl} alt="" />
                        : "Your upload will display here."}
                    </div>
                    <div className="log-form-button"><RaisedButton label="Submit New Log" primary={false} style={style} buttonStyle={style} onClick={() => this.submitLog({ props: this.props, date: this.state.date })} /></div> */}
                </div>
            )
        }
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