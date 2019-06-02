import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TipsCard from './TipsCard';
import '../styles/App.css';
import { SubmissionError } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span className="isa-error">{error}</span>}
  </div>
);


const LoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, submitErrors } = props;
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
              <button onClick={() => console.log(submitErrors)} style={{ top: 10 }} className="btn waves-effect waves-light" type="submit" disabled={submitting}>Log In</button>
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
    </div>
  );

  //takes values from sumbit event and validates it
  function submit(values) {
    if (!values.username) {
      throw new SubmissionError({
        username: "Username is required"
      });
    } else if (values.username !== "Pavel") {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: "Password Required"
      });
    } else if (values.password !== 'ABsoft') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      props.history.push('/protected')
    }
  };
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
