import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

const SortPosts = props => {
  const { match } = props
  const urlMatch = match.path !== '/:category/:postId'

  return (
    <div className={urlMatch ? 'sort-posts' : 'sort-comments'}>
      <div className={urlMatch ? 'dropdown-sort' : 'dropdown-sort-comments'}>
        <button className={urlMatch ? 'dropbtn-sort' : 'dropbtn-sort-comments'}>
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

SortPosts.propTypes = {
  match: PropTypes.object.isRequired,
}

export default withRouter(SortPosts)
