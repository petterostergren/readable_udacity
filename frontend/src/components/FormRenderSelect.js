import React from 'react'
import PropTypes from 'prop-types'

const FormRenderSelect = props => {
  const { label, input, meta, data } = props
  return (
    <div className="field">
      <div className="control">
        <label className="label">{label}</label>
        <select className="select" {...input}>
          <option />
          {data.map(c => (
            <option key={c.name} value={c.path}>
              {c.name}
            </option>
          ))}
        </select>
        {meta.touched &&
          meta.error && (
            <p className="error">
              <i className="fa fa-exclamation-circle" aria-hidden="true" />
              {meta.error}
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
