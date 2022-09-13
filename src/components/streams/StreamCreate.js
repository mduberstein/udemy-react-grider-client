import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log("form input props:", formProps);
    return (
      <input 
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
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
