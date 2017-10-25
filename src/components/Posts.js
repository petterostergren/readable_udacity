import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostComponent from './PostComponent'
import SortPosts from './SortPosts'

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  renderPosts() {
    const { posts } = this.props
    return _.map(posts, post => {
      return (
        <div className="post-container" key={post.id}>
          <PostComponent
            key={post.id}
            postId={post.id}
            title={post.title}
            readirect
            author={post.author}
            voteScore={post.voteScore}
            category={post.category}
            timestamp={post.timestamp}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>All Posts</h1>
          {<SortPosts />}
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}

export default connect(
  state => ({
    posts: _.filter(state.posts, ['deleted', false]),
  }),
  {
    getPosts,
  }
)(Posts)
