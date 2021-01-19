import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const trendingKeywords = [
  'ui designer',
  'developer',
  'it company',
  'design',
  'call center',
];

const TrendingKeyword = () => {
  return (
    <ul className="p-0 mt-4 d-flex align-items-center flex-wrap trending-keyword">
      <li className="mr-2">
        <FontAwesomeIcon
          style={{ width: '1rem' }}
          className="text-primary"
          icon={faTags}
        />
      </li>
      <li className="mr-2 text-muted">Trending Keyword:</li>
      {Array.isArray(trendingKeywords) &&
        trendingKeywords.map((item, i) => (
          <li key={i} className="mr-2">
            <Link to="#" className="text-muted">
              {item},
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingKeyword;
