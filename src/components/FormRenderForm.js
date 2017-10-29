import React from 'react'
import PropTypes from 'prop-types'

const FormRenderForm = props => {
  return (
    <div className="field">
      <div className="control">
        <label className="label">{props.label}</label>
        <props.type
          className={props.type}
          type={props.textType}
          {...props.input}
        />
        {props.meta.touched &&
          props.meta.error && (
            <p className="error">
              <i className="fa fa-exclamation-circle" aria-hidden="true" />
              {props.meta.error}
            </p>
          )}
      </div>
    </div>
  )
}

FormRenderForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textType: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default FormRenderForm
