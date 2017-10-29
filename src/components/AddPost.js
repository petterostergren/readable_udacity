import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import { getCategories } from '../actions/category'
import { validate } from '../utils/helper'

class AddPost extends Component {
  componentWillMount() {
    const { getCategories } = this.props
    getCategories()
  }

  renderField(field) {
    if (field) {
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
  }

  renderSelect(field) {
    if (field) {
      return (
        <div className="field">
          <div className="control">
            <label className="label">{field.label}</label>
            <select className="select" {...field.input}>
              <option />
              {field.data.map(c => (
                <option key={c.name} value={c.path}>
                  {c.name}
                </option>
              ))}
            </select>
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
  }

  onSubmit(values) {
    this.props.createPost(values)
    this.props.history.goBack()
  }

  cancelSubmission() {
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit, categories } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Add Post</h1>

          <form
            className="form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <div className="form-content-container">
              <Field
                label="Title"
                name="title"
                type="input"
                textType="text"
                component={this.renderField}
              />

              <Field
                label="Author"
                name="author"
                type="input"
                textType="text"
                component={this.renderField}
              />

              <Field
                label="Category"
                name="category"
                data={categories}
                dataKey="name"
                dataValue="path"
                component={this.renderSelect}
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
          </form>
        </div>
      </div>
    )
  }
}

AddPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'CreatePost',
    validate,
  })(
    connect(state => ({ categories: state.categories }), {
      createPost,
      getCategories,
    })(AddPost)
  )
)
