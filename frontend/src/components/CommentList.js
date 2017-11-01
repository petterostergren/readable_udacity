import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { compareHighestScore, comparePublished } from '../utils/helper'
import { getComments } from '../actions/comment'
import PostComment from './PostComment'

class PostDetails extends Component {
  componentDidMount() {
    const { getComments, match } = this.props
    getComments(match.params.postId)
  }

  renderCommentItem(comment, match) {
    return (
      <PostComment
        key={comment.id}
        commentId={comment.id}
        parentId={comment.parentId}
        currentCategory={match.params.category}
        body={comment.body}
        author={comment.author}
        voteScore={comment.voteScore}
        timestamp={comment.timestamp}
      />
    )
  }

  renderComments() {
    const { comments, match, location, post } = this.props
    const searchString = queryString.parse(location.search)
    let searchValue = Object.values(searchString)
    searchValue = searchValue[0]
    if (comments) {
      if (searchValue === 'votes') {
        const sortedComments = comments.sort(compareHighestScore)
        return _.map(sortedComments, comment => {
          return (
            <div key={comment.id} className="post-container">
              {post ? this.renderCommentItem(comment, match) : ''}
            </div>
          )
        })
      } else if (searchValue === 'published') {
        const sortedComments = comments.sort(comparePublished)
        return _.map(sortedComments, comment => {
          return (
            <div key={comment.id} className="post-container">
              {post ? this.renderCommentItem(comment, match) : ''}
            </div>
          )
        })
      } else {
        return _.map(comments, comment => {
          return (
            <div key={comment.id} className="post-container">
              {post ? this.renderCommentItem(comment, match) : ''}
            </div>
          )
        })
      }
    }
  }

  render() {
    return <div className="post-container">{this.renderComments()}</div>
  }
}

PostDetails.propTypes = {
  getComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  comments: PropTypes.array,
  post: PropTypes.object,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ comments }, ownProps) => {
  return {
    comments:
      comments[ownProps.match.params.postId] &&
      _.filter(comments[ownProps.match.params.postId], ['deleted', false]),
  }
}

export default withRouter(
  connect(mapStateToProps, { getComments })(PostDetails)
)
