import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span className="isa-error">{error}</span>}
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default RenderField;
