/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import startCase from 'lodash.startcase';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    from: '',
    content: '',
  });

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

  const submitForm = e => {
    e.preventDefault();

    if (process.env.NODE_ENV === 'production') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      });
    } else {
      console.log({ values });
    }
  };

  return (
    <div className="border border-gray-400 p-2 m-4 shadow-md">
      <h3 className="text-2xl mb-2 border-sage border-b-4 max-w-max pr-8">
        Get In Touch!
      </h3>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="cool-stuff"
        data-netlify="true"
        onSubmit={submitForm}
        className="w-full"
      >
        <input type="hidden" name="contact" value="contact" />
        <input type="hidden" name="cool-stuff" />
        {['name', 'email'].map(tag => (
          <label
            htmlFor={tag}
            className="w-full flex my-2 items-center justify-between"
            key={`form-input-${tag}`}
          >
            {startCase(tag)}
            <input
              type="text"
              id={tag}
              name={tag}
              value={values[tag]}
              onChange={updateValues}
              required
              className="ml-2"
              placeholder={`Your ${startCase(tag)}`}
            />
          </label>
        ))}
        <label htmlFor="content">
          <p>How can I help?</p>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={updateValues}
            className="w-full"
          />
        </label>
        <label htmlFor="from">How did you hear about me?</label>
        <select id="from" name="from[]">
          {['word-of-mouth', 'social-media', 'google', 'none'].map(source => (
            <option value={source} key={`form-select-${source}`}>
              {startCase(source)}
            </option>
          ))}
        </select>
        <fieldset className="grid grid-cols-1 gap-2 mb-4">
          <legend className="mb-2">How did you hear about me?</legend>
          {['word-of-mouth', 'social-media', 'google', 'none'].map(source => (
            <label
              key={`form-radio-${source}`}
              className="flex items-center justify-between border border-gray-400 p-2"
            >
              {source === 'none' ? 'Somewhere Else' : startCase(source)}
              <input
                type="radio"
                value=""
                id={source}
                onChange={updateValues}
                name="from-backup"
                defaultChecked={source === 'none'}
              />
            </label>
          ))}
        </fieldset>
        <button
          type="submit"
          className="block w-full border border-gray-400 bg-sage-400 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
