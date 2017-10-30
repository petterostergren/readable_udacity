import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import SortPosts from './SortPosts'
import PostList from './PostList'

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>All Posts</h1>
          {<SortPosts {...this.props} />}
          {<PostList {...this.props} />}
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

export default connect(
  state => ({
    posts: _.filter(state.posts, ['deleted', false]),
  }),
  {
    getPosts,
  }
)(Posts)
