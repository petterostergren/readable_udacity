import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getCategories } from '../actions/category'

class Header extends Component {
  componentWillMount() {
    const { getCategories } = this.props
    getCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <nav className="top-nav">
          <div className="left-top-nav">
            <Link to={'/'}>Readable</Link>
          </div>
          <ul>
            <li>
              <Link to={'/addPost'}>
                <i className="fa fa-plus" aria-hidden="true" />
              </Link>
            </li>

            {categories.map(c => (
              <li key={c.name}>
                <Link to={`${c.path}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

export default withRouter(
  connect(state => ({ categories: state.categories }), {
    getCategories,
  })(Header)
)
