/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import startCase from 'lodash.startcase';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Wrapper = ({ children }) => (
  <div className="border border-gray-400 p-2 lg:p-4 m-4 lg:m-0 shadow-md">
    {children}
  </div>
);

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    from: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateValues(e) {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    setSubmitting(true);

    if (process.env.NODE_ENV === 'production') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(resp => {
          setSubmitting(false);
          setSubmitted(true);
          console.log({ resp });
        })
        .catch(err => {
          setSubmitting(false);
          console.log({ err });
        });
    } else {
      setSubmitting(false);
      setSubmitted(true);
      console.log({ values });
    }
  }

  if (submitted) {
    return (
      <Wrapper>
        <h3 className="text-2xl mb-2 border-sage border-b-4 max-w-max pr-8">
          Get In Touch!
        </h3>
        <p>Thanks! You'll be hearing back shortly!</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3 className="text-2xl mb-2 border-sage border-b-4 max-w-max pr-8">
        Get In Touch!
      </h3>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="cool-stuff"
        data-netlify="true"
        onSubmit={submitForm}
        className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-2"
      >
        <input type="hidden" name="contact" value="contact" />
        <input type="hidden" name="cool-stuff" />
        {['name', 'email'].map(tag => (
          <label
            htmlFor={tag}
            className="w-full block"
            key={`form-input-${tag}`}
          >
            <span className="border-sage border-b-2 pr-2">
              {startCase(tag)}
            </span>
            <input
              type="text"
              id={tag}
              name={tag}
              value={values[tag]}
              onChange={updateValues}
              required
              className="block w-full my-2 outline-none shadow-md"
              placeholder={`Your ${startCase(tag)}`}
            />
          </label>
        ))}
        <label htmlFor="content">
          <span className="border-sage border-b-2 pr-2">How can I help?</span>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={updateValues}
            className="w-full my-2 shadow-md"
            placeholder="Let me know what I can do for you!"
          />
        </label>
        <label>
          <span className="border-b-2 border-sage pr-2">
            How did you hear about me?
          </span>
          <select
            name="from"
            onChange={updateValues}
            className="w-full my-2 shadow-md"
          >
            {['word-of-mouth', 'social-media', 'google', 'none'].map(source => (
              <option value={source} key={`form-select-${source}`}>
                {source === 'none'
                  ? 'Other (Let me know above!)'
                  : startCase(source)}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className={`block w-full border border-gray-400 bg-sage-400 shadow-md mt-2 md:col-span-2 md:w-1/4 mx-auto py-2 ${
            submitting ? 'pointer-events-none bg-gray-300' : ''
          }`}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Wrapper>
  );
};

export default ContactForm;
