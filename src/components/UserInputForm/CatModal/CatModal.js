import React, { Component } from 'react';
import "../UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, updateCategoryName, updateCategoryDescription, addCategory } from '../../../ducks/reducer';

class CatModal extends Component {
    submitCategory(obj) {
        this.props.addCategory(obj);
        this.props.toggleModal(null);
    }

    render(props) {
        return (
            <div className="modal_container">
                <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                <h2>ADD CATEGORY</h2>
                <div>Title:</div><div><input onChange={(e) => this.props.updateCategoryName(e.target.value)} placeholder="cat" /></div>
                <div>Description:</div><div><textarea onChange={(e) => this.props.updateCategoryDescription(e.target.value)} placeholder="cat" /></div>
                <div className="userinputform"><button onClick={() => this.submitCategory(this.props)} >Submit New Category</button></div>
            </div>
        )
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