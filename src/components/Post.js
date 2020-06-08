import React, { Component } from "react";

export class Post extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    //accessing props object from BrowserRouter
    let id = this.props.match.params.post_id;
    this.setState({
      id,
    });
  }
  render() {
    return <div className="container">{this.state.id}</div>;
  }
}

export default Post;
