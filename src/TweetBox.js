import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './TweetBox.css';
const tweetboxstyle = {
    height: 58,
    width: 588,
    backgroundColor: '#E8F4FB',
     marginLeft: 10,
     marginRight: 10,
     marginTop: 10,
     position:'absolute',
     top:48,
     left:490
  };
  const tweetboxProfpicStyle = {
    display:'inline',
    position:'relative',
    top:13,
    left:28,
};
export class TweetBox extends React.Component{
    render(){
        return(
                <Paper style={tweetboxstyle} zDepth={0}>
                        {/* <span id="picicon"><i class="fas fa-image"></i></span> */}
                        <Avatar src={this.props.profpic} size={32} style={tweetboxProfpicStyle} />
                        <input type="text" id="textbox" placeholder="What's happening?" />
                        
                </Paper>
        )
    }
}