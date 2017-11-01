import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment'
import FormEditComment from './FormEditComment'
import queryString from 'query-string'
import NotFound from './NotFound'

class CommentEdit extends Component {
  render() {
    console.log(this.props)
    const searchString = queryString.parse(this.props.location.search)
    let searchValue = searchString['body']

    if (searchValue) {
      const initialValues = {
        body: searchValue,
      }

      return (
        <div className="container-wrapper">
          <div className="container">
            <h1>Edit Comment</h1>
            <FormEditComment initialValues={initialValues} />
          </div>
        </div>
      )
    } else {
      return <NotFound />
    }
  }
}

CommentEdit.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object,
}

export default withRouter(connect(null, { editComment })(CommentEdit))
