import React, { Component } from 'react';
import '../CatModal/CatModal.css'
import { connect } from 'react-redux';
import { toggleModal, updateCategoryName, updateCategoryDescription, addCategory } from '../../../ducks/reducer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500 } from 'material-ui/styles/colors';

class CatModal extends Component {
    submitCategory(obj) {
        this.props.addCategory(obj);
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
        if (!this.props.editMode) {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD CATEGORY</h2>
                    <div className="title">Title:</div><div><TextField onChange={(e) => this.props.updateCategoryName(e.target.value)} hintText="Title" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="description">Description:</div><div><TextField onChange={(e) => this.props.updateCategoryDescription(e.target.value)} hintText="Description" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="category-form-button"><RaisedButton label="Submit New Category" primary={false} style={style} buttonStyle={style} onClick={() => this.submitCategory(this.props)} /></div>
                </div>
            )
        } else {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>EDIT CATEGORY</h2>
                    {/* <div className="title">Title:</div><div><TextField onChange={(e) => this.props.updateCategoryName(e.target.value)} hintText="Title" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="description">Description:</div><div><TextField onChange={(e) => this.props.updateCategoryDescription(e.target.value)} hintText="Description" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="category-form-button"><RaisedButton label="Submit New Category" primary={false} style={style} buttonStyle={style} onClick={() => this.submitCategory(this.props)} /></div> */}
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
    updateCategoryName,
    updateCategoryDescription,
    addCategory
}

export default connect(mapStateToProps, outputActions)(CatModal)