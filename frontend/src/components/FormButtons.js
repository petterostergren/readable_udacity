import React from 'react'
import PropTypes from 'prop-types'

const FormButtons = props => {
  const { anyTouched, valid, history } = props
  return (
    <div className="form-content-button">
      <button
        className={'btn'}
        type="submit"
        disabled={anyTouched && valid === false}
      >
        Submit
      </button>
      <button className="btn" type="reset" onClick={() => history.goBack()}>
        Cancel
      </button>
    </div>
  )
}

FormButtons.propTypes = {
  anyTouched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
}

export default FormButtons
