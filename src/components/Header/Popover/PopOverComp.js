import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import '../Header.css';
import { connect } from 'react-redux';
import { getRemindersOverdue } from '../../../ducks/reducer';
import { getRemindersComingUp } from '../../../ducks/reducer';
import { setReminderStatusToClosed } from '../../../ducks/reducer';

class PopOverComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        };


        this.overdueStyle = { backgroundColor: "red", height: "25px", width: "25px" } //style for overdue reminders
        this.upcomingStyle = { backgroundColor: "orange", height: "25px", width: "25px" }

    }

    componentDidMount(props) {
        this.props.getRemindersOverdue(1);
        this.props.getRemindersComingUp(1);

        // const noOverdueRemindersMessage = <MenuItem primaryText="You have no overdue reminders." className="hide" />
        // const noUpcomingRemindersMessage = <MenuItem primaryText="You have no upcoming reminders." className="hide" />
    }

    //style for upcoming reminders
    componentWillReceiveProps(props) {
        this.noRemindersMessage = <MenuItem primaryText="You have no reminders." className="hide" />
        this.popOverDisplayControl = [];


        this.popOverDisplayControl.push(<MenuItem primaryText="Overdue Reminders:" />)

        const inlineStyle = {justifyContent: 'flex'}
        const iconStyles = {marginRight: 24}

        var overdueReminders =

            this.props.reminderListOverdue.map((reminder, i) => {
                return (
                    <div style={inlineStyle}>
                        <MenuItem key={reminder.remind_id}
                         primaryText={reminder.title + " " + reminder.description + " " + reminder.status}
                         
                         rightIcon={<i class="material-icons"
                            onClick={() => this.props.setReminderStatusToClosed(reminder.remind_id, "reminderListOverdue")}
                         
                         >cancel</i>}
                          >
                              
                        </MenuItem>
                    </div>
                )
            })

        this.popOverDisplayControl.push(overdueReminders)

        var upcomingReminders =
            this.props.reminderListUpcoming.map((reminder, j) => {


                return (
                    <div>
                        <MenuItem key={reminder.remind_id}
                         primaryText={reminder.title + " " + reminder.description + " " + reminder.status}
                         /* onClick={() => this.props.setReminderStatusToClosed(reminder.remind_id, "reminderListUpcoming")} */
                         rightIcon={<i class="material-icons"
                                    onClick={() => this.props.setReminderStatusToClosed(reminder.remind_id, "reminderListOverdue")}
                         
                         >
                             
                             cancel</i>}
                         >
                        

                        </MenuItem>

                    </div>
                )
            })

        this.popOverDisplayControl.push(<Divider />)
        this.popOverDisplayControl.push(<MenuItem primaryText="Upcoming:" />)
        this.popOverDisplayControl.push(upcomingReminders)

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


        return (


            <div>
                <RaisedButton
                    onClick={this.handleTouchTap}
                    label="Reminders"
                />
                <Badge
                    badgeContent={this.props.reminderListUpcoming.length} //insert number of user's reminders
                    primary={true}
                    badgeStyle={this.upcomingStyle} //need a ternary to change the style if a reminder is upcoming (see upcomingStyle above)
                //need to bulid a ternary that builds an additional badge if there are both pending and overdue reminders

                />
                <Badge
                    badgeContent={this.props.reminderListOverdue.length} //insert number of user's reminders
                    primary={true}
                    badgeStyle={this.overdueStyle} //need a ternary to change the style if a reminder is upcoming (see upcomingStyle above)
                //need to bulid a ternary that builds an additional badge if there are both pending and overdue reminders

                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}>
                    <Menu>
                        {this.props.reminderListOverdue.length === 0 && this.props.reminderListUpcoming.length === 0 ?
                            this.noRemindersMessage :
                            this.popOverDisplayControl
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
    setReminderStatusToClosed: setReminderStatusToClosed
}

export default connect(mapStateToProps, outputActions)(PopOverComp);