import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addComment } from '../actions/comment'
// import { createPost } from '../actions/posts'

class AddComment extends Component {
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
    
    this.props.addComment(values, this.props.match.params.postId)
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
            {/* TODO: add dafult state (prevState) */}
            <div className="form-content-container">
              <Field
                label="Author"
                name="author"
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

              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn" type="reset">
                <Link to="/">Cancel</Link>
              </button>
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
}

export default reduxForm({
  form: 'EditPost',
})(connect(null, { addComment })(AddComment))
