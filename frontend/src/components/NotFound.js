import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NotFound = props => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <Link className="a-404" to={'/'}>
          <h1>404: Sorry, we seem to have misplaced that file</h1>
          <h3>
            Let us help you back on track to something new and interesting
          </h3>
          <div className="container-404">
            <i className="fa fa-backward" aria-hidden="true" />
            <i className="fa fa-home" aria-hidden="true" />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default withRouter(NotFound)
