import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from '../helpers/submit';
import TipsCard from './TipsCard';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

const LoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="container login-box">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit(submit)}>
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
          {error && <strong className="isa_error">
            <i className="fa fa-times-circle"></i>
            {error}
          </strong>}
          <div>
            <button className="sumbit-btn btn waves-effect waves-light" type="submit" disabled={submitting}>Log In</button>
            <button style={{ left: 20 }} className="clear-btn btn waves-effect waves-light" type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
          </button>
            {/* <a href="#" className="right btn-floating btn-large waves-effect waves-light red"><i class=" material-icons">add</i></a> */}
          </div>
        </form>
        <div className="tipcard">
          <TipsCard />
        </div>
      </div>
    </div >
  );
};

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginForm);
