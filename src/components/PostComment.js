import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { timeConverter } from '../utils/helper'
import { pushVoteComment } from '../actions/comment'

class PostComment extends Component {
  render() {
    const {
      postId,
      voteScore,
      author,
      timestamp,
      body,
      pushVoteComment,
    } = this.props
    const time = timeConverter(timestamp)
    return (
      <div className="post" key={postId}>
        <div className="vote-container">
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => pushVoteComment('upVote', postId)}
          />
          <span className="vote-amount">{voteScore}</span>
          <i
            className="fa fa-chevron-down"
            onClick={() => pushVoteComment('downVote', postId)}
          />
        </div>
        <div className="post-content-container">
          <h2>{body}</h2>
          <p className="post-content-info">
            Posted by {author}, {time}
          </p>
          {body ? <p>{body}</p> : ''}
          <footer className="post-footer">
            <ul>
              <li>
                <Link to="#">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <i className="fa fa-trash-o trashCan" aria-hidden="true" />
              </li>
            </ul>
          </footer>
        </div>
      </div>
    )
  }
}

PostComment.propTypes = {
  postId: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  pushVoteComment: PropTypes.func.isRequired,
}

export default connect(null, { pushVoteComment })(PostComment)
