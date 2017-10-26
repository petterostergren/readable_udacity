import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'
import PostComment from './PostComment'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    getPosts()
    getComments(match.params.postId)
  }

  renderComments() {
    const { comments, post, match } = this.props
    return _.map(comments, comment => {
      return (
        <div key={comment.id} className="post-container">
          {post ? (
            <PostComment
              key={comment.id}
              commentId={comment.id}
              parentId={comment.parentId}
              category={match.params.category}
              body={comment.body}
              author={comment.author}
              voteScore={comment.voteScore}
              timestamp={comment.timestamp}
            />
          ) : (
            ''
          )}
        </div>
      )
    })
  }

  renderPosts() {
    const { post } = this.props
    return (
      <div className="post-container">
        {post ? (
          <PostComponent
            key={post.id}
            postId={this.props.match.params.postId}
            title={post.title}
            body={post.body}
            readirect={false}
            author={post.author}
            voteScore={post.voteScore}
            category={post.category}
            timestamp={post.timestamp}
          />
        ) : (
          ''
        )}
      </div>
    )
  }

  render() {
    const { post } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          {post ? <h1>{post.title}</h1> : ''}
          {this.renderPosts()}
          <Link
            className="btn-comment-link"
            to={`${this.props.match.params.postId}/addComment`}
          >
            <button className="btn btn-comment" type="button">
              <i className="fa fa-plus" aria-hidden="true" /> Add Comment
            </button>
          </Link>
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

PostDetails.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  comments: PropTypes.array,
  post: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  const { posts, comments } = state
  return {
    comments:
      comments[ownProps.match.params.postId] &&
      _.filter(comments[ownProps.match.params.postId], ['deleted', false]),
    post: posts.filter(
      item => item.id === ownProps.match.params.postId && item.deleted !== true
    )[0],
  }
}

export default connect(mapStateToProps, { getPosts, getComments })(PostDetails)
