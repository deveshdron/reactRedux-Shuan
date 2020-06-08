import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    //accessing props object from BrowserRouter
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        console.log(res.data.body);
        this.setState({ post: res.data });
      });
  }

  render() {
    const post = this.state.post ? (
      <div className="post container">
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">
        <h4>Post loading...</h4>
      </div>
    );

    return post;
  }
}

export default Post;
