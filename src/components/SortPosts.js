import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SortPosts extends Component {
  render() {
    return (
      <div className="sort-posts">
        <div className="dropdown-sort">
          <button className="dropbtn-sort">
            Sort by: <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content-sort">
            <Link to="#">Votes: High-Low</Link>
            <Link to="#">Votes: Low-High</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SortPosts
