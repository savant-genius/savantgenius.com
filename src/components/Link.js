import React from 'react';
import styled from 'styled-components';

export const Link = ({text, href}) => {
  return (
    <Container>
      <a target="_blank" rel="noreferrer" href={href}>{text}</a>
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.8em;

  & > img {
    display: inline;
    height: 1rem;
    margin-left: 1rem;
  }
`;
