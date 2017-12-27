import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs,Tab} from 'material-ui/Tabs';
import './AppBar.css';
import SearchBar from 'material-ui-search-bar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
const tabstyle={
  position:'absolute',
  left:200,
  width:480,
  height:40,
}
const navbarprofpic={
  position:'absolute',
  marginLeft:1230,
  marginTop:10
}
const buttonStyle={
  position:'absolute',
  marginLeft:1280,
  marginTop:7,
  backgroundColor:'#1DA1F2',
  borderRadius:25,
}
const labelStyle={
  textTransform:"none",
  fontWeight:"bold",
  fontSize:14,
  fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif" ,
  cursor:'pointer',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color:'#FFFFFF'
}
export class Navigation extends React.Component{
  render(){
    return(
      <AppBar 
      showMenuIconButton={false} 
      style={{height:"48px",backgroundColor:"#FFFFFF",zDepth:"0",position:"fixed",top:"0px",borderBottom:"2px",borderColor:"#ACB1B4"}}
      zDepth="0px"
      >
        <Tabs style={tabstyle} tabItemContainerStyle={{background: "#FFFFFF"}} inkBarStyle = {{background: '#1B95E0' , hoverColor: '#1B95E0'}}> 
          <Tab><i class="fas fa-home" id="homeicon"></i><span id="Home">Home</span>
          <i class="fas fa-bolt" id="momentsicon"></i><span id="Moments">Moments</span>
          <i class="fas fa-bell" id="notificon"></i><span id="Notifications">Notifications</span>
          <i class="fas fa-envelope" id="messageicon"></i><span id="Messages">Messages</span></Tab>
          <Tab disabled={true}></Tab>
          <Tab disabled={true}></Tab>
          <Tab disabled={true}></Tab>
        </Tabs>
        <i class="fab fa-twitter" id="twitter_icon"></i>
            <input type="text" id="search" placeholder="Search Twitter" />
            <span id="searchicon"><i class="fas fa-search"></i></span>
            <Avatar src={this.props.profpic} size={32} style={navbarprofpic} />
            <FlatButton label="Tweet" style={buttonStyle}
             labelStyle={labelStyle} hoverColor ="#1B95E0" />
      </AppBar>
    )
  }
} 