import React, { Component } from 'react';
import Header from '../Header/Header';
import UserInputForm from '../UserInputForm/UserInputForm';
import LogDetailView from '../Logs/LogDetailView/LogDetailView';
import AllLogViewer from '../Logs/AllLogViewer/AllLogViewer';
import Assets from './../Assets/Assets';
import Footer from './../Footer/Footer';
import './Dashboard.css';

export default class Dashboard extends Component {

    render() {
        
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
