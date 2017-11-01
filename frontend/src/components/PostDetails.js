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
import NotFound from './NotFound'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    getPosts()
    getComments(match.params.postId)
  }

  renderPosts() {
    const { post, match } = this.props
    return (
      <div className="post-container">
        {post ? (
          <PostComponent
            key={post.id}
            postId={match.params.postId}
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
    const { post, match } = this.props
    return (
      <div>
        {post ? (
          <div className="container-wrapper">
            <div className="container">
              {post ? <h1>{post.title}</h1> : ''}
              {this.renderPosts()}
              <div className="comment-adjustments">
                <SortPosts {...this.props} />
                <Link
                  className="btn-comment-link"
                  to={`/addComment/${match.params.category}/${match.params
                    .postId}`}
                >
                  <button className="btn btn-comment" type="button">
                    <i className="fa fa-plus" aria-hidden="true" /> Add Comment
                  </button>
                </Link>
              </div>
              {<CommentList {...this.props} />}
            </div>
          </div>
        ) : (
          <NotFound />
        )}
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

const mapStateToProps = ({ posts, comments }, ownProps) => {
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
