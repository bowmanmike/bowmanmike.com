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
        <fieldset>
          <legend>How did you hear about me?</legend>
          <label htmlFor="none">
            N/A
            <input
              type="radio"
              value=""
              id="none"
              onChange={updateValues}
              name="referrer"
              defaultChecked
            />
          </label>
          <label htmlFor="word-of-mouth">
            Word Of Mouth
            <input
              type="radio"
              value="word-of-mouth"
              id="word-of-mouth"
              onChange={updateValues}
              name="referrer"
            />
          </label>
          <label htmlFor="social-media">
            Social Media (Facebook, Instagram, LinkedIn)
            <input
              type="radio"
              value="social-media"
              id="social-media"
              onChange={updateValues}
              name="referrer"
            />
          </label>
          <label htmlFor="google">
            Google Search
            <input
              type="radio"
              value="google"
              id="google"
              onChange={updateValues}
              name="referrer"
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
