import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories, toggleModal, catDisp, deleteCategory, deleteAsset } from '../../ducks/reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


import Logs from '../Logs/Logs';

import './Categories.css';

class Categories extends Component {
    componentDidMount() {
        this.props.getAllCategories(this.props.user)
    };

    confirmModal(cat_id, user_id) {
        confirmAlert({
          title: 'Are you sure?',                      
          message: 'Deleting this category will delete all logs and reminders associated with it!',              
          confirmLabel: 'Confirm',                           
          cancelLabel: 'Cancel',                             
          onConfirm: () => this.props.deleteCategory(cat_id, user_id),    
          onCancel: () => {}, 
        })
      };

      deleteAssetConfirm(asset_id, user_id) {
        confirmAlert({
          title: 'Are you sure?',                      
          message: 'Deleting this asset will delete all categories, logs, and reminders associated with it!',              
          confirmLabel: 'Confirm',                           
          cancelLabel: 'Cancel',                             
          onConfirm: () => this.props.deleteAsset(asset_id, user_id),    
          onCancel: () => {}, 
        })
      };


    render() {
        const displayCats = this.props.categoryList.map((c, i) => {
            let result;
            if (c.asset_id === this.props.assetView) {
                return result = (
                    <div key={i}>
                        <div key={i} className="cat_row">
                        <button onClick={() => {this.confirmModal(c.cat_id, this.props.user.user_id)}}>Delete</button>
                            <div className="cat_title" onClick={() => this.props.catDisp(c.cat_id)}>{c.title} - {c.description}</div>
                        </div>
                        <div className={c.cat_id === this.props.catView ? "addCat_show" : "addCat_hide"}>
                            <Logs />
                        </div>
                    </div>
                )
            }
            return result
        })
        const assetTitle = this.props.assetList.map(asset => {
            let assetDescription
            if(asset.asset_id === this.props.assetView){
                assetDescription = asset.description
            }
            return assetDescription
        })
        return (
            <div className="category_viewer">
                <button onClick={() => this.deleteAssetConfirm(this.props.assetView, this.props.user.user_id)} className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>Delete Asset</button>
                <h2 className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>{assetTitle}</h2>
                <button onClick={() => { this.props.toggleModal('cat') }} className={this.props.assetView === 0 ? "addCat_button addCat_hide" : "addCat_button addCat_show"}>
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
    deleteAsset
}

export default connect(mapStateToProps, outputActions)(Categories);