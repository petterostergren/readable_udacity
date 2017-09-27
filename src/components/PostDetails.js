import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/post'
import PostComponent from './PostComponent'

class PostDetails extends Component {
  componentDidMount() {
    const { getPost } = this.props
    getPost(this.props.match.params.postId)
  }

  renderPosts() {
    const { post } = this.props
    return (
      <PostComponent
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
        voteScore={post.voteScore}
        category={post.category}
        timestamp={post.timestamp}
      />
    )
  }

  render() {
    return <div>{this.renderPosts()}</div>
  }
}

export default connect(
  state => ({
    post: state.post,
  }),
  {
    getPost,
  }
)(PostDetails)
