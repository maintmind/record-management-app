import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllAssets, toggleModal } from '../../ducks/reducer';

 class Assets extends Component {
    constructor() {
        super();

        this.state = {
            assetsToDisplay: [],
            showAssetAdder: false
        }
    }

    componentDidMount() {
     this.props.getAllAssets(this.props.user.user_id)
        
    }

    render() {
        const displayAsset = this.props.assetList.map((c, i) => {
            return (
                <button key={i} className="asset_tab" onClick={() => this.assetRotate(c.asset_id)}>
                    {c.title}
                </button>
            )
        })

        return (
            <div className="assets_viewer">
                <div className="asset_tabs_container">
                    {displayAsset}
                    <button onClick={() => { this.props.toggleModal( 'asset') }} className="add_asset_button">ADD ASSET</button>
                </div>


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
    toggleModal
}

export default connect (mapStateToProps, outputActions) (Assets);