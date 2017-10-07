import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getComments } from '../actions/comment'
import { timeConverter } from '../utils/helper'
import { pushVotePost } from '../actions/posts'

class PostComponent extends Component {
  componentWillMount() {
    const { postId } = this.props
    getComments(postId)
  }

  renderNumberOfCommets(postId) {
    const { comments } = this.props
    return comments.length
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
      comments,
    } = this.props
    const time = timeConverter(timestamp)
    console.log('comments')
    console.log(comments)
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
              <p>Comments: {comments}</p>
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
                {/* TODO: Comments should go here in a numbered format. */}
                <p>Comments: {this.renderNumberOfCommets(postId)}</p>
              </footer>
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
  console.log('PostComponent, mapStateToProps ownProps')
  console.log(ownProps)
  return {
    comments: state.comments[ownProps.postId],
  }
}

export default connect(mapStateToProps, { pushVotePost, getComments })(
  PostComponent
)
