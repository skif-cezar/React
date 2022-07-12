import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      This is page doesn&apos;t exist. Go <Link to="/">Home</Link>
    </div>
  );
};

export { NotFoundPage };
