import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLogs, toggleModal, catDisp, deleteLog, toggleEditMenu, toggleAllLogsView, updateLogName, updateLogDescription, updateLogComplete, updateLogCost } from '../../../ducks/reducer';
import './AllLogViewer.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './AllLogViewer.css';

class AllLogViewer extends Component {
    // componentDidMount() {
    //     this.props.getAllLogs(this.props.user.user_id)
    // }

    confirmModal(log_id, user_id) {
        confirmAlert({
            title: 'Are you sure?',
            message: 'Deleting this log will delete all information and images associated with it!',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => this.props.deleteLog(log_id, user_id),
            onCancel: () => { },
        })
    };

    imagePreview(imageUrl) {
        let imageArr;
        imageUrl[0] === "{" ? imageUrl = imageUrl.substring(1) : ()=>{},
            imageUrl[imageUrl.length - 1] === "}" ? imageUrl = imageUrl.substring(0, imageUrl.length - 1) : null,
            imageArr = imageUrl.split(",")
        return imageArr
    }

    toggleAddEditModal(str, bl, obj) {
        this.props.toggleEditMenu(bl)
        this.props.toggleModal(str)
        if (obj) {
            this.props.updateLogName(obj.title)
            this.props.updateLogDescription(obj.description)
            this.props.updateLogComplete(obj.date_complete)
            this.props.updateLogCost(obj.cost)
        }
    }

    render() {
        const catSpecLogs = this.props.logList.filter((c, i) => {
            return c.cat_id === this.props.catView
        })

        const assetDesc = () => {
            const assets = this.props.assetList
            for (var i = 0; i < assets.length; i++) {
                if (assets[i].asset_id === this.props.assetView) {
                    return assets[i].description
                }
            }
        }

        const catName = () => {
            const cats = this.props.categoryList
            for (var i = 0; i < cats.length; i++) {
                if (cats[i].cat_id === this.props.catView) {
                    return cats[i].title
                }
            }
        }

        const displayLogs = catSpecLogs.map((c, i, arr) => {
            const completionDate = c.date_complete ? (c.date_complete).substring(0, (c.date_complete).indexOf('T')) : null
            let result = (
                <section key={i} className="log_row">
                    <div className="log_buttons">
                        <button onClick={() => this.toggleAddEditModal('log', true, c)} className="edit_button fa fa-pencil-square-o" ></button>
                        <button className="fa fa-trash delete_button" onClick={() => this.confirmModal(c.log_id, this.props.user.user_id)}></button>
                    </div>
                    <div className="log_info">
                        <div className="log_title">{c.title}</div>
                        <div className="log_desc"><i>{c.description}</i></div>
                        <div className="log_date">{completionDate}</div>
                        <div className="log_cost">{c.cost}</div>
                        <div className="img-thumbnails">
                            {c.img !== null ? this.imagePreview(c.img).map((img) => <a key={img} href={img} className="log_img" target="blank"><img className="log_img" src={img} alt="no images available" /></a>)
                                : null}
                        </div>
                    </div>
                    {/* <a href={c.img} className="log_img" target="blank"><img src={c.img} alt="no images available" /></a> */}
                </section>
            )
            return result;
        })

        return (
            <div className={this.props.allLogsView ? "all_logs_modal addLog_show" : "addLog_hide"}>
                <div className="all_log_nav">
                    <h2>Showing logs for {catName()} in {assetDesc()}</h2>
                    <button onClick={() => { this.toggleAddEditModal('log', false) }} className={this.props.catView === 0 ? "addLog_button addLog_hide" : "addLog_button  addLog_show"}>ADD LOG</button>
                    <button className="all_log_close" onClick={() => this.props.toggleAllLogsView(!this.props.allLogsView)}>&#10006;</button>
                </div>
                <section className="all_log_header">
                    <div className="log_header_title">TITLE</div>
                    <div className="log_desc">DESCRIPTION</div>
                    <div className="log_date">DATE COMPLETE</div>
                    <div className="log_cost">COST</div>
                    <div><small>CLICK IMAGE TO ENLARGE</small></div>
                </section>
                <section className="all_log_view">
                    {displayLogs}
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    getAllLogs,
    toggleModal,
    catDisp,
    deleteLog,
    toggleEditMenu,
    toggleAllLogsView,
    updateLogName,
    updateLogDescription,
    updateLogComplete,
    updateLogCost
}

export default connect(mapStateToProps, outputActions)(AllLogViewer);