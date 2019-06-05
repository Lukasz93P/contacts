export const required = value => (value ? undefined : 'This field is required');

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength (2);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (value)
    ? 'Invalid email address'
    : undefined;