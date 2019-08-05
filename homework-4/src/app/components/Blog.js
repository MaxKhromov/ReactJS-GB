import React from "react";
import Post from "./Post";


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    };
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post => {
          return (
            <Post key={post.title} postTitle={post.title} postBody={post.body}></Post>
          );
        })}
      </div>
    );
  }
}

export default Blog;
