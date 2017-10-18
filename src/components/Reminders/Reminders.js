import React, { Component } from 'react';
// import Redux stuff

export default class Reminders extends Component {
    render () {
        return (
            <div>Here is the Reminders component. { /* display loading until reminders are fetched */ }</div>
        );
    }

    componentDidMount(){
        // get all reminders for user
        // put imported Redux function here
    }
}

mapStateToProps(){
    
}
// connect to Redux