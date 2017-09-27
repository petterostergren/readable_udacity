import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { timeConverter } from '../utils/helper'

class PostComponent extends Component {
  renderPost() {
    const { id, title, voteScore, author, category, timestamp } = this.props
    const time = timeConverter(timestamp)
    return (
      <div key={id}>
        <div className="">
          <ul className="">
            <li>
              <p>
                <span
                  className="fa fa-angle-up voteArrow"
                  onClick={() => ('upVote', id)}
                />
              </p>
            </li>
            <li className="votes">{voteScore}</li>
            <li>
              <span
                className="fa fa-angle-down voteArrow"
                onClick={() => ('downVote', id)}
              />
            </li>
          </ul>
        </div>
        <div className="">
          <Link to={`${category}`}>
            <span className="">{category}</span>
          </Link>
          <Link to={`${category}/${id}`}>
            <h3 className="">{title}</h3>
            <footer className="">
              Writte by {author}, {time}
            </footer>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.renderPost()}</div>
  }
}

PostComponent.propTypes = {
  id: PropTypes.string,
  voteScore: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  timestamp: PropTypes.number,
}

export default connect(null, null)(PostComponent)
