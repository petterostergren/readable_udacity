import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

            {/* <li>
              <span className="dropdown">
                <button className="dropbtn" onClick="myFunction()">
                  Categories
                  <i className="fa fa-caret-down" />
                </button>
                <span className="dropdown-content" id="myDropdown">
                  {categories.map(c => (
                    <Link key={c.name} to={`${c.path}`}>
                      {c.name}
                    </Link>
                  ))}
                </span>
              </span>
            </li> */}

          </ul>
        </nav>
      </div>
    )
  }
}

export default connect(state => ({ categories: state.categories }), {
  getCategories,
})(Header)
