import React, { Component } from 'react';
import "./UserInputForm.css"
import { connect } from 'react-redux';
import { toggleModal } from './../../ducks/reducer';

// import Redux stuff

class UserInputForm extends Component {
    constructor() {
        super()
    }

    displayController(props) {


        var inputHeader = () => {
            {/* This displays on the top of each form */}
            return (
                <div>
                    <div>Title:</div><div><input placeholder="" /></div>
                    <div>Description:</div><div><textarea placeholder="" /></div>
                </div>
            )
        }

        if (this.props.modalToggler === null) {
            return (<div></div>)

        } else if (this.props.modalToggler === "asset") {
            return (
                <div>
                    {inputHeader()}
                    <div className="userinputform"><button>Submit New Asset</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "cat") {
            return (
                <div>
                    {inputHeader()}
                    <div className="userinputform"><button>Submit New Category</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "log") {
            return (
                <div>
                    {inputHeader()}
                    <div>Date of Service:</div> <div><input type="date" placeholder="" /></div>
                    <div>Cost:</div> <div><input placeholder="" /></div>
                    <div><button>Upload Photo</button></div>
                    <div>Image Preview Here</div>
                    <div><button>Submit New Log</button></div>
                </div>
            )
        } else if (this.props.modalToggler === "reminder") {
            return (
                <div>
                    {inputHeader()}
                    <div>Date Due:</div> <div><input type="date" placeholder="" /></div>
                    <div><button>Submit New Reminder</button></div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="userinputform">
                <div>{this.displayController()}</div>
            </div>
        );
    }

    componentDidMount() {
        // put imported Redux function here
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { toggleModal })(UserInputForm)