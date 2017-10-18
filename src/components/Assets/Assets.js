import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInputForm from '../UserInputForm/UserInputForm';
import Categories from '../Categories/Categories';

import { getAllAssets, assetRotate, toggleModal } from '../../ducks/reducer';

class Assets extends Component {
    componentDidMount() {
        this.props.getAllAssets(this.props.user.user_id)
    }

    render() {
        const displayAsset = this.props.assetList.map((c, i) => {
            return (
                <button key={i} className="asset_tab" onClick={() => this.props.assetRotate(c.asset_id)}>
                    {c.title}
                </button>
            )
        })

        return (
            <div className="assets_viewer">
                <div className="asset_tabs_container">
                    {displayAsset}
                    <button onClick={() => this.props.toggleModal('asset')} className="add_asset_button">ADD ASSET</button>
                </div>

                <UserInputForm />

                <p>- Category list</p>
                <p>- Log dropdown</p>
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

export default connect(mapStateToProps, outputActions)(Assets);