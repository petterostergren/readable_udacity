import React from 'react'
import PropTypes from 'prop-types'

const FormRenderForm = props => {
  const { label, type, textType, input, meta } = props
  return (
    <div className="field">
      <div className="control">
        <label className="label">{label}</label>
        <props.type className={type} type={textType} {...input} />
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

FormRenderForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textType: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default FormRenderForm
