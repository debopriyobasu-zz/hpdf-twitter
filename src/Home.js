import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Navigation} from './AppBar.js';
import {ProfileCard} from './ProfileCard.js';
import {TrendsBox} from './TrendsBox.js';
import {TweetBox} from './TweetBox.js';
import {WhoToFollow} from './WhoToFollow.js';
import {PolicyBox} from './PolicyBox.js';
import {Feed} from './Feed.js';
import './Home.css';
const Home = () => (
  <MuiThemeProvider>
    <Navigation profpic='profilepic.jpg' searchword='Search Twitter'/>
    <div id="homepage">
      <ProfileCard bgimg='banner.jpg' profpic='profilepic.jpg' />
      <TweetBox profpic='profilepic.jpg'/>
      <Feed />
      <WhoToFollow />
      <TrendsBox />
      <PolicyBox />
    </div>
  </MuiThemeProvider>
);
 export default Home;
