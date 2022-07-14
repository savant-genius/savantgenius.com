import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {LinkWithPreview} from './LinkWithPreview';
import {WorkContainer} from './WorkContainer';
import {IconDown} from './IconDown';
import {IconUp} from './IconUp';

export const Work = forwardRef((props, ref) => {
  const {copy, site_url, image_url, site_name, isLast} = props;

  const arrowElement = isLast
    ? <IconUp/>
    : <IconDown/>;

  return (
    <WorkContainer ref={ref}>
      <div className={'copy'}>{copy}</div>
      <LowerHalf>
        <Preview>
          <LinkWithPreview
            image_url={image_url}
            link_text={site_name}
            link_href={site_url}
          />
        </Preview>
        {arrowElement}
      </LowerHalf>
    </WorkContainer>
  );
});

const LowerHalf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (min-width: 750px) {
    .icon {
      bottom: 10px;
      left: 10px;
    }
  }
`;

const Preview = styled.div`
  @media screen and (min-width: 750px) {
    width: 50%;
    align-self: flex-end;
  }
  
  & > img {
    width: 100%;
  }
`;
