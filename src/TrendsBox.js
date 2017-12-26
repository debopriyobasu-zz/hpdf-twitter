import React from 'react';
import Paper from 'material-ui/Paper';
import './TrendsBox.css';
const trendsstyle ={
    height: 420,
    width: 290,
    display: 'inline-block',
    marginTop: 10,
    position:'absolute',
    top:275,
};
export class TrendsBox extends React.Component{
    render(){
        return(
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
        )
    }
}