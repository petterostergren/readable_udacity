import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getComments } from '../actions/comment'
import { timeConverter } from '../utils/helper'
import { pushVotePost } from '../actions/post'

class PostComponent extends Component {
  componentWillMount() {
    const { postId } = this.props
    getComments(postId)
  }

  renderComments() {
    const { isPost, comments } = this.props
    if (isPost) {
      return <div>{comments}</div>
    } else {
      return <div />
    }
  }

  renderPost() {
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
    } = this.props
    const time = timeConverter(timestamp)
    return (
      <div key={postId}>
        <div className="">
          <ul className="">
            <li>
              <p>
                <span
                  className="fa fa-angle-up voteArrow"
                  onClick={() => pushVotePost('upVote', postId)}
                />
              </p>
            </li>
            <li className="votes">{voteScore}</li>
            <li>
              <span
                className="fa fa-angle-down voteArrow"
                onClick={() => pushVotePost('downVote', postId)}
              />
            </li>
          </ul>
        </div>
        <div className="">
          <Link to={`${category}`}>
            <span className="">{category}</span>
          </Link>
          {readirect ? (
            <Link to={`${category}/${postId}`}>
              <h3 className="">{title}</h3>
              <p>{body ? `${body}` : ''}</p>
              <footer className="">
                Writte by {author}, {time}
              </footer>
            </Link>
          ) : (
            <div>
              <h3 className="">{title}</h3>
              <p>{body ? `${body}` : ''}</p>
              <footer className="">
                Writte by {author}, {time}
              </footer>
              {this.renderComments()}
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.renderPost()}</div>
  }
}

PostComponent.propTypes = {
  id: PropTypes.string,
  voteScore: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  timestamp: PropTypes.number,
}

const mapStateToProps = (state, ownProps) => {
  comments: state.commets
}

export default connect(mapStateToProps, { pushVotePost, getComments })(PostComponent)
