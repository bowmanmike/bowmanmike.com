import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';

const AboutPage = () => (
  <div className="">
    <Seo title="About" />
    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi! I'm Mike!
          </h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2">
          <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <StaticImage
                src="../assets/images/mike-headshot.png"
                alt="Mike wearing a baseball cap and a blue jacket standing by a lake"
                width={3088}
                height={2320}
                placeholder="blurred"
                imgClassName="rounded-lg shadow-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </div>
          <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p>
              Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
              nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
              sit. Faucibus sed non gravida lectus dignissim imperdiet a.
            </p>
            <p>
              Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
              arcu, metus, egestas netus cursus. In.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
              vel ultricies. Vulputate aliquet velit faucibus semper.
              Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
              tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
              lacus in. Viverra.
            </p>
            <h3>How we helped</h3>
            <p>
              Tincidunt integer commodo, cursus etiam aliquam neque, et.
              Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
              feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
              proin massa, lectus. Diam rutrum posuere donec ultricies non
              morbi. Mi a platea auctor mi.
            </p>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
