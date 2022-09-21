import React from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import {fetchStream} from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderAction () {
    return (
      <React.Fragment>
        <div className="ui button negative">Delete</div>
        <div className="ui button">Cancel</div>
      </React.Fragment>
    );
   }

  render () {
    return (
      <div>
        StreamDelete
        <Modal
          onDismiss={() => history.push("/")}
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderAction()}
        />
      </div>
    );
  }
}
export default connect(null, {fetchStream})(StreamDelete);
