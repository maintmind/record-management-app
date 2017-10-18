import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAssets, assetRotate, toggleModal } from '../../ducks/reducer';
import UserInputForm from '../UserInputForm/UserInputForm';

import './Categories.css';

class Categories extends Component {
    render() {
        return (
            <div className="category_viewer">
 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}
const outputActions = {
    getAllAssets,
    assetRotate,
    toggleModal
}

export default connect(mapStateToProps, outputActions)(Categories);