import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions/index';
import StreamForm from './StreamForm';
import _ from "lodash";

// const StreamEdit = (props) => {
//   console.log("SreamEdit props: ", props) 
//   return <div>StreamEdit</div>;
// };
class StreamEdit  extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // console.log("In StreamEdit, onSubmit, formValues: ", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render () {
    console.log("SreamEdit props: ", this.props);
    if(!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          // ALT 3
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          // ALT 2 short, but incorrect
          // works in this project, but wrong as it passes redundant fields into formValues: id and userId
          // initialValues={this.props.stream} 
          // ALT1 correct
          // initialValues={{
          //   title: this.props.stream.title,
          //   description: this.props.stream.description
          // }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  // console.log("In StreamEdit mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);