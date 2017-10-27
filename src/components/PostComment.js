import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { timeConverter } from '../utils/helper'
import { pushVoteComment, delComment } from '../actions/comment'

class PostComment extends Component {
  render() {
    const {
      commentId,
      voteScore,
      author,
      timestamp,
      body,
      pushVoteComment,
      delComment,
      parentId,
    } = this.props
    const time = timeConverter(timestamp)
    return (
      <div className="post" key={commentId}>
        <div className="vote-container">
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => pushVoteComment('upVote', commentId)}
          />
          <span className="vote-amount">{voteScore}</span>
          <i
            className="fa fa-chevron-down"
            onClick={() => pushVoteComment('downVote', commentId)}
          />
        </div>
        <div className="post-content-container">
          <p className="post-content-info">
            Posted by {author}, {time}
          </p>
          {body ? <p>{body}</p> : ''}
          <footer className="post-footer">
            <ul>
              <li>
                <Link to={`/editcomment/${parentId}/${commentId}`}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <i
                  className="fa fa-trash-o trashCan"
                  aria-hidden="true"
                  onClick={() => delComment(commentId)}
                />
              </li>
            </ul>
          </footer>
        </div>
      </div>
    )
  }
}

PostComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  pushVoteComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
}

export default withRouter(
  connect(null, { pushVoteComment, delComment })(PostComment)
)
