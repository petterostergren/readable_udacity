import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getComments } from '../actions/comment'
import { timeConverter } from '../utils/helper'
import { pushVotePost, delPost } from '../actions/posts'

class PostComponent extends Component {
  componentDidMount() {
    const { postId, getComments } = this.props
    getComments(postId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments.find(x => x.deleted !== false)) {
      const { postId, getComments } = this.props
      getComments(postId)
    }
  }

  render() {
    const {
      postId,
      title,
      voteScore,
      author,
      category,
      timestamp,
      body,
      readirect,
      pushVotePost,
      comments,
      delPost,
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
          {readirect ? (
            <Link to={`${category}/${postId}`}>
              <h2 className="post-content-clickable">{title}</h2>
            </Link>
          ) : (
            <h2>{title}</h2>
          )}
          <p className="post-content-info">
            Posted in <Link to={`${category}`}>{category}</Link> by {author},{' '}
            {time}
          </p>
          {body ? <p>{body}</p> : ''}
          <footer className="post-footer">
            <ul>
              <li>
                <Link to={`${category}/${postId}/edit`}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <i
                  className="fa fa-trash-o trashCan"
                  aria-hidden="true"
                  onClick={() => delPost(postId)}
                />
              </li>
            </ul>
          </footer>
        </div>
        <div className="message-wrapper">
          {readirect ? (
            <Link to={`${category}/${postId}`}>
              <i className="fa fa-comments-o" aria-hidden="true" />
              <span className="comment-count">{comments.length}</span>
            </Link>
          ) : (
            <Link to={`${category}/${postId}`}>
              <i className="fa fa-comments-o" aria-hidden="true" />
              <span className="comment-count">{comments.length}</span>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

PostComponent.propTypes = {
  postId: PropTypes.string.isRequired,
  getComments: PropTypes.func.isRequired,
  pushVotePost: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  readirect: PropTypes.bool.isRequired,
  voteScore: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  delPost: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments[ownProps.postId]
      ? state.comments[ownProps.postId]
      : [] && _.filter(state.comments[ownProps.postId], ['deleted', false]),
  }
}

export default withRouter(
  connect(mapStateToProps, { pushVotePost, getComments, delPost })(
    PostComponent
  )
)
