import React, { useState } from 'react';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', referrer: '' });

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

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    });
  };

  return (
    <div>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="cool-stuff"
        data-netlify="true"
        onSubmit={submitForm}
      >
        <input type="hidden" name="contact" value="contact" />
        <input type="hidden" name="cool-stuff" />
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={updateValues}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={updateValues}
            required
          />
        </label>
        <label htmlFor="referrer">
          How did you hear about me?
          <select
            id="referrer"
            name="referrer"
            value={values.referrer}
            onChange={updateValues}
          >
            <option value="" default>
              N/A
            </option>
            <option value="google">Google Search</option>
            <option value="social-media">
              Social Media (Facebook, Twitter, Instagram, LinkedIn)
            </option>
            <option value="word-of-mouth">Word Of Mouth</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
