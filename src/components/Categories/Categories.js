import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories, toggleModal, catDisp, deleteCategory, deleteAsset,toggleEditMenu, updateAssetName, updateAssetDescription, updateCategoryName, updateCategoryDescription, updateCatID } from '../../ducks/reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


import Logs from '../Logs/Logs';

import './Categories.css';

class Categories extends Component {
    componentDidMount() {
        this.props.getAllCategories(this.props.user)
    };

    showHideCat(cat_id) {
        if (this.props.catView === 0) {
            this.props.catDisp(cat_id)
        } else if (this.props.catView === cat_id) {
            this.props.catDisp(0)
        } else {
            this.props.catDisp(cat_id)
        }
    }

    confirmModal(cat_id, user_id) {
        confirmAlert({
            title: 'Are you sure?',
            message: 'Deleting this category will delete all logs and reminders associated with it!',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => this.props.deleteCategory(cat_id, user_id),
            onCancel: () => { },
        })
    };

    deleteAssetConfirm(asset_id, user_id) {
        confirmAlert({
            title: 'Are you sure?',
            message: 'Deleting this asset will delete all categories, logs, and reminders associated with it!',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => this.props.deleteAsset(asset_id, user_id),
            onCancel: () => { },
        })
    };

    toggleAddEditModal(str, bl, title, desc, num) {
        this.props.toggleEditMenu(bl)
        this.props.toggleModal(str)
        this.props.updateAssetName(title)
        this.props.updateAssetDescription(desc)
        this.props.updateCategoryName(title)
        this.props.updateCategoryDescription(desc)
        this.props.updateCatID(num)
    }

    render() {
        const displayCats = this.props.categoryList.map((c, i) => {
            let result;
            if (c.asset_id === this.props.assetView) {
                return result = (
                    <div key={i}>
                        <div key={i} className="cat_row">
                        <button onClick={() => this.toggleAddEditModal('cat', true, c.title, c.description, c.cat_id)} className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>Edit Category</button>
                            <button onClick={() => { this.confirmModal(c.cat_id, this.props.user.user_id) }}>Delete</button>
                            <div className="cat_title" onClick={() => this.showHideCat(c.cat_id)}>{c.title} - {c.description}</div>
                        </div>
                        <div className={c.cat_id === this.props.catView ? "addCat_show" : "addCat_hide"}>
                            <Logs />
                        </div>
                    </div>
                )
            }
            return result
        })
        const assetTitle = () => {
            const assets = this.props.assetList
            for(var i = 0; i < assets.length; i++) {
                if(assets[i].asset_id === this.props.assetView) {
                    return assets[i].title
                }
            }
        }
        const assetDesc = () => {
            const assets = this.props.assetList
            for(var i = 0; i < assets.length; i++) {
                if(assets[i].asset_id === this.props.assetView) {
                    return assets[i].description
                }
            }
        }
        return (
            <div className="category_viewer">
                <button onClick={() => this.toggleAddEditModal('asset', true, assetTitle(), assetDesc())} className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>Edit Asset</button>
                <button onClick={() => this.deleteAssetConfirm(this.props.assetView, this.props.user.user_id)} className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>Delete Asset</button>
                <h2 className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>{assetDesc()}</h2>
                <button onClick={() => this.toggleAddEditModal('cat', false)} className={this.props.assetView === 0 ? "addCat_button addCat_hide" : "addCat_button addCat_show"}>
                    ADD CATEGORY
                </button>

                {displayCats}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}
const outputActions = {
    getAllCategories,
    toggleModal,
    catDisp,
    deleteCategory,
    deleteAsset,
    toggleEditMenu,
    updateAssetName,
    updateAssetDescription,
    updateCategoryName,
    updateCategoryDescription,
    updateCatID
}

export default connect(mapStateToProps, outputActions)(Categories);