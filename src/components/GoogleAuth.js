import React from "react";

class GoogleAuth extends React.Component {
  // null means we don't know if the user is signed in a the start-up
  state = {isSignedIn: null};

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '29079199241-nn46932v8jjqp62g8isp8nq90i74fmjq.apps.googleusercontent.com',
        scope: 'email', 
        plugin_name: "streamy",
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null){
      return <div>I don't know if we are signed in</div>;
    } else if(this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;