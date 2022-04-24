import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import LinkWithPreview from './LinkWithPreview';

const Section = ({copy, site_url, image_url, bottom, site_name}) => {
  return (
    <Container>
      <Copy>
        {copy}
        {bottom ?
          <Bottom><Link text={bottom} href={`mailto:${bottom}`}/></Bottom> :
          null}
      </Copy>
      {site_url && image_url ?
        <Preview>
          <LinkWithPreview image_url={image_url} link_text={site_name} link_href={site_url}/>
        </Preview>
        : null}
    </Container>
  );
};

export default Section;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - var(--header-height) - var(--outer-padding));
  padding: 0;
  margin-top: var(--outer-padding);
  
  @media screen and (min-width: 750px) {
    flex-direction: row;
  }
`;

const Copy = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Preview = styled.div`
  & > img {
    width: 100%;
  }
`;

const Bottom = styled.div`
  justify-self: flex-end;
`;
