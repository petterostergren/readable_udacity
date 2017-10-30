import React from 'react'
import PropTypes from 'prop-types'

const FormRenderSelect = props => {
  return (
    <div className="field">
      <div className="control">
        <label className="label">{props.label}</label>
        <select className="select" {...props.input}>
          <option />
          {props.data.map(c => (
            <option key={c.name} value={c.path}>
              {c.name}
            </option>
          ))}
        </select>
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

FormRenderSelect.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default FormRenderSelect
