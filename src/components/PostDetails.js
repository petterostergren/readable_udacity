import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    this.props.getPost(match.params.postId)
    this.props.getComments(match.params.postId)
  }

  renderComments() {
    const { comments, posts, match } = this.props
    return _.map(comments, comment => {
      return (
        <PostComponent
          key={comment.id}
          postId={comment.id}
          isPost={false}
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
      <div>
        {this.renderPosts()} <hr /> {this.renderComments()}
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
