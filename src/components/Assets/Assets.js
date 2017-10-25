import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAssets, assetRotate, catDisp, updateAssetID, toggleModal, toggleEditMenu, getUserInfo  } from '../../ducks/reducer';
import Categories from '../Categories/Categories';
import './Assets.css';


class Assets extends Component {
    componentDidMount() {
        this.props.getUserInfo()
        this.props.getAllAssets(this.props.user)
    }

    changeAsset(num) {
        this.props.assetRotate(num)
        this.props.catDisp(0)
        this.props.updateAssetID(num)
    }

    toggleAddModal(str) {
        this.props.toggleEditMenu(false)
        this.props.toggleModal(str)
    }

    render() {
        const displayAsset = this.props.assetList.map((c, i) => {
            return (
                <button key={i} className={this.props.assetView === c.asset_id? "asset_tab disabled" : "asset_tab"} 
                disabled={this.props.assetView === c.asset_id ? true : false} onClick={() => this.changeAsset(c.asset_id)}>
                    {c.title}
                </button>
            )
        })

        return (
            <div className="assets_viewer">
                <div className="asset_tabs_container">
                    {displayAsset}
                    <button onClick={() => this.toggleAddModal('asset')} className="add_asset_button">ADD ASSET</button>
                </div>
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
    toggleModal,
    getUserInfo,
    toggleEditMenu
}

export default connect(mapStateToProps, outputActions)(Assets);