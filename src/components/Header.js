import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <img src="/SG_Logo.svg" alt="Savant Genius"/>
    </Container>
  );
};

export default Header;

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
  }
`;
