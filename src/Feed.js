import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import './Feed.css';
const feedstyle={
    display:'inline-block',
    marginLeft: 10,
    marginRight: 10,
    position:'absolute',
    left:390
    
}
const profstyle = {
    border:'none',
    marginTop:3,
    marginRight:3,
}
const divstyle={
    width:588,
    paddingLeft:'none !important',
}

export class Feed extends React.Component{
    render(){
        return(
            <div>
                <Paper style={feedstyle} zDepth={0} rounded={false} id="Post1">
                   <Divider />
                    <div id="container">
                        <Avatar src="xda.png" size={48} style={profstyle} className="avatar"/>
                        <span className="profilename">XDA Developers</span><i class="fas fa-check-circle fa-xs" id='verify'></i><span className="Handle">@xdadevelopers<span className="dot">.</span>36m</span>
                        <i class="fas fa-angle-down" id="caret"></i>
                        <div id="content"> Lineage OS turns 1 year old. <span id="link">https://t.co/hO5MVbQ7ND</span></div>
                        <img src="lineage.jpg" alt="lineage" id="pic1" />
                        <span id="icons">
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">7</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">12</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">133</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </span>
                    </div>
                    <Divider style={divstyle}/>
                </Paper>
                <Paper style={feedstyle} zDepth={0} rounded={false} id="Post2">
                <Divider />
                 <div id="container">
                     <Avatar src="androidpolice.png" size={48} style={profstyle} className="avatar"/>
                     <span className="profilename">Android Police</span><i class="fas fa-check-circle fa-xs" id='verify'></i><span className="Handle">@AndroidPolice<span className="dot">.</span>1h</span>
                     <i class="fas fa-angle-down" id="caret"></i>
                     <div id="content">Android 8.0 Oreo in beta testing for Xiaomi Mi A1,enables fast charging. <span id="link">https://t.co/eFvicYTIqF</span></div>
                     <img src="Oreo.jpg" alt="Oreo" id="pic2" />
                     <div id="icons">
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">3</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">3</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">26</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </div>
                     
                 </div>
                 <Divider style={divstyle}/>
             </Paper>
             <Paper style={feedstyle} zDepth={0} rounded={false} id="Post3">
                <Divider />
                 <div id="container">
                     <Avatar src="nasa.jpg" size={48} style={profstyle} className="avatar"/>
                     <span className="profilename">NASA</span><i class="fas fa-check-circle fa-xs" id='verify'></i><span className="Handle">@NASA<span className="dot">.</span>2h</span>
                     <i class="fas fa-angle-down" id="caret"></i>
                     <div id="content">From 'The Beautiful Universe' to 'Silicon Valley,' explore science and technology through our many podcasts. Details:<span id="link">https://t.co/j5WKRLZyTF</span></div>
                     <img src="universe.jpg" alt="Universe" id="pic3" />
                     <span id="icons">
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">126</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">1.3k</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">2.9k</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </span>
                     
                 </div>
                 <Divider style={divstyle}/>
             </Paper>
             </div>
        )
    }
}