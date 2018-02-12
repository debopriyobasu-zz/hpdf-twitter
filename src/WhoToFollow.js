import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import './WhoToFollow.css';

var followstyle ={
    height: 300,
    width: 290,
    marginLeft:802,
    marginTop:58
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
    fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif",
    verticalAlign:'middle',
    horizontalAlign:'middle',
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
                                <span id="cancel"><i class="fas fa-times"></i></span>
                                <FlatButton label="Follow" primary={true} style={buttonStyle}
                                labelStyle={labelStyle} hoverColor ="#E8F4FB" />
                            </div>
                            <Divider />
                            <div className="InternalContainer">
                                <Avatar src='reactnative.jpg' size={48} className="FollowAvatar"/>
                                <div className="PersonToFollowName">React Native<div className="PersonToFollowHandle">@reactnative</div></div>
                                <span id="cancel"><i class="fas fa-times"></i></span>
                                <FlatButton label="Follow" primary={true} style={buttonStyle}
                                labelStyle={labelStyle} hoverColor ="#E8F4FB" />
                            </div>
                            <Divider />
                            <div className="InternalContainer">
                                <Avatar src='ionic.jpg' size={48} className="FollowAvatar"/>
                                <div className="PersonToFollowName">ionic<i class="fas fa-check-circle fa-xs" id='verify'></i><div className="PersonToFollowHandle">@ionicframework</div></div>
                                <span id="cancel"><i class="fas fa-times"></i></span>
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