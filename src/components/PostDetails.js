import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'
import PostComment from './PostComment'

class PostDetails extends Component {
  componentDidMount() {
    const { getPost, getComments, match } = this.props
    this.props.getPost(match.params.postId)
    this.props.getComments(match.params.postId)
  }

  renderComments() {
    const { comments } = this.props
    return _.map(comments, comment => {
      return (
        <PostComment
          key={comment.id}
          postId={comment.id}
          body={comment.body}
          author={comment.author}
          voteScore={comment.voteScore}
          timestamp={comment.timestamp}
        />
      )
    })
  }

  renderPosts() {
    console.log('post')
    const { posts } = this.props
    return (
      <PostComponent
        key={posts.id}
        postId={this.props.match.params.postId}
        title={posts.title}
        body={posts.body}
        readirect={false}
        author={posts.author}
        voteScore={posts.voteScore}
        category={posts.category}
        timestamp={posts.timestamp}
      />
    )
  }

  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
        {this.renderPosts()} <hr /> {this.renderComments()}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state
  return {
    comments: state.comments[ownProps.match.params.postId],
    posts,
  }
}

export default connect(mapStateToProps, { getPost, getComments })(PostDetails)
