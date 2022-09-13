import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({input}) {
    console.log("form input props:", input);
    return (
      <input {...input} />
    );
  }
  render() {
    console.log("Props introduced with reduxForm", this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
