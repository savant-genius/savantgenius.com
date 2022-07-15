import React, {forwardRef} from 'react';
import {IconDown} from './IconDown';
import {IconUp} from './IconUp';
import {WorkContainer} from './WorkContainer';
import {Link} from './Link';

export const Work = forwardRef((props, ref) => {
  const {copy, site_url, image_url, site_name, isLast} = props;

  const arrowElement = isLast
    ? <IconUp/>
    : <IconDown/>;

  return (
    <WorkContainer ref={ref}>
      <div className={'copy'}>{copy}</div>
      <div className={'bottom'} style={{alignSelf:'flex-end'}}>
        {site_name && site_url
          ? <Link href={site_url}>{site_name}</Link>
          : null
        }
        <img
          style={{width: '100%', marginTop: '10px'}}
          src={image_url}
          alt={site_name}
        />
        {arrowElement}
      </div>
    </WorkContainer>
  );
});
