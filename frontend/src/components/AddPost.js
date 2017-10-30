import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import { getCategories } from '../actions/category'
import { validate } from '../utils/helper'
import FormRenderForm from './FormRenderForm'
import FormRenderSelect from './FormRenderSelect'
import FormButtons from './FormButtons'

class AddPost extends Component {
  componentWillMount() {
    const { getCategories } = this.props
    getCategories()
  }

  onSubmit = values => {
    this.props.createPost(values)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit, categories } = this.props
    return (
      <div className="container-wrapper">
        <div className="container">
          <h1>Add Post</h1>

          <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-content-container">
              <Field
                label="Title"
                name="title"
                type="input"
                textType="text"
                component={FormRenderForm}
              />

              <Field
                label="Author"
                name="author"
                type="input"
                textType="text"
                component={FormRenderForm}
              />

              <Field
                label="Category"
                name="category"
                data={categories}
                dataKey="name"
                dataValue="path"
                component={FormRenderSelect}
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
