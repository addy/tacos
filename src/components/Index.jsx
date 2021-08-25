import React from 'react';
import Article from './Article';

const Index = () => (
  <div className='flex justify-center antialiased text-gray-900 w-full'>
    <div className='flex flex-col space-y-10 px-4 py-10 max-w-3xl sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl'>
      <Article title="Torchy's Tacos">
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nam tempor, eros non mollis lobortis, odio lorem viverra nibh, ac commodo
          libero neque sit amet risus. Morbi dignissim nunc purus, vel viverra leo dapibus nec.
          Etiam aliquam est pretium diam mollis maximus. Donec efficitur nisl vitae risus maximus
          lacinia. Aliquam vehicula quis orci a mattis. Praesent laoreet ipsum a ante mattis
          faucibus. Duis at justo sagittis, facilisis diam eu, lacinia urna. Aenean ultrices lacus
          vitae bibendum varius.
        </p>
      </Article>
      <Article title="Don Antonio's">
        <p>
          Fusce gravida pharetra elit vitae lacinia. Aliquam at pharetra turpis. Nam pellentesque
          mauris purus, ac efficitur sem cursus a. Cras vestibulum non libero non malesuada. Donec
          iaculis mauris sapien, sit amet ultrices lacus vulputate eu. Cras finibus lacus sit amet
          bibendum dapibus. Donec in dui at nunc aliquet blandit in ut purus. Phasellus eu dui orci.
          Etiam sit amet odio eros. Sed nec mollis purus.
        </p>
      </Article>
      <Article title="TEST">
        <p>
          Fusce gravida pharetra elit vitae lacinia. Aliquam at pharetra turpis. Nam pellentesque
          mauris purus, ac efficitur sem cursus a. Cras vestibulum non libero non malesuada. Donec
          iaculis mauris sapien, sit amet ultrices lacus vulputate eu. Cras finibus lacus sit amet
          bibendum dapibus. Donec in dui at nunc aliquet blandit in ut purus. Phasellus eu dui orci.
          Etiam sit amet odio eros. Sed nec mollis purus.
        </p>
      </Article>
    </div>
  </div>
);

export default Index;
