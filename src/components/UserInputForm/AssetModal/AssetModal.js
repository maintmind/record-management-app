import React, { Component } from 'react';
import "../AssetModal/AssetModal.css";
import { connect } from 'react-redux';
import { toggleModal, updateAssetName, updateAssetDescription, addAsset, editAsset, getUserInfo } from './../../../ducks/reducer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500, gray800 } from 'material-ui/styles/colors';

// import PhotoUploader from '../../../components/PhotoUploader/PhotoUploader';

class AssetModal extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    submitAsset(obj) {
        console.log('OBJ', obj)
        this.props.addAsset(obj);
        this.props.toggleModal(null);
    }
    saveChanges(obj) {
        this.props.editAsset(obj);
        this.props.toggleModal(null);
    }

    render(props) {

        const styles = {

            underlineStyle: {
                borderColor: orange500
            },

            underlineFocusStyle: {
                color: gray800,
            },
        };

        const style = {
            backgroundColor: orange500

        };
        if (!this.props.editMode) {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD ASSET</h2>
                    {/* <div className="title">Title:</div> */}
                    <div><TextField onChange={(e) => this.props.updateAssetName(e.target.value)} hintText="Title" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    {/* <div className="description">Description:</div> */}
                    <div><TextField onChange={(e) => this.props.updateAssetDescription(e.target.value)} hintText="Description" underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="asset-form-button"><RaisedButton label="Submit New Asset" primary={false} style={style} buttonStyle={style} onClick={() => this.submitAsset(this.props)} /></div>
                </div>
            )
        } else {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>EDIT ASSET</h2>
                    {/* <div className="title">Title:</div> */}
                    <div><TextField onChange={(e) => this.props.updateAssetName(e.target.value)} hintText={this.props.assetName} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    {/* <div className="description">Description:</div> */}
                    <div><TextField onChange={(e) => this.props.updateAssetDescription(e.target.value)} hintText={this.props.assetDescription} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} /></div>
                    <div className="asset-form-button"><RaisedButton label="Save Changes" primary={false} style={style} buttonStyle={style} onClick={() => this.saveChanges(this.props)} /></div>
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
    updateAssetName, 
    updateAssetDescription, 
    addAsset,
    getUserInfo,
    toggleModal,
    updateAssetName,
    updateAssetDescription,
    addAsset,
    editAsset
}

export default connect(mapStateToProps, outputActions)(AssetModal)