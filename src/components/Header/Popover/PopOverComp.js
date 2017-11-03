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

        this.overdueStyle = { backgroundColor: "red", height: "25px", width: "25px", display: "flex" } //style for overdue reminders
        this.upcomingStyle = { backgroundColor: "orange", height: "25px", width: "25px" }
        this.upcomingStyleMenu = { backgroundColor: "#fffff", color: "#E38E37", fontWeight: "700" }
        this.overdueStyleMenu = { backgroundColor: "#ffffff", color: "#E33629", fontWeight: "700" }

        this.handleCompleteOverDueReminder = this.handleCompleteOverDueReminder.bind(this);
        
    }

    componentDidMount(props) {
        // this.props.getRemindersOverdue(this.props.user.user_id);
        // this.props.getRemindersComingUp(this.props.user.user_id);

        // const noOverdueRemindersMessage = <MenuItem primaryText="You have no overdue reminders." className="hide" />
        // const noUpcomingRemindersMessage = <MenuItem primaryText="You have no upcoming reminders." className="hide" />
    }

    handleCompleteOverDueReminder(){
        console.log("handleCompleteOverDueReminder")
    }
    
    handleCompleteUpcomingReminder(){
        console.log("handleUpcomingReminder")
    }
    
    //style for upcoming reminders
    componentWillReceiveProps(nextProps) {
        this.noRemindersMessage = <MenuItem key={"You have no reminders."} primaryText="You have no reminders." className="hide" />
        this.popOverDisplayControl = [];
        // const numUpcoming = nextProps.reminderListUpcoming ? nextProps.reminderListUpcoming.length : 0
        // const numOverdue = nextProps.reminderListOverdue ? nextProps.reminderListOverdue.length : 0
        this.popOverDisplayControl.push(<MenuItem style={this.overdueStyleMenu} disabled={true} key={"overdue reminders"} primaryText={"Overdue:"}/>)
        const inlineStyle = { justifyContent: 'flex' }
        // const style = { width: "30vw" }
        // const overDueButtons = (<div><FontIcon className="material-icons" onClick={console.log("edit")}>edit</FontIcon>
        //     <FontIcon className="material-icons" onClick={console.log("cancel")}>cancel</FontIcon></div>)

        var overdueReminders = nextProps.reminderListOverdue.map((reminder, i) => {
                return (
                    <div style={inlineStyle}>
                        <MenuItem key={reminder.remind_id}
                            primaryText={reminder.title + " - " + reminder.description}
                            onClick={ () => this.handleCompleteOverDueReminder() }
                            leftIcon={<FontIcon className="material-icons">forward</FontIcon>}
                        >
                        </MenuItem>
                    </div>
                )
            })

        this.popOverDisplayControl.push(overdueReminders)
        // const upcomingButtons = (<div key={'a'}><FontIcon className="material-icons">edit</FontIcon>
        //     <FontIcon className="material-icons">cancel</FontIcon></div>)
        var upcomingReminders =
            nextProps.reminderListUpcoming.map((reminder, j) => {
                return (
                    <div>
                        <MenuItem key={reminder.remind_id}
                            primaryText={reminder.title + " - " + reminder.description}
                            onClick={()=> this.handleCompleteUpcomingReminder() }
                            leftIcon={<FontIcon className="material-icons">forward</FontIcon>}
                        >
                        </MenuItem>
                    </div>
                )
            })
        this.popOverDisplayControl.push(<Divider key={"divider"}/>)
        this.popOverDisplayControl.push(<MenuItem key={"upcoming reminders"} disabled={true} style={this.upcomingStyleMenu} primaryText={"Due in Next 7 Days: "} />)
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