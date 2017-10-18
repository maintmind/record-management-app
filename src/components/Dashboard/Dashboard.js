import React, { Component } from 'react';
import Assets from './../Assets/Assets';
import Footer from './../Footer/Footer';

import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dash_main_container">
                <h2>- Header</h2>
                <Assets />
                <Footer />
            </div>
        );
    }
}