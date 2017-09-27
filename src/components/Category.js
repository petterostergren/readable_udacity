import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/category'
import Posts from './Posts'

class Category extends Component {
  componentDidMount() {
    const { getCategories } = this.props
    getCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <h2>Category list</h2>
        <ul>
          {categories.map(c => (
            <li key={c.name}>
              <Link to={`${c.path}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
        <Posts />
      </div>
    )
  }
}

export default connect(state => ({ categories: state.categories }), {
  getCategories,
})(Category)
