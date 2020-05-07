import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/SEO.component';

const error = () => {
  return (
    <div>
      <SEO
        title="Error 404"
        description="404 Page The Page you Requested Dosen't Seem To Exist"
      />
      <header>
        <hi>
          <AniLink fade to="/">
            OOPS it's a dead end back to home page
          </AniLink>
        </hi>
      </header>
    </div>
  );
};

export default error;
