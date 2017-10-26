import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getPosts, editPost } from '../actions/posts'
// import { createPost } from '../actions/posts'

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
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
    this.props.editPost(values, this.props.match.params.postId)
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
            {/* TODO: add dafult state (prevState) */}
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

                <button className="btn" type="submit">
                  Submit
                </button>
                <button className="btn" type="reset">
                  <Link to="/">Cancel</Link>
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
  })(connect(mapStateToProps, { getPosts, editPost })(PostEdit))
)
