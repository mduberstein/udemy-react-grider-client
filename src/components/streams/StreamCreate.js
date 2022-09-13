import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends React.Component {
  render(){
    console.log("Props introduced with reduxForm", this.props);
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);