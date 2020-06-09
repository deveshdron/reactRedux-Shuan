import React, { Component } from "react";
import { connect } from "react-redux";

export class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // redirectig to homepage
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    const post = this.props.post ? (
      <div className="post container">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
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
    // post.id===id   doesnt work here
    post: state.posts.find((post) => post.id == id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
