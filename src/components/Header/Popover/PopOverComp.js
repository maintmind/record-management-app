import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
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
        this.props.getRemindersComingUp(1);
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

        const noOverdueRemindersMessage = <MenuItem primaryText="You have no overdue reminders." className="hide" />
        const noUpcomingRemindersMessage = <MenuItem primaryText="You have no upcoming reminders." className="hide" />
        const noRemindersMessage = <MenuItem primaryText="You have no reminders." className="hide" />

        const popOverDisplayControl = [];
        popOverDisplayControl.push(<MenuItem primaryText="Overdue Reminders:" disabled="true"/>)

        const overdueReminders =
            this.props.reminderListOverdue.map((reminder, i) => {
                return (
                    <div>
                        <MenuItem key={i} primaryText={reminder.title + " " + reminder.description}>
                            <button>Mark Complete</button>
                        </MenuItem>

                    </div>
                )


            })
        popOverDisplayControl.push(overdueReminders)

        const upcomingReminders =
            this.props.reminderListOverdue.map((reminder, i) => {
                return (
                    <div>
                        <MenuItem key={i} primaryText={reminder.title + " " + reminder.description}>
                            <button>Mark Complete</button>
                        </MenuItem>

                    </div>
                )
            })
        popOverDisplayControl.push(<Divider />)    
        popOverDisplayControl.push(<MenuItem primaryText="Upcoming:" disabled="true"/>)
        popOverDisplayControl.push(upcomingReminders)

        let overdueStyle = { backgroundColor: "red", height: "25px", width: "25px" } //style for overdue reminders
        let upcomingStyle = { backgroundColor: "orange", height: "25px", width: "25px" } //style for upcoming reminders

        return (


            <div>
                <RaisedButton
                    onClick={this.handleTouchTap}
                    label="Reminders"
                />
                <Badge
                    badgeContent={this.props.reminderListUpcoming.length} //insert number of user's reminders
                    primary={true}
                    badgeStyle={upcomingStyle} //need a ternary to change the style if a reminder is upcoming (see upcomingStyle above)
                //need to bulid a ternary that builds an additional badge if there are both pending and overdue reminders

                />
                <Badge
                    badgeContent={this.props.reminderListOverdue.length} //insert number of user's reminders
                    primary={true}
                    badgeStyle={overdueStyle} //need a ternary to change the style if a reminder is upcoming (see upcomingStyle above)
                //need to bulid a ternary that builds an additional badge if there are both pending and overdue reminders

                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        {this.props.reminderListOverdue.length === 0 ?
                            noRemindersMessage :
                            popOverDisplayControl
                        }
                        



                    </Menu>
                </Popover>
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