import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { getComments } from '../actions/comment'
import PostComponent from './PostComponent'

class PostDetails extends Component {
  componentDidMount() {
    const { getPosts, getComments, match } = this.props
    getPost(match.params.postId)
    getComments(match.params.postId)
  }

  renderComments() {
    const { comments, posts, match } = this.props
    return _.map(comments, comment => {
      return (
        <PostComponent
          key={comment.id}
          postId={comment.id}
          isPost={false}
          title=""
          body={comment.body}
          readirect={false}
          author={comment.author}
          voteScore={comment.voteScore}
          category=""
          timestamp={comment.timestamp}
        />
      )
    })
  }

  renderPostsa() {
    const { posts } = this.props
    return (
      <PostComponent
        key={posts.id}
        postId={posts.id}
        title={posts.title}
        body={posts.body}
        readirect={false}
        author={posts.author}
        voteScore={posts.voteScore}
        category={posts.category}
        timestamp={posts.timestamp}
      />
    )
  }

  renderPosts() {
    const { posts } = this.props
    return (
      <PostComponent
        key={posts.id}
        postId={posts.id}
        title={posts.title}
        body={posts.body}
        readirect={false}
        author={posts.author}
        voteScore={posts.voteScore}
        category={posts.category}
        timestamp={posts.timestamp}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderPosts()} <hr /> {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('PostDetails, mapStateToProps ownProps ')
  console.log(ownProps)
  return {
    comments: state.comments[ownProps.match.params.postId],
    posts: _.filter(state.posts, ['deleted', false]),
  }
}

export default connect(mapStateToProps, { getPost, getComments })(PostDetails)
