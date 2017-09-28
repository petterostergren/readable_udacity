import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/post'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'

class PostDetails extends Component {
  componentDidMount() {
    const { getPost, getComments, match } = this.props
    getPost(match.params.postId)
    getComments(match.params.postId)
  }

  renderComments() {
    const { comments } = this.props
    return _.map(comments, comment => {
      return (
        <PostComponent
          key={comment.id}
          id={comment.id}
          title=""
          body={comment.body}
          readirect={false}
          author={comment.author}
          voteScore={comment.voteScore}
          category=""
          timestamp={comment.timestamp}
        />
      )
    })
  }

  renderPosts() {
    const { post } = this.props
    return (
      <PostComponent
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        readirect={false}
        author={post.author}
        voteScore={post.voteScore}
        category={post.category}
        timestamp={post.timestamp}
      />
    )
  }

  render() {
    return <div>{this.renderPosts()} <hr/ > {this.renderComments()}</div>
  }
}

export default connect(
  state => ({
    post: state.post,
    comments: state.comments.comments,
  }),
  {
    getPost,
    getComments,
  }
)(PostDetails)
