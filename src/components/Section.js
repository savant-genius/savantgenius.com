import React, {forwardRef} from 'react';
import styled from 'styled-components';
import Link from './Link';
import LinkWithPreview from './LinkWithPreview';

const Section = forwardRef(({copy, site_url, image_url, bottom, site_name}, ref) => {
  return (
    <Container ref={ref}>
      <Copy>
        {copy}
        {bottom ?
          <Bottom>
            <Link text={bottom} href={`mailto:${bottom}`}/>
          </Bottom> :
          null
        }
      </Copy>
      {site_url && image_url ?
        <Preview>
          <LinkWithPreview
            image_url={image_url}
            link_text={site_name}
            link_href={site_url}
          />
        </Preview>
        : null
      }
    </Container>
  );
});

export default Section;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - var(--header-height));
  padding: 0;
  margin-bottom: calc(2 * var(--outer-padding));

  @media screen and (min-width: 750px) {
    flex-direction: row;
  }
`;

const Copy = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (min-width: 750px) {
    width: 50%;
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

const Bottom = styled.div`
  justify-self: flex-end;
`;
