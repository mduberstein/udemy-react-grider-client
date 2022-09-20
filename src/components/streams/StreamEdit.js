import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions/index';

// const StreamEdit = (props) => {
//   console.log("SreamEdit props: ", props) 
//   return <div>StreamEdit</div>;
// };
class StreamEdit  extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render () {
    console.log("SreamEdit props: ", this.props);
    if(!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  };
}

const mapStateToProps = (state, ownProps) => {
  // console.log("In SreamEdit mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, {fetchStream})(StreamEdit);