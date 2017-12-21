import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './AppBar.js';
import {ProfileCard, TweetBox,TrendsBox,WhoToFollow,PolicyBox} from './Commons.js';
const App = () => (
  <MuiThemeProvider>
    <Navigation />
    <ProfileCard bgimg='banner.jpg' profpic='profilepic.jpg'/>
    <TrendsBox />
    <TweetBox />
    <WhoToFollow />
    <PolicyBox />
  </MuiThemeProvider>
);
 export default App;
