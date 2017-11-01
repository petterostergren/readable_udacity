import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoriesPost } from '../actions/category'
import { getPosts } from '../actions/posts'
import SortPosts from './SortPosts'
import PostList from './PostList'

class CategoryView extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { match } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>{`Showing ${match.params.category} post(s)`}</h1>
          {<SortPosts {...this.props} />}
          {<PostList {...this.props} />}
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

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    categories,
    posts: posts.filter(
      item => item.category === ownProps.match.params.category
    ),
  }
}

export default connect(mapStateToProps, { getCategoriesPost, getPosts })(
  CategoryView
)
