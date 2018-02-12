import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import './PeopleCard.css';
const followtext={
    textTransform:"none",
    color:"#2399E1",
    fontWeight:"bold",
    fontSize:12,
    fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif" 
}
const followbutton={
    border:1,
    borderStyle:'solid',
    borderColor:'#2399E1',
    borderRadius:25,
    height:30,
    marginTop:8,
    position:'relative',
    top:-40,
    left:70
}
export class PeopleCard extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
            <Paper zDepth={0} style={{height:'289px',width:'290px'}}>
            <div>
                <img src={this.props.bgimg} alt="bgimg" style={{width:'290px',height:'90px'}}/>
                <Avatar src={this.props.profpic} size={70} style={{borderRadius:'50%',border:'3px',borderColor:'#FFFFFF',position:'relative',top:'-30px',left:'15px',borderStyle:'solid'}}/>
                <FlatButton label="Follow" primary={true} style={followbutton}
                                labelStyle={followtext} hoverColor ="#E8F4FB" />
                  <IconMenu style={{position:'relative',top:'-35px',left:'65px'}} iconStyle={{color:'#657786'}}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem>Tweet to {this.props.handle}</MenuItem>
      <MenuItem primaryText="Add or remove from lists" />
      <Divider />
      <MenuItem>Mute {this.props.handle}</MenuItem>
      <MenuItem>Block {this.props.handle}</MenuItem>
      <MenuItem>Report {this.props.handle}</MenuItem>
      <Divider />
      <MenuItem primaryText="Embed this profile" />
    </IconMenu>
    <div className='name' id='peoplename' style={{position:'relative',top:'-30px',left:'15px'}}>{this.props.name}<i class="fas fa-check-circle fa-xs" id='verify'></i></div>
    <div id='peoplehandle' style={{color:'#66757f',fontFamily:"Segoe UI,Arial,sans-serif",fontSize:'14px',position:'relative',top:'-30px',left:'15px'}}>{this.props.handle}</div>
                <div style={{padding:'15px',color:'#14171a',fontFamily:'Segoe UI,Arial,sans-serif',fontSize:'14px',position:'relative',top:'-40px'}}>{this.props.description}</div>
                </div>
            </Paper>
            </MuiThemeProvider>
        )
    }
}
