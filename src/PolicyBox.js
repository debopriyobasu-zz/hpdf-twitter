import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
// import FontIcon from 'material-ui/FontIcon';
import './PolicyBox.css';
const policystyle ={
    height: 156,
    width: 290,
    position:'absolute',
    left:1100,
    top:370
}
export class PolicyBox extends React.Component{
    render(){
        return(
                <Paper style={policystyle} zDepth={0} rounded={false}>
                <div id="PolicyTextContainer">
                    <p id="policytext"><span className="policylink">&copy; 2017 Twitter</span><span className="policylink">About</span> 
                    <span className="policylink">Help Center</span> <span className="policylink">Terms</span><span className="policylink">Privacy policy</span>
                    <span className="policylink">Cookies</span>  <span className="policylink">Ads info </span> 
                    <span className="policylink">Brand</span>  <span className="policylink">Blog 
                    </span><span className="policylink">Status </span>
                    <span className="policylink">Apps</span> <span className="policylink">Jobs</span> 
                    <span className="policylink">Marketing </span><span className="policylink">Businesses</span> 
                    <span className="policylink">Developers</span></p>
                    </div>
                    <Divider />
                    <div id="PolicyTextContainer">
                    <i class="fas fa-external-link-alt fa-xs" id="promoteicon"></i><span id="advert">Advertise with Twitter</span>
                    </div>
                </Paper>
        )
    }
}