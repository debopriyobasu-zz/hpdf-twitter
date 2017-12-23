import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './AppBar.js';
import {ProfileCard, TweetBox,TrendsBox,WhoToFollow,PolicyBox} from './Commons.js';
import './App.css';
const App = () => (
  <MuiThemeProvider>
    <Navigation />
    <div id="homepage">
      <ProfileCard bgimg='banner.jpg' profpic='profilepic.jpg'/>
      <TweetBox />
      <WhoToFollow />
      <TrendsBox />
      <PolicyBox />
      </div>
  </MuiThemeProvider>
);
 export default App;
