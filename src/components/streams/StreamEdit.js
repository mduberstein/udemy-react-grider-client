import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions/index';
import StreamForm from './StreamForm';

// const StreamEdit = (props) => {
//   console.log("SreamEdit props: ", props) 
//   return <div>StreamEdit</div>;
// };
class StreamEdit  extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log("In StreamEdit, onSubmit, formValues: ", formValues);
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
          // ALT 2 short and correct
          initialValues={this.props.stream}
          // ALT1 illustrative, works as well
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
  // console.log("In SreamEdit mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);