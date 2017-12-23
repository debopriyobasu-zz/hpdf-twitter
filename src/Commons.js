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
    backgroundColor: '#E8F4FB',
     marginLeft: 10,
     marginRight: 10,
     marginTop: 10,
     float:'left',
  };
const trendsstyle ={
    height: 420,
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
}
const policystyle ={
    height: 156,
    width: 290,
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
const tweetboxProfpicStyle = {
    display:'inline',
    position:'relative',
    top:3,
    left:16,
}
const tweetboxinnerpapercomponent ={
    position: 'absolute',
    top:68,
    left:565,
    border:1,
    borderRadius: 10,
    borderStyle:'solid',
    borderColor:'#B3E5FC',
}
export class ProfileCard extends React.Component{
    render(){
        return(
            <div>
                <Paper style={cardstyle} zDepth={0} rounded={false}>
                <img src={this.props.bgimg} alt="Debopriyo Cover Photo" width="290" height="95"/>
                <Avatar src={this.props.profpic} size={68} style={profstyle}/>
                <a href="https://twitter.com/debopriyobasu" className="myname"><div className="name">Debopriyo Basu</div></a>
                <div id="parentstats">
                    <div id="handle">@<a href="https://twitter.com/debopriyobasu">debopriyobasu</a></div>
                    <div className="stats" id="tweetinfo">Tweets</div>
                    <div className="stats" id="followinginfo">Following</div>
                    <div className="stats" id="followerinfo">Followers</div>
                    <div className="numbers" id="tweets">373</div>
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
                    <div id="trends-wrapper">
                        <div className="name">Trends for you<div className="dot">.</div><div className="subtext">Change</div></div>
                        <div className="trendingnow">
                            <div className="hashtags">#INDvSL</div>
                            <div className="subheader">68.4k Tweets</div>
                        </div>
                        <div className="trendingnow">
                            <div className="hashtags">Arsenal</div>
                            <div className="subheader">347k Tweets</div>
                        </div>
                        <div className="trendingnow">
                            <div className="hashtags">#TigerZindaHai</div>
                            <div className="subheader">148k Tweets</div>
                        </div> 
                        <div className="trendingnow">
                            <div className="hashtags">#2GScamVerdict</div>
                            <div className="subheader">40.8k Tweets</div>
                        </div>
                        <div className="trendingnow">
                            <div className="hashtags">#FridayFeeling</div>
                            <div className="subheader">@HasuraHQ is Tweeting about this</div>
                        </div>
                        <div className="trendingnow">
                            <div className="hashtags">#nationalmathematicsday</div>
                            <div className="subheader">3482 Tweets</div>
                        </div>
                        <div className="trendingnow">
                            <div className="hashtags">#ARSLIV</div>
                            <div className="subheader">Arsenal v Liverpool</div>
                        </div>    
                        <div className="trendingnow">
                            <div className="hashtags">UN Security Council</div>
                            <div className="subheader">11.2K Tweets</div>
                        </div>                  
                    </div>
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
                    <div id="tweetboxcontainer">
                        <Avatar src={this.props.profpic} size={32} style={tweetboxProfpicStyle} />
                        <Paper style={tweetboxinnerpapercomponent} zDepth={0}>
                            <input type="text" id="textbox" placeholder="What's happening?" /> 
                        </Paper>
                    </div>
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