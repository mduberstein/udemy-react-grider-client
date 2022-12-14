import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // typical on Submit, before the Redux Form lib
  // onSubmit(event) {
  //   event.preventDefault();
  // }
  onSubmit = (formValues) =>  {
    console.log("In StreamCreate, onSubmit, formValues: ", formValues);
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
  
export default connect(null, {createStream})(StreamCreate);

 