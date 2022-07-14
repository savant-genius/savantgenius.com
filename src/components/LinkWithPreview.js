import React from 'react';
import {Link} from './Link';

export const LinkWithPreview = ({link_text, link_href, image_url}) => {
  return (
    <div>
      {link_text && link_href
        ? <Link
          text={link_text}
          href={link_href}
        />
        : null
      }
      <img
        style={{width: '100%', marginTop: '10px'}}
        src={image_url}
        alt={link_text}
      />
    </div>
  );
};
