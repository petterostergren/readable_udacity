import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategoriesPost } from '../actions/category'
import PostComponent from './PostComponent'
import SortPosts from './SortPosts'

class CategoryView extends Component {
  componentDidMount() {
    const { getCategoriesPost } = this.props
    getCategoriesPost(this.props.match.params.category)
    console.log(this.props)
  }

  renderPosts() {
    const { categories } = this.props
    console.log(categories)
    return _.map(categories, post => {
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

export default connect(state => ({ categories: state.categories }), {
  getCategoriesPost,
})(CategoryView)
