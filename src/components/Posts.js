import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostComponent from './PostComponent'

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  renderPosts() {
    const { posts } = this.props
    return _.map(posts, post => {
      return (
        <div>
          <PostComponent
            key={post.id}
            postId={post.id}
            title={post.title}
            body={false}
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
    return <div>{this.renderPosts()}</div>
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
