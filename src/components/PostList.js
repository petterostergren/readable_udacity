import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { compareHighestScore, comparePublished } from '../utils/helper'
import PostComponent from './PostComponent'

class PostList extends Component {
  renderPosts() {
    const { posts } = this.props
    const searchString = queryString.parse(this.props.location.search)
    let searchValue = Object.values(searchString)
    searchValue = searchValue[0]

    if (searchValue === 'votes') {
      const sortedPosts = posts.sort(compareHighestScore)
      console.log(sortedPosts)
      return _.map(sortedPosts, post => {
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
    } else if (searchValue === 'published') {
      const sortedPosts = posts.sort(comparePublished)
      console.log(sortedPosts)
      return _.map(sortedPosts, post => {
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
    } else {
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
  }

  render() {
    return <div className="post-container">{this.renderPosts()}</div>
  }
}

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

export default PostList
