import React, { Component } from 'react';
import Header from '../Header/Header';
import UserInputForm from '../UserInputForm/UserInputForm';
import Assets from './../Assets/Assets';
import Footer from './../Footer/Footer';
import { connect } from 'react-redux';
import { getUserInfo, getRemindersOverdue, getRemindersComingUp  } from '../../ducks/reducer';
import './Dashboard.css';

class Dashboard extends Component {

componentDidMount(){

    this.props.getUserInfo();
    console.log("THIS.PROPS.USER.USERID: ", this.props.user.user_id)
    if (this.props.user.user_id) {
        this.props.getRemindersOverdue(this.props.user.user_id);
        this.props.getRemindersComingUp(this.props.user.user_id);
    }
  
}
    render() {
        
        return (
            <div className="dash_main_container">
                <Header />
                <section className="dash_body">
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
