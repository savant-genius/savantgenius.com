import React from 'react';
import styled from 'styled-components';

export const Link = ({children, href}) => {
  return (
    <Container>
      <a target="_blank" rel="noreferrer" href={href}>{children}</a>
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.8em;
`;
