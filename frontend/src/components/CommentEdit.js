import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment'
import FormEditComment from './FormEditComment'
import queryString from 'query-string'

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
      return (
        <div className="container-wrapper">
          <div className="container">
            <Link className="a-404" to={'/'}>
              <h1>404: Something seems to have gone wrong..</h1>
              <div className="container-404">
                <i className="fa fa-backward" aria-hidden="true" />
                <i className="fa fa-home" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      )
    }
  }
}

CommentEdit.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object,
}

export default withRouter(connect(null, { editComment })(CommentEdit))
