import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './ProfileCard.css';
const cardstyle = {
    height: 213,
    width: 290,
    textAlign: 'center',
    position:'absolute',
    top:56,
    marginLeft:-100,
    
  };
  const profstyle ={
    display: 'inline-block',
    position:'relative',
    top: -35,
    float:'left',
    marginLeft:10,
    borderRadius:'50%',
    border: 3,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
};
export class ProfileCard extends React.Component{
    render(){
        return(
                <Paper style={cardstyle} zDepth={0} rounded={false}>
                    <img src={this.props.bgimg} alt="Debopriyo" width="290" height="95"/>
                    <Avatar src={this.props.profpic} size={68} style={profstyle}/>
                    <a href="https://twitter.com/debopriyobasu" className="myname"><div className="name">Debopriyo Basu</div></a>
                    <div id="parentstats">
                        <div id="handle">@<a href="https://twitter.com/debopriyobasu">debopriyobasu</a></div>
                        <div className="stats" id="tweetinfo">Tweets</div>
                        <div className="stats" id="followinginfo">Following</div>
                        <div className="stats" id="followerinfo">Followers</div>
                        <div className="numbers" id="tweets">373</div>
                        <div className="numbers" id="following">39</div>
                        <div className="numbers" id="followers">33</div>
                    </div>
                </Paper>
        )
    }
}