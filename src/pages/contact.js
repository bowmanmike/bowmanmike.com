import React from 'react';

import Seo from '../components/Seo';

const ContactPage = () => (
  <div>
    <Seo title="Contact" />
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 className="text-lg leading-6 font-medium">Email</h3>
              <dl className="mt-2 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href="mailto:hello@mikebowman.dev">
                      hello@mikebowman.dev
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium">Github</h3>
              <dl className="mt-2 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Github</dt>
                  <dd>
                    <a href="https://github.com/bowmanmike">@bowmanmike</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium">Instagram</h3>
              <dl className="mt-2 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Instagram</dt>
                  <dd>
                    <a href="https://www.instagram.com/mikebowman.dev/">
                      @mikebowman.dev
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium">LinkedIn</h3>
              <dl className="mt-2 text-base text-gray-500">
                <div>
                  <dt className="sr-only">LinkedIn</dt>
                  <dd>
                    <a href="https://www.linkedin.com/in/bowmanmike1/">
                      Mike Bowman
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium">Twitter</h3>
              <dl className="mt-2 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Twitter</dt>
                  <dd>
                    <a href="https://twitter.com/mikebowman_dev">
                      @mikebowman_dev
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
