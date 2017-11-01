import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { compareHighestScore, comparePublished } from '../utils/helper'
import PostComponent from './PostComponent'

class PostList extends Component {
  renderPostsItem(post) {
    return (
      <div className="post-container">
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
  }

  renderPosts() {
    const { posts, location } = this.props
    const searchString = queryString.parse(location.search)
    let searchValue = Object.values(searchString)
    searchValue = searchValue[0]

    if (searchValue === 'votes') {
      const sortedPosts = posts.sort(compareHighestScore)
      return _.map(sortedPosts, post => {
        return <div key={post.id}>{this.renderPostsItem(post)}</div>
      })
    } else if (searchValue === 'published') {
      const sortedPosts = posts.sort(comparePublished)
      return _.map(sortedPosts, post => {
        return <div key={post.id}>{this.renderPostsItem(post)}</div>
      })
    } else {
      return _.map(posts, post => {
        return <div key={post.id}>{this.renderPostsItem(post)}</div>
      })
    }
  }

  render() {
    return <div className="post-container">{this.renderPosts()}</div>
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

export default PostList
