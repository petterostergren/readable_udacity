import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FormButtons from './FormButtons'
import { editComment } from '../actions/comment'
import { editValidate } from '../utils/helper'

class FormEditComment extends Component {
  onSubmit = values => {
    this.props.editComment(values, this.props.match.params.commentId)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-content-container">
          <div className="field">
            <div className="control">
              <label className="label">Body</label>
              <Field
                name="body"
                component="textarea"
                type="text"
                placeholder="What would you like to share"
              />
            </div>
            <FormButtons {...this.props} />
          </div>
        </div>
      </form>
    )
  }
}

FormEditComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'formeditcomment',
    validate: editValidate,
  })(connect(null, { editComment })(FormEditComment))
)
