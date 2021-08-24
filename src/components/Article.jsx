import React from 'react';
import PropTypes from 'prop-types';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const Article = ({ title, children }) => (
  <article className='prose lg:prose-xl prose-indigo'>
    <h2>{title}</h2>
    {children}
    <div className='flex justify-end'>
      <ArrowNarrowRightIcon className='h-5 w-5 text-blue-500' />
    </div>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string])
    .isRequired,
};

export default Article;
