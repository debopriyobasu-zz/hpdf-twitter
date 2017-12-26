import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import './WhoToFollow.css';

const followstyle ={
    marginTop: 10,
    height: 300,
    width: 290,
    position:'absolute',
    left:1100,
    top:48
};
const buttonStyle ={
    border:1,
    borderStyle:'solid',
    borderColor:'#2399E1',
    borderRadius:25,
    height:30,
    marginTop:8,
};
const labelStyle={
    textTransform:"none",
    color:"#2399E1",
    fontWeight:"bold",
    fontSize:12,
    fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif" 
};
export class WhoToFollow extends React.Component{
    render(){
        return(
                <Paper style={followstyle} zDepth={0} rounded={false}>
                    <div id="Container">
                        <div className="name">Who to follow<span className="dot">.</span><span className="subtext">Refresh</span><span className="dot">.</span><span className="subtext">View all</span></div>
                            <div className="InternalContainer">
                                <Avatar src='emberjs.png' size={48} className="FollowAvatar"/>
                                <div className="PersonToFollowName">EmberJS<div className="PersonToFollowHandle">@emberjs</div></div>
                                <FlatButton label="Follow" primary={true} style={buttonStyle}
                                labelStyle={labelStyle} hoverColor ="#E8F4FB" />
                            </div>
                            <Divider />
                            <div className="InternalContainer">
                                <Avatar src='reactnative.jpg' size={48} className="FollowAvatar"/>
                                <div className="PersonToFollowName">React Native<div className="PersonToFollowHandle">@reactnative</div></div>
                                <FlatButton label="Follow" primary={true} style={buttonStyle}
                                labelStyle={labelStyle} hoverColor ="#E8F4FB" />
                            </div>
                            <Divider />
                            <div className="InternalContainer">
                                <Avatar src='ionic.jpg' size={48} className="FollowAvatar"/>
                                <div className="PersonToFollowName">ionic<div className="PersonToFollowHandle">@ionicframework</div></div>
                                <FlatButton label="Follow" primary={true} style={buttonStyle}
                                labelStyle={labelStyle} hoverColor ="#E8F4FB" />
                            </div>
                            <Divider />
                            <div id="Connect" className="subtext">Connect other address books</div>
                        </div>     
                </Paper>
        )
    }
}