import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getPosts } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'
import CommentList from './CommentList'
import SortPosts from './SortPosts'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    getPosts()
    getComments(match.params.postId)
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
          <div className="comment-adjustments">
            <SortPosts {...this.props}  />
            <Link
              className="btn-comment-link"
              to={`/addComment/${this.props.match.params.category}/${this.props.match.params.postId}`}
            >
              <button className="btn btn-comment" type="button">
                <i className="fa fa-plus" aria-hidden="true" /> Add Comment
              </button>
            </Link>
          </div>
          {<CommentList {...this.props} />}
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
  history: PropTypes.object.isRequired,
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

export default withRouter(
  connect(mapStateToProps, { getPosts, getComments })(PostDetails)
)
