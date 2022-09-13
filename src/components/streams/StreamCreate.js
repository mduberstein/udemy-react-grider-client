import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({input, label}) {
    console.log("form input props:", input);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  render() {
    console.log("Props introduced with reduxForm", this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
