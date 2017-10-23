import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
    const { comments, post } = this.props
    console.log(
      'This is how comments looks after leving mapStateToProps: ',
      comments
    )
    return _.map(comments, comment => {
      return (
        <div key={comment.id} className="post-container">
          {post ? (
            <PostComment
              key={comment.id}
              postId={comment.id}
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
    return (
      <div className="container-wrapper">
        <div className="container">
          {this.renderPosts()}
          <hr /> {this.renderComments()}
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
  console.log('This is how comments look inside of mapStateToProps', comments)
  return {
    comments: comments[ownProps.match.params.postId],
    post: posts.filter(
      item => item.id === ownProps.match.params.postId && item.deleted !== true
    )[0],
  }
}

export default connect(mapStateToProps, { getPosts, getComments })(PostDetails)
