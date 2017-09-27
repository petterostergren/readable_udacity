import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post'

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { posts } = this.props
    console.log(posts)
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    posts: _.filter(state.posts, ['deleted', false]),
  }),
  {
    getPosts,
  }
)(Posts)
