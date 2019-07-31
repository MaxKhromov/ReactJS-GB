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
        {this.posts.map(post => {
          return (
            <div>
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
