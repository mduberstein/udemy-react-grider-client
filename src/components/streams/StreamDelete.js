import React from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderAction() {
    return (
      <React.Fragment>
        <div className="ui button negative">Delete</div>
        <div className="ui button">Cancel</div>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
  }

  render() {
    return (
        <Modal
          onDismiss={() => history.push("/")}
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderAction()}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("In StreamDelete mapStateToProp, ownProps", ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
