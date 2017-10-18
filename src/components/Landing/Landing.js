import React, { Component } from 'react';
import './Landing.css';

export default class Landing extends Component {
    render () {
        return (
     
                
            <div className="main-container">
              {/* <div className="header">
                  HEADER</div> */}
               
                <div className="heading">
                    <span className="title1">MaintenanceMinder</span>
                    <span className="title2">Manage your most important assets!</span>
                    <button className="register" href={process.env.REACT_APP_LOGIN} >
                        REGISTER NOW
                        </button>
                    {/* <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a> */}
                </div>
                {/* <div className="footer">
                    FOOTER
                </div> */}
            </div>
      

        );
    }
}