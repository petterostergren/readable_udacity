import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FormButtons from './FormButtons'
import { editPost } from '../actions/posts'
import { editValidate } from '../utils/helper'

class FormEditPost extends Component {
  onSubmit = values => {
    this.props.editPost(values, this.props.match.params.postId)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit, anyTouched, error } = this.props

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-content-container">
          <div className="field">
            <div className="control">
              <label className="label">Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Add a heading"
              />
            </div>
            <div className="control">
              <label className="label">Body</label>
              <Field
                name="body"
                component="textarea"
                type="text"
                placeholder="What would you like to share"
              />
              {anyTouched &&
                error && (
                  <p className="error">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    />
                    {error}
                  </p>
                )}
            </div>
            <FormButtons {...this.props} />
          </div>
        </div>
      </form>
    )
  }
}

FormEditPost.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'formeditpomment',
    validate: editValidate,
  })(connect(null, { editPost })(FormEditPost))
)
