import React, { Component } from "react";
import { connect } from "react-redux";

export class Post extends Component {
  render() {
    const post = this.props.post ? (
      <div className="post container">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">
        <h4>Post loading...</h4>
      </div>
    );

    return post;
  }
}

// mapping our store objects to this component's props
const mapStateToProps = (state, ownProps) => {
  //accessing props object from BrowserRouter
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id == id),
  };
};

export default connect(mapStateToProps)(Post);
