import { SubmissionError } from 'redux-form';

function submit(values) {
  if (values.username !== "Pavel") {
    throw new SubmissionError({
      username: 'User does not exist',
      _error: 'Login failed!',
    });
  } else if (values.password !== 'ABsoft') {
    throw new SubmissionError({
      password: 'Wrong password',
      _error: 'Login failed!',
    });
  };
}

export default submit;
