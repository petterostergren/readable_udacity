import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import FormEditPost from './FormEditPost'

class PostEdit extends Component {
  componentWillMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { posts } = this.props
    if (posts) {
      const initialValues = {
        title: posts.title,
        body: posts.body,
      }
      return (
        <div className="container-wrapper">
          <div className="container">
            <h1>Edit Post</h1>
            <FormEditPost initialValues={initialValues} />
          </div>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

PostEdit.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object,
}

const mapStateToProps = ({ posts, initialValues }, ownProps) => {
  return {
    posts: posts.filter(
      item => item.id === ownProps.match.params.postId && item.deleted !== true
    )[0],
  }
}

export default withRouter(connect(mapStateToProps, { getPosts })(PostEdit))
