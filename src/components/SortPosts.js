import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

class SortPosts extends Component {
  render() {
    const { match } = this.props
    return (
      <div className={match.path === '/' ? 'sort-posts' : 'sort-comments'}>
        <div
          className={
            match.path === '/' ? 'dropdown-sort' : 'dropdown-sort-comments'
          }
        >
          <button
            className={
              match.path === '/' ? 'dropbtn-sort' : 'dropbtn-sort-comments'
            }
          >
            <i className="fa fa-caret-down" /> Sort by
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
  match: PropTypes.object.isRequired,
}

export default withRouter(SortPosts)
