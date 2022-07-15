import React from 'react';
import styled from 'styled-components';

export const Header = ({handleClick}) => {
  return (
    <Container onClick={handleClick}>
      <img src="/SG_Logo.svg" alt="Savant Genius"/>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding-top: var(--outer-padding);
  padding-left: var(--outer-padding);
  padding-right: var(--outer-padding);
  background-color: var(--background-color);

  & > img {
    width: 100%;
    @media screen and (min-width: 750px) {
      width: 50%;
    }
    @media screen and (max-height: 500px) {
      width: 50%;
    }
  }
`;
