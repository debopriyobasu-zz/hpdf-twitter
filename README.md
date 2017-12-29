# Hasura Product Development Fellowship Task-1

## This webapp implements the main timeline and the search results page of Twitter
This webapp uses hard-coded data to implement the following pages from the perspective of a logged in user: <br/>
1)Main timeline: https://twitter.com <br/>
2)Search results: https://twitter.com/search?q=aadhaar <br/>

## Sections
* [Introduction](#introduction)
* [Implementation Details](#implementation-details)
* [Environment](#environment)
* [Cloning and Running this Application](#cloning-and-running-this-application)
* [Project Structure](#project-structure)
* [Utility of the Project](#utility-of-the-project)
* [Feedback](#feedback)


## Introduction
React is a front-end Javascript library developed by Facebook. It is used for handling the View layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and a large community behind it.
Here are [10 popular apps that use React JS](https://brainhub.eu/blog/10-famous-apps-using-reactjs-nowadays/)<br/>

### **Screenshots** of the live application:

### _Home | Landing Page_

[pic-1]:https://github.com/debopriyobasu/hpdf-twitter/blob/master/homepage%201.PNG
[pic-2]:https://github.com/debopriyobasu/hpdf-twitter/blob/master/homepage%202.PNG
![Alt text][pic-1]<br/>
![Alt text][pic-2]
<br/>
### _Search Page | Keyword: aadhaar_

[pic-3]:https://github.com/debopriyobasu/hpdf-twitter/blob/master/aadhaar%20page.PNG
[pic-4]:https://github.com/debopriyobasu/hpdf-twitter/blob/master/aadhaar%20page%20two.PNG
![Alt text][pic-3]<br/>
![Alt text][pic-4]
<br/>

## Implementation Details

I have used the following to implement the Twitter clone webapp:
### [Node Package Manager(NPM)](https://nodejs.org/en/) Node.js' package ecosystem, npm, the largest ecosystem of open source libraries in the world.
### [Git Bash)](https://git-scm.com/downloads) A free and open source distributed version control system 
### [React](https://reactjs.org) A JavaScript library for building user interfaces
- ReactJs's application generator create-react-app
### [Material-UI v0.20](http://www.material-ui.com/#/) React components that implement Google's Material Design
### [https://fontawesome.com/](https://reactjs.org) Vector icons and social logos for your website
### _Custom Components_ and _Props_

## Environment

This application was created in a Microsoft Windows 10 version 1709(Fall Creators' update) environment<br/>
This app was tested to be running successfully in Google Chrome v63 and Mozilla Firefox v58 on a 21 inch monitor of resolution 1920 x 1080 and on a 15.6 inch screen of resolution 1366 x 768.

## Cloning and Running this Application

To clone and run the application in your system, follow the instructions below:<br/>
* Open git bash on the directory you wish to install. You can right click on the directory in file explorer and select _Git Bash Here_ or open the git bash and type  

```
cd <your-directory-name-here-without-the-angled-brackets>
```
for example,if I want to go to the desktop,then I will type 
```
cd desktop
```
the default diretory opened when you open Git Bash is the root directory.
* Now,you can proceed to clone the application using the following command:
```
git clone https://github.com/debopriyobasu/hpdf-twitter.git
```
* After the cloning is complete,traverse to the cloned app directory using the following command:
```
cd hpdf-twitter
```
* Now, install the dependencies using the following command:
```
npm install
```
Please wait for a while as it will take some time to download all the dependencies depending on the speed of your internet connection.<br/>
* Now, you are ready to start the application! Use the following command to fire up the Twitter homepage in a new tab of your default browser:
```
npm start
```
To open the Search Page, go to hpdf-twitter/src/index.js and open it with the preferred text editor of your choice and replace
```
<Home />
```
with 
```
<Search />
```
## Project Structure

For a successful install, make sure the cloned project directory contains the following files:
```
hpdf-twitter
└─── node_modules
└─── public
|    └───aadarj.jpg
|    └───aadarjbanner.jpg
|    └───aadarm.jpg
|    └───aadarmbanner.jpg
|    └───androidpolice.png
|    └───bank.jpg
|    └───banner.jpg
|    └───deccanchronicle.jpg
|    └───emberjs.png
|    └───facebook.jpeg
|    └───fav.icon
|    └───index.html
|    └───ionic.jpg
|    └───lineage.jpg
|    └───manifest.json
|    └───nasa.jpg
|    └───Oreo.jpg
|    └───prnv.jpg
|    └───profilepic.jpg
|    └───reactnative.jpg
|    └───rohan.jpg
|    └───universe.jpg
|    └───vishal.jpg
|    └───xda.png
└─── src
|     └───AppBar.css
|     └───AppBar.js 
|     └───Feed.css
|     └───Feed.js
|     └───Home.css
|     └───Home.js
|     └───index.css
|     └───index.js
|     └───PeopleCard.css
|     └───PeopleCard.js
|     └───PolicyBox.css
|     └───PolicyBox.js
|     └───ProfileCard.css
|     └───ProfileCard.js
|     └───Search.css
|     └───Search.js
|     └───TrendsBox.css
|     └───TrendsBox.js
|     └───TweetBox.css
|     └───TweetBox.js
|     └───WhoToFollow.css
|     └───WhoToFollow.js
└───aadhaar page two.png
└───aadhaar page.png
└───.gitignore
└───homepage 1.png
└───homepage 2.png
└───package.json
└───package-lock.json
└───README.md     
```
## Utility of the Project
* Successfully imitating the _look and feel_ of the Twitter Home Page and the Twitter Search Page.
* Creating and reusing components in React for iterative development.
* Use of a combination of Material-UI Components and CSS3 styling and coding in React to imitate the Twitter app.
* The top navigation bar does not move with scrolling whereas the content scrolls up and down like the original Twitter webapp.
* Successfully implement a static web page with hard coded data as mentioned in the HPDF Task 1 docs.

## Feedback
> If you have any suggestions or feedback regarding this project, feel free to connect with me on <br/>
GitHub -https://github.com/debopriyobasu <br/>
Google+ -https://plus.google.com/u/0/+DebopriyoBasu <br/>
Twitter -https://twitter.com/debopriyobasu<br/>
Email -debopriyobasu@gmail.com 

