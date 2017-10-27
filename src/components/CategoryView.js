import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoriesPost } from '../actions/category'
import { getPosts } from '../actions/posts'
import PostComponent from './PostComponent'
import SortPosts from './SortPosts'

class CategoryView extends Component {
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
          <h1>{`Showing ${this.props.match.params.category} post(s)`}</h1>
          {<SortPosts />}
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

CategoryView.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state
  return {
    categories: state.categories,
    posts: posts.filter(
      item => item.category === ownProps.match.params.category
    ),
  }
}

export default connect(mapStateToProps, { getCategoriesPost, getPosts })(
  CategoryView
)
