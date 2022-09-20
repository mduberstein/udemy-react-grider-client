import React from 'react';
import {connect} from 'react-redux';

const StreamEdit = (props) => {
  console.log("SreamEdit props: ", props) 
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log("In SreamEdit mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps)(StreamEdit);