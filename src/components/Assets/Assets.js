import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInputForm from '../UserInputForm/UserInputForm';
import Categories from '../Categories/Categories';

import { getAllAssets, assetRotate, catDisp, updateAssetID, toggleModal } from '../../ducks/reducer';

class Assets extends Component {
    componentDidMount() {
        this.props.getAllAssets(this.props.user.user_id)
    }

    changeAsset(num) {
        this.props.assetRotate(num)
        this.props.catDisp(0)
        this.props.updateAssetID(num)
    }

    render() {
        const displayAsset = this.props.assetList.map((c, i) => {
            return (
                <button key={i} className="asset_tab" onClick={() => this.changeAsset(c.asset_id)}>
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

                <Categories />
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
    catDisp,
    updateAssetID,
    toggleModal
}

export default connect(mapStateToProps, outputActions)(Assets);