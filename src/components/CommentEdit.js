import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment'
// import { createPost } from '../actions/posts'

class CommentEdit extends Component {
  renderField(field) {
    return (
      <div className="field">
        <div className="control">
          <label className="label">{field.label}</label>
          <field.type
            className={field.type}
            type={field.textType}
            {...field.input}
          />
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
    this.props.editComment(values, this.props.match.params.commentId)
    this.props.history.goBack()
  }

  cancelSubmission() {
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Edit Comment</h1>

          <form
            className="form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <div className="form-content-container">
              <Field
                label="Body"
                name="body"
                type="textarea"
                textType="text"
                component={this.renderField}
              />

              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn"
                type="reset"
                onClick={this.cancelSubmission.bind(this)}
              >
                Cancel
              </button>
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
}

export default withRouter(
  reduxForm({
    form: 'EditComment',
  })(connect(null, { editComment })(CommentEdit))
)
