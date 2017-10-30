import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment'
import { validate } from '../utils/helper'
import FormRenderForm from './FormRenderForm'
import FormButtons from './FormButtons'

class CommentEdit extends Component {
  onSubmit = values => {
    console.log(values)
    this.props.editComment(values, this.props.match.params.commentId)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Edit Comment</h1>

          <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-content-container">
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

CommentEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'EditComment',
    validate,
  })(connect(null, { editComment })(CommentEdit))
)
