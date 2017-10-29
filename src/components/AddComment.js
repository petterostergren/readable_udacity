import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addComment } from '../actions/comment'
import { validate } from '../utils/helper'
import FormRenderForm from './FormRenderForm'
import FormButtons from './FormButtons'

class AddComment extends Component {
  onSubmit(values) {
    this.props.addComment(values, this.props.match.params.postId)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Add Comment</h1>

          <form
            className="form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <div className="form-content-container">
              <Field
                label="Author"
                name="author"
                type="input"
                textType="text"
                component={FormRenderForm}
              />

              <Field
                label="Body"
                name="body"
                type="textarea"
                textType="text"
                component={FormRenderForm}
              />

              <FormButtons {...this.props} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AddComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  match: PropTypes.object,
  addComment: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'EditPost',
    validate,
  })(connect(null, { addComment })(AddComment))
)
