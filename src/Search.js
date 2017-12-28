import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Navigation} from './AppBar.js';
import {TrendsBox} from './TrendsBox.js';
import {WhoToFollow} from './WhoToFollow.js';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {PeopleCard} from './PeopleCard.js';
export class Search extends React.Component{
    render(){
        return(
        <MuiThemeProvider>
            <Navigation profpic='profilepic.jpg' searchword='aadhar'/>
            <AppBar showMenuIconButton={false} title="aadhar" titleStyle={{fontFamily:"Segoe UI,Arial,sans-serif",fontWeight:'bold',marginLeft:'100px',fontSize:'27px'}}
      style={{backgroundColor:"#1B95E0",position:"fixed",top:"46px"}}
      zDepth="0px" />
      <AppBar showMenuIconButton={false}
      style={{backgroundColor:"#FFFFFF",position:"fixed",top:"110px",height:'50px'}}>
      <FlatButton label="Top" primary={true} style={{position:'absolute',marginTop:'14px',marginLeft:'100px',borderBottom:'2px solid',borderBottomColor:'#5AB2E8'}} labelStyle={{textTransform:'none',color:"#5AB2E8",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="Latest" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'180px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="People" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'260px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="Photos" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'340px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="Videos" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'420px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="News" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'500px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <FlatButton label="Broadcasts" disabled={true} style={{position:'absolute',marginTop:'14px',marginLeft:'580px',borderBottom:'2px solid',borderBottomColor:'#FFFFFF'}} labelStyle={{textTransform:'none',color:"#657786",fontWeight:"bold",fontSize:14,fontFamily:"Segoe UI,Arial,sans-serif"}} hoverColor ="#E8F4FB" />
      <IconMenu style={{position:'absolute',marginLeft:'1240px',marginTop:'5px'}}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Search Settings" />
      <Divider />
      <MenuItem primaryText="Save this search" />
      <MenuItem primaryText="Embed this search" />
    </IconMenu>
      </AppBar>
    <Paper style={{width:'290px',height:'52px',marginLeft:'100px',marginTop:'175px'}} zDepth={0} rounded={false}>
     <div id="filtercontainer">
            <span className="name">Search filters<span className="dot">.</span><span className="subtext">Show</span></span>
         </div>
     </Paper>
     <Paper style={{width:'290px',height:'186px',marginLeft:'100px',marginTop:'10px'}} zDepth={0} rounded={false}>
     <div id="relatedcontainer">
     <span className="name">Related searches</span>
            <div>
            <div id='cont' >arvind kejriwal</div>
            <div id='cont' >rofl gandhi</div>
            <div id='cont' >#taruntejpal</div>
            <div id='cont' >#nirbhaya</div>
            <div id='cont' >patiala house</div>
            </div>
     </div>
     </Paper>
     <div style={{marginLeft:'-700px',marginTop:'-45px'}}>
        <WhoToFollow />
     </div>
     <div style={{marginTop:'85px',marginLeft:'200px'}}>
     <TrendsBox />
     </div>
     <span className="name" id="topnews">Top news</span>
     <span className="subtext" style={{position:'absolute',top:'175px',left:'940px',fontFamily:"Segoe UI,Arial,sans-serif"}}>View all</span>
     <Paper style={{width:'589.98px', height:'426px',marginLeft:'405px',marginTop:'-620px'}} zDepth={0}>
        <img src="facebook.jpeg" style={{width:'inherit',height:'300px'}} />
        <div style={{padding:'15px'}}>
            <div style={{fontSize:'18px',fontWeight:'bold',maxHeight:'48px',color:'#14171a',fontFamily:"Segoe UI,Arial,sans-serif"}}>Facebook may soon ask you to link your account with your Aadhar Card</div>
            <div style={{fontSize:'14px',color:'#66757f',fontFamily:"Segoe UI,Arial,sans-serif"}}>Site seeks details for opening new accounts.</div>
            <div style={{paddingTop:'10px'}}><img src='deccanchronicle.jpg' style={{height:'16px',width:'16px',borderRadius:'10px',float:'left'}}/><span style={{fontSize:'12px',fontWeight:'bold',fontFamily:"Segoe UI,Arial,sans-serif",marginLeft:'3px',float:'left'}}>Deccan Chronicle</span><span style={{color:'#657786',fontSize:'12px',fontFamily:"Segoe UI,Arial,sans-serif",float:'right'}}>Dec 27,2017</span></div>
        </div>
     </Paper>
     <span className="name" id="people">People</span>
     <span className="subtext" style={{position:'absolute',top:'675px',left:'940px',fontFamily:"Segoe UI,Arial,sans-serif"}}>View all</span>
     <div style={{position:'absolute',left:'405px',top:'700px'}}> 
     <PeopleCard bgimg='aadarjbanner.jpg' profpic='aadarj.jpg' name='Aadar Jain' handle='@AadarJain' description='Actor (work in progress)'/>
     </div>
     <div style={{position:'absolute',left:'705px',top:'700px'}}> 
     <PeopleCard bgimg='aadarmbanner.jpg' profpic='aadarm.jpg' name='Aadar Malik' handle='@TheAadarGuy' description='Actor/musician/comic. @SnGComedyIN Fb- Aadar, Insta- @TheAadarGuy Snap- @mynameisaadar Bookings: savinay@oml.in'/>
     </div>
     <Paper style={{display:'inline-block',marginLeft: 10,marginRight: 10,position:'absolute',left:'395px',top:'1000px',width:'588px',height:'121px'}} zDepth={0} rounded={false}>
            <div style={{paddingTop:'9px',paddingBottom:'9px',paddingLeft:'12px',paddingRight:'12px'}}>
            <Avatar src='rohan.jpg' size={48} style={{marginTop:'5px',marginRight:'5px',float:'left'}} />
            <div style={{width:'506px',height:'103px',float:'right'}}>
            <span className="profilename">Rohan.</span><span className="Handle">@rohanchouhan98<span className="dot">.</span>Dec 23</span>
                        <i class="fas fa-angle-down" id="caret"></i>
                        <div style={{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:'14px'}}>If <strong>Aadhar</strong> was a person, his favorite band would be Linkin Park</div>
                        <div id='p1icons'>
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">15</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">245</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">527</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </div>
                        <div id='blue'>Show this thread</div>
                </div>
                </div>
             </Paper>
             <Paper style={{display:'inline-block',marginLeft: 10,marginRight: 10,position:'absolute',left:'395px',top:'1121px',width:'588px',height:'89px'}} zDepth={0} rounded={false}>
            <Divider />
            <div style={{paddingTop:'9px',paddingBottom:'9px',paddingLeft:'12px',paddingRight:'12px'}}>
            <Avatar src='prnv.jpg' size={48} style={{marginTop:'5px',marginRight:'5px',float:'left'}} />
            <div style={{width:'506px',height:'71px',float:'right'}}>
            <span className="profilename">Pranav</span><span className="Handle">@prnv_<span className="dot">.</span>Dec 20</span>
                        <i class="fas fa-angle-down" id="caret"></i>
                        <div style={{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:'14px'}}>If <strong>Aadhar</strong> was a person, his favorite app would be LinkedIn.</div>
                        <div id='p1icons'>
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">5</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">164</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">301</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </div>
                </div>
                </div>
             </Paper>
             <Paper style={{display:'inline-block',marginLeft: 10,marginRight: 10,position:'absolute',left:'395px',top:'1210px',width:'588px',height:'514px'}} zDepth={0} rounded={false}>
            <Divider />
            <div style={{paddingTop:'9px',paddingBottom:'9px',paddingLeft:'12px',paddingRight:'12px'}}>
            <Avatar src='vishal.jpg' size={48} style={{marginTop:'5px',marginRight:'5px',float:'left'}} />
            <div style={{width:'506px',height:'496px',float:'right'}}>
            <span className="profilename">Vishal yadav</span><span className="Handle">@Yadav_vishal_<span className="dot">.</span>Dec 20</span>
                        <i class="fas fa-angle-down" id="caret"></i>
                        <div style={{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:'14px'}}>When you go to the bank for linking <strong>aadhar</strong> card but you forgot to take the <strong>aadhar</strong> card with you,the bank employee be like</div>
                        <img src="bank.jpg" alt="Oreo" id="aadharpic" />
                        <div id='p1icons'>
                           <span id="c"> <span id="comment"><i class="far fa-comment"></i></span><span id="counter">4</span></span>
                           <span id="r"> <span id="retweet"><i class="fas fa-retweet"></i></span><span id="counter">47</span></span>
                           <span id="l"> <span id="like"><i class="far fa-heart"></i></span><span id="counter">51</span></span>
                            <span id="m"><span id="message"><i class="far fa-envelope"></i></span></span>
                        </div>
                        <div id='blue'>Show this thread</div>
                </div>
                </div>
                </Paper>
                <Paper style={{width:'290px',height:'66px',position:'absolute',left:'100px',top:'1185px',backgroundolor:'#e6ecf0'}} zDepth={0} rounded={false}>
                    <div style={{padding:'15px'}}>
                    <span id='ftext'>&copy;2018 Twitter</span><span id='ftext'>About</span><span id='ftext'>Help Center</span><span id='ftext'>Terms</span><span id='ftext'>Privacy policy</span><span id='ftext'>Cookies</span><span id='ftext'>Ads info</span>
                        </div>
                </Paper>
    </MuiThemeProvider>
        )
    }
}
    