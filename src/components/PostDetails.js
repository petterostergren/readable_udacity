import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'
import PostComment from './PostComment'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    this.props.getPosts()
    this.props.getComments(match.params.postId)
  }

  renderComments() {
    const { comments } = this.props
    return _.map(comments, comment => {
      return (
        <PostComment
          key={comment.id}
          postId={comment.id}
          body={comment.body}
          author={comment.author}
          voteScore={comment.voteScore}
          timestamp={comment.timestamp}
        />
      )
    })
  }

  renderPosts() {
    console.log('post')
    const { post } = this.props
    console.log(post)
    return (
      <div>
        {post && (
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
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          {this.renderPosts()} <hr /> {this.renderComments()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { posts, comments } = state
  console.log(posts, 'OwnProps: postId', ownProps.match.params.postId)
  return {
    comments: comments[ownProps.match.params.postId],
    post: posts.filter(item => item.postId === ownProps.match.params.postId),
  }
}

export default connect(mapStateToProps, { getPosts, getComments })(PostDetails)
