import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log("form input props:", input);
    console.log("meta ", meta);
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // typical on Submit, before the Redux Form lib
  // onSubmit(event) {
  //   event.preventDefault();
  // }
  onSubmit = (formValues) =>  {
    console.log("formValues in onSubmit", formValues);
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log("Props introduced with reduxForm", this.props);
    return (
      // handleSubmit calls event.preventDefault(), so our onSubmit doesn't have to
      // also the onSubmit is called not with the event argument,
      // but with values of the form's inputs
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
    form: "streamForm",
    validate
  })(StreamForm);



 