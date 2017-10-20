import React, { Component } from 'react';
import "../UserInputForm.css";
import { connect } from 'react-redux';
import { toggleModal, updateAssetName, updateAssetDescription, addAsset } from './../../../ducks/reducer';

// import PhotoUploader from '../../../components/PhotoUploader/PhotoUploader';

class AssetModal extends Component {
    submitAsset(obj) {
        this.props.addAsset(obj);
        this.props.toggleModal(null);
    }

    render(props) {
        return (
            <div className="modal_container">
                <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                <h2>ADD ASSET</h2>
                <div>Title:</div><div><input onChange={(e) => this.props.updateAssetName(e.target.value)} placeholder="asset" /></div>
                <div>Description:</div><div><textarea onChange={(e) => this.props.updateAssetDescription(e.target.value)} placeholder="asset" /></div>
                <div className="userinputform"><button onClick={() => this.submitAsset(this.props)} >Submit New Asset</button></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    toggleModal, 
    updateAssetName, 
    updateAssetDescription, 
    addAsset 
}

export default connect(mapStateToProps, outputActions)(AssetModal)