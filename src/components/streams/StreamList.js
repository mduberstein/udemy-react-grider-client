import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    console.log("props.streams: ", this.props.streams);
    return <div>StreamList</div>;
  }
}

// Object.values returns array of values from a Javascript object
// which is also a map, while Object.keys returns an array of keys
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
