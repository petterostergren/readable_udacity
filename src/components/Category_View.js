import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoriesPost } from '../actions/category'
import PostComponent from './PostComponent'

class CategoryView extends Component {
  componentDidMount() {
    const { getCategoriesPost } = this.props
    getCategoriesPost(this.props.match.params.category)
  }

  renderPosts() {
    const { categories } = this.props
    return _.map(categories, post => {
      return (
        <PostComponent
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          voteScore={post.voteScore}
          category={post.category}
          timestamp={post.timestamp}
        />
      )
    })
  }

  render() {
    return <div>{this.renderPosts()}</div>
  }
}

export default connect(state => ({ categories: state.categories }), {
  getCategoriesPost,
})(CategoryView)
