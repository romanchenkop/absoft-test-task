import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from '../helpers/submit';
import TipsCard from './TipsCard';
import '../styles/App.css'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span className="isa-error">{error}</span>}
  </div>
);

const LoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitSucceeded, history, submitting, valid } = props;
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
            <button onClick={() => { valid && history.push('/protected') }} style={{ top: 10 }} className="btn waves-effect waves-light" type="submit" disabled={submitting}>Log In</button>
            <button style={{ top: 10, left: 20 }} className="btn waves-effect waves-light" type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
          </button>
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
  form: 'LoginForm',
})(LoginForm);
