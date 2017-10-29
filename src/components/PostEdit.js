import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getPosts, editPost } from '../actions/posts'
import { validate } from '../utils/helper'

class PostEdit extends Component {
  componentWillMount() {
    const { getPosts } = this.props
    getPosts()
  }
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
          {field.meta.touched &&
            field.meta.error && (
              <p className="error">
                <i className="fa fa-exclamation-circle" aria-hidden="true" />
                {field.meta.error}
              </p>
            )}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.editPost(values, this.props.match.params.postId)
    this.props.history.goBack()
  }

  cancelSubmission() {
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit, posts } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Edit Post</h1>

          <form
            className="form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            {posts ? (
              <div className="form-content-container">
                <Field
                  label="Title"
                  name="title"
                  type="input"
                  textType="text"
                  component={this.renderField}
                />

                <Field
                  label="Body"
                  name="body"
                  type="textarea"
                  textType="text"
                  component={this.renderField}
                />

                <button
                  className={'btn'}
                  type="submit"
                  disabled={this.props.anyTouched && this.props.valid === false}
                >
                  Submit
                </button>
                <button
                  className="btn"
                  type="reset"
                  onClick={() => this.cancelSubmission()}
                >
                  Cancel
                </button>
              </div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    )
  }
}

PostEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object,
  editPost: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state
  return {
    posts: posts.filter(
      item => item.id === ownProps.match.params.postId && item.deleted !== true
    )[0],
  }
}

export default withRouter(
  reduxForm({
    form: 'EditPost',
    validate,
  })(connect(mapStateToProps, { getPosts, editPost })(PostEdit))
)
