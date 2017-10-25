import React, { Component } from 'react';
import Header from '../Header/Header';
import UserInputForm from '../UserInputForm/UserInputForm';
import LogDetailView from '../Logs/LogDetailView/LogDetailView';
import AllLogViewer from '../Logs/AllLogViewer/AllLogViewer';
import Assets from './../Assets/Assets';
import Footer from './../Footer/Footer';
import { connect } from 'react-redux';
import { getUserInfo, getRemindersOverdue, getRemindersComingUp } from '../../ducks/reducer';
import './Dashboard.css';

class Dashboard extends Component {

componentDidMount(){
    this.props.getUserInfo().then(() => {
        this.props.getRemindersOverdue(this.props.user.user_id);
        this.props.getRemindersComingUp(this.props.user.user_id);
    })
}
    render() {
        // console.log("USER ID: ", this.props.user.user_id);
        return (
            <div className="dash_main_container">
                <Header />
                <section className="dash_body">
                    <LogDetailView />
                    <AllLogViewer />
                    <UserInputForm />
                    <Assets />
                </section>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, { getUserInfo, getRemindersOverdue, getRemindersComingUp }  )(Dashboard);
