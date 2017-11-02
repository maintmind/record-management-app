import React, { Component } from 'react';
import "./UserInputForm.css";
import { connect } from 'react-redux';

import AssetModal from './AssetModal/AssetModal';
import CatModal from './CatModal/CatModal';
import LogModal from './LogModal/LogModal';
import ReminderModal from './ReminderModal/ReminderModal';

class UserInputForm extends Component {
    displayController(props) {
        if (this.props.modalToggler === null) {
            return (<div></div>)
        } else if (this.props.modalToggler === "asset") {
            return <AssetModal />
        } else if (this.props.modalToggler === "cat") {
            return <CatModal />
        } else if (this.props.modalToggler === "log") {
            return <LogModal />
        } else if (this.props.modalToggler === "reminder") {
            return <ReminderModal />
        }
    }

    render() {
        const displayModal = () => {
            if (this.props.modalToggler === null) {
                return "hide_modal"
            } else if(this.props.modalToggler === "asset" || this.props.modalToggler === "cat") {
                return "sm_modal_popout_container show_modal"
            } else {
                return "modal_popout_container show_modal"
            }
        }
        return (
            <div className={displayModal()}>
                {this.displayController()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(UserInputForm)