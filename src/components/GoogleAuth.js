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
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null){
      return null;
    } else if(this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button">
          <i className="google icon" />
          Sign In with Google!
      </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;