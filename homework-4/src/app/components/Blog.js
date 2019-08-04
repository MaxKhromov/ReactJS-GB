import React from "react";

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
            <div key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blog;
