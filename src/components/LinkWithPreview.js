import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const LinkWithPreview = ({link_text, link_href, image_url}) => {
  return (
    <Container>
      {link_text && link_href ?
        <Link text={link_text} href={link_href}/> :
        null}
      <img className="preview-image" src={image_url} alt={link_text} />
    </Container>
  );
};

export default LinkWithPreview;

const Container = styled.div`
  & .preview-image {
    width: 100%;
  }
`;
