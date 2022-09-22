import React from 'react';
import styled from 'styled-components';

export const Link = ({children, href}) => {

  const onTouch = () => {
    window.open(href, '_blank');
  }

  return (
    <Container>
      <a onTouchEnd={onTouch} target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.8em;
`;
