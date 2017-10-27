import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import { getCategories } from '../actions/category'

class AddPost extends Component {
  componentWillMount() {
    const { getCategories } = this.props
    getCategories()
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
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
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

              <div className="field">
                <div className="control">
                  <label className="label">Category</label>
                  <Field name="category" className="select" component="select">
                    <option />
                    {categories.map(c => (
                      <option key={c.name} value={c.path}>
                        {c.name}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>

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

AddPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(
  reduxForm({
    form: 'CreatePost',
  })(
    connect(state => ({ categories: state.categories }), {
      createPost,
      getCategories,
    })(AddPost)
  )
)
