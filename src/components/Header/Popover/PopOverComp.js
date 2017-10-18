import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import '../Header.css';
import { connect } from 'react-redux';
import { getRemindersOverdue } from '../../../ducks/reducer';
import { getRemindersComingUp } from '../../../ducks/reducer';

class PopOverComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,


        };

    }

    componentDidMount() {
        this.props.getRemindersOverdue(1);
        // this.props.getRemindersComingUp();
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };



    render() {

        const noRemindersMessage = <MenuItem primaryText="You have no current reminders." className="hide" />

        const popOverDisplayControl =
            this.props.reminderList.map((reminder, i) => {
                return (
                    <div>
                        <MenuItem key={i} primaryText={reminder.title + " " + reminder.description}><button>Mark Complete</button></MenuItem>
                        
                    </div>
                )


            })
     



        let overdueStyle = { backgroundColor: "red", height: "40px", width: "40px" } //style for overdue reminders
        let upcomingStyle = { backgroundColor: "orange", height: "40px", width: "40px" } //style for upcoming reminders

        return (


            <div>
                <Badge
                    badgeContent={this.props.reminderList.length} //insert number of user's reminders
                    primary={true}
                    badgeStyle={overdueStyle} //need a ternary to change the style if a reminder is upcoming (see upcomingStyle above)
                //need to bulid a ternary that builds an additional badge if there are both pending and overdue reminders

                >
                    <RaisedButton
                        onClick={this.handleTouchTap}
                        label="Reminders"
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu>
                            {this.props.reminderList.length === 0 ?
                            noRemindersMessage :
                            popOverDisplayControl
                            }
                          

                        </Menu>
                    </Popover>
                </Badge>
            </div>




        )
    }
}

function mapStateToProps(state) {
    return state
}

let outputActions = {
    getRemindersOverdue: getRemindersOverdue,
    getRemindersComingUp: getRemindersComingUp,
}

export default connect(mapStateToProps, outputActions)(PopOverComp);