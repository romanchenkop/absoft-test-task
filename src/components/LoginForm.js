/* eslint-disable react/no-typos */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TipsCard from './TipsCard';
import '../styles/App.css';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import RenderField from './RenderField';

const LoginForm = ({ error, handleSubmit, pristine, reset, submitting, history }) => {

  //takes values from sumbit event and validates it
  function submit(values) {
    if (!values.username) {
      throw new SubmissionError({
        username: "Username is required",
      });
    } else if (values.username !== "Pavel") {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: "Password Required",
      });
    } else if (values.password !== 'ABsoft') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      history.push('/protected');
    }
  };

  return (
    <div>
      <img
        className="background-image"
        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg"
        alt="nature-background" />
      <div className="container login-box">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit(submit)}>
            <Field
              name="username"
              type="text"
              component={RenderField}
              label="Username"
            />
            <Field
              name="password"
              type="password"
              component={RenderField}
              label="Password"
            />
            {error && <strong className="isa_error">
              <i className="fa fa-times-circle"></i>
              {error}
            </strong>}
            <div>
              <button
                style={{ top: 10 }}
                className="btn waves-effect waves-light"
                type="submit"
                disabled={submitting}>
                Log In
              </button>
              <button
                style={{ top: 10, left: 20 }}
                className="btn waves-effect waves-light"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}>
                Clear Values
          </button>
            </div>
          </form>
          <div className="tipcard">
            <TipsCard />
          </div>
        </div>
      </div >
    </div>
  );
}

LoginForm.propTypes = {
  pristine: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.any,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  history: PropTypes.object,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
