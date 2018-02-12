import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export class SnackBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 5000,
      message: 'Use /search at the end of the url to view the Twitter search page.',
      open: true,
    };
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}