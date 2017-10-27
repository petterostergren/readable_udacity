import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'


class SortPosts extends Component {
  render() {
    return (
      <div className="sort-posts">
        <div className="dropdown-sort">
          <button className="dropbtn-sort">
            Sort by: <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content-sort">
            <Link to={{ search: 'sort=votes' }}>Votes</Link>
            <Link to={{ search: 'sort=published' }}>Published</Link>
          </div>
        </div>
      </div>
    )
  }
}

SortPosts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default withRouter(SortPosts)
