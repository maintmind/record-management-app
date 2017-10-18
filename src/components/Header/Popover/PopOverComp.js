import React, {Component} from 'react';
import Popover from 'material-ui/Popover';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopOverComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            open:false,


        };

    }

    componentDidMount(){
        
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


    render(){

        let overdueStyle = {backgroundColor: "red", height: "40px", width: "40px"} //style for overdue reminders
        let upcomingStyle = {backgroundColor: "orange", height: "40px", width: "40px"} //style for upcoming reminders

        return(
             {this.}
            
            <div>
                <Badge 
                    badgeContent={2} //insert number of user's reminders
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
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        >
                            <Menu>
                                <MenuItem primaryText="Reminders dfgkj adkfjaek asdffjd aakjdfjdj dfl adfl fjfjf" />
                                
                            </Menu>
                    </Popover>
                </Badge>    
            </div>
            
            
            
        
        )
    }
}