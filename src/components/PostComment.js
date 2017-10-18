import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { timeConverter } from '../utils/helper'
import { pushVotePost } from '../actions/posts'

class PostComment extends Component {
  render() {
    const {
      postId,
      voteScore,
      author,
      timestamp,
      body,
      pushVotePost,
    } = this.props
    const time = timeConverter(timestamp)
    return (
      <div className="post" key={postId}>
        <div className="vote-container">
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={() => pushVotePost('upVote', postId)}
          />
          <span className="vote-amount">{voteScore}</span>
          <i
            className="fa fa-chevron-down"
            onClick={() => pushVotePost('downVote', postId)}
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
                <Link to="#">
                  <i className="fa fa-trash-o" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    )
  }
}

PostComment.propTypes = {
  postId: PropTypes.string,
  voteScore: PropTypes.number,
  author: PropTypes.string,
  timestamp: PropTypes.number,
}

export default connect(null, { pushVotePost })(PostComment)
