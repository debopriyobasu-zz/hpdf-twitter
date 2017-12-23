import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './Commons.css';
const cardstyle = {
  height: 213,
  width: 290,
  textAlign: 'center',
  marginTop: 10,
  float:'left'
};
const tweetboxstyle = {
    height: 58,
    width: 588,
    // position: 'relative',
    // left: 500,
    // top: -633,
    backgroundColor: '#E8F4FB',
     marginLeft: 10,
     marginRight: 10,
     marginTop: 10,
     float:'left',
  };
const trendsstyle ={
    height: 406,
    width: 290,
    display: 'inline-block',
    marginTop: 10,
    position:'absolute',
    top:275,
    right:1113
}

  const followstyle ={
    marginTop: 10,
    height: 290,
    width: 290,
    float:'left',
    // display: 'inline-block',
    // position:'relative',
    // left: 1098,
    // top: -700,
}
const policystyle ={
    // marginLeft:5,
    height: 156,
    width: 290,
    // display: 'inline-block',
    // position:'relative',
    // left: 1098,
    // top: -695,
    position:'absolute',
    left:1095,
    top:360
}
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
}
export class ProfileCard extends React.Component{
    render(){
        return(
            <div>
                <Paper style={cardstyle} zDepth={0} rounded={false}>
                <img src={this.props.bgimg} alt="Debopriyo Cover Photo" width="290" height="95"/>
                <Avatar src={this.props.profpic} size={68} style={profstyle}/>
                <a href="https://twitter.com/debopriyobasu" className="myname"><div id="name">Debopriyo Basu</div></a>
                <div id="parentstats">
                    <div id="handle">@<a href="https://twitter.com/debopriyobasu" className="twhandle">debopriyobasu</a></div>
                    <div className="stats" id="tweetinfo">Tweets</div>
                    <div className="stats" id="followinginfo">Following</div>
                    <div className="stats" id="followerinfo">Followers</div>
                    <div className="numbers" id="tweets">372</div>
                    <div className="numbers" id="following">41</div>
                    <div className="numbers" id="followers">31</div>
                    </div>
                </Paper>
                </div>
        )
    }
}
export class TrendsBox extends React.Component{
    render(){
        return(
            <div>
                <Paper style={trendsstyle} zDepth={0} rounded={false}>
                </Paper>
                </div>
        )
    }
}
export class TweetBox extends React.Component{
    render(){
        return(
            <div>
                <Paper style={tweetboxstyle} zDepth={0}>
                </Paper>
                </div>
        )
    }
}
export class WhoToFollow extends React.Component{
    render(){
        return(
            <div>
                <Paper style={followstyle} zDepth={0} rounded={false}>
                </Paper>
                </div>
        )
    }
}
export class PolicyBox extends React.Component{
    render(){
        return(
            <div>
                <Paper style={policystyle} zDepth={0} rounded={false}>
                </Paper>
                </div>
        )
    }
}