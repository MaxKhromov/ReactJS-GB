import React, { Component } from 'react'
import axios from 'axios';
import CommentFullpage from '../components/Comment';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    }
  }

  render() {
    return (
      <div>
        {this.state.comment && <UserProfile  {...this.state.comment} />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.CommentId}`)
      .then(response => {
        this.setState({ comment: response.data });
      })
  }
}
