import React from 'react';
import flv  from 'flv.js';
import {connect} from "react-redux";
import { fetchStream} from "../../actions";

class StreamShow extends React.Component {
  constructor (props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchStream(id);
    console.log('in ShowStream->componentDidMountthis.videoRef :', this.videoRef)
    // here, the Video player would not be displayed
    this.buildPlayer();
  }

  // this will be called when the stream was fetched and thus the Redux state update would 
  // cause this lifecycle method call and the Video Player display
  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    console.log("In StreamShow->componentWillUnmount: I was  unmounted");
    // is called when the component is no longer displayed, i.e. is navigated away from, tells the flv player 
    // 1. to stop trying to receive a video stream and play it
    // 2. to detach itself from the <video> element pointed to by the this.videoRef
    this.player.destroy();
  }

  buildPlayer() {
    const {id} = this.props.match.params;
    if (this.player || !this.props.stream) {
      return; 
    }
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>;
    }
    const {title, description} = this.props.stream;
    return (
      <div>
        {/* video here is not and HTML but JSX form which the Html be generated */}
        <video ref={this.videoRef} style={{width: '100%'}} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log("In StreamShow mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);