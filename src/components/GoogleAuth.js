import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '29079199241-nn46932v8jjqp62g8isp8nq90i74fmjq.apps.googleusercontent.com',
        scope: 'email', 
        plugin_name: "streamy",
      })
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;