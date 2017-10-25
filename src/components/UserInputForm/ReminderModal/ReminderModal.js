import React, { Component } from 'react';
import '../ReminderModal/ReminderModal.css';
import { connect } from 'react-redux';
import { toggleModal, getAllAssets, updateReminderName, updateReminderDescription, updateReminderDue, addReminder } from '../../../ducks/reducer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { orange500 } from 'material-ui/styles/colors';


class ReminderModal extends Component {

    constructor() {
        super();

        this.state = {
            date: ''
        }
    }
    componentDidMount() {
        this.props.getAllAssets(this.props.user.user_id)
    }

    submitReminder(obj) {
        this.props.addReminder(obj);
        this.props.toggleModal(null);
    }

    handleDate = (event, date) => {
        this.setState({
            date: date
        })

    }

    saveChanges(obj) {
        this.props.editReminder(obj);
        this.props.toggleModal(null);
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
        if (!this.props.editMode) {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD REMINDER</h2>
                    <div className="asset-title" >Asset:</div><div style={{ color: 'red' }}>{assetTitle}</div>
                    <div className="asset-category">Category:</div><div style={{ color: 'red' }}>{categoryTitle}</div>
                    <TextField onChange={(e) => { this.props.updateReminderName(e.target.value) }} hintText="Title" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <TextField onChange={(e) => { this.props.updateReminderDescription(e.target.value) }} hintText="Description" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <DatePicker onChange={this.handleDate} hintText="Select Date" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <div className="reminder-form-button"><RaisedButton label="Submit New Reminder" primary={false} style={style} buttonStyle={style} onClick={() => this.submitReminder({ props: this.props, date: this.state.date })} /></div>
                </div>
            )
        } else {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>EDIT REMINDER</h2>
                    {/* <div className="asset-title" >Asset:</div><div style={{ color: 'red' }}>{assetTitle}</div>
                    <div className="asset-category">Category:</div><div style={{ color: 'red' }}>{categoryTitle}</div> */}
                    <TextField onChange={(e) => { this.props.updateReminderName(e.target.value) }} hintText="Title" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <TextField onChange={(e) => { this.props.updateReminderDescription(e.target.value) }} hintText="Description" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <DatePicker onChange={this.handleDate} hintText="Select Date" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} />
                    <div className="reminder-form-button"><RaisedButton label="Save Changes" primary={false} style={style} buttonStyle={style} onClick={() => {this.props.reminderName !== '' && this.props.reminderDescription !== '' ? this.saveChanges(this.props) : alert('Please make sure all fields are filled out')}} /></div>
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
    getAllAssets,
    updateReminderName,
    updateReminderDescription,
    updateReminderDue,
    addReminder
}

export default connect(mapStateToProps, outputActions)(ReminderModal)