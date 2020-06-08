import React, { Component } from "react";

import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { posts } = this.props;
    console.log(this.props);

    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card home" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">
        <h5>No post yet...</h5>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="Home container">
        <h4 className="center">This is Home page</h4>
        {postList}
      </div>
    );
  }
}

// mapping our store objects to this component's props
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
