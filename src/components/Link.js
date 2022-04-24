import React from 'react';
import styled from 'styled-components';

const Link = ({ text, href }) => {
  return (
    <Container>
      <a target="_blank" href={href}>{text}</a>
      <img style={{display: "inline"}} src={"/SG_Arrow.svg"}/>
    </Container>
  )
}

export default Link;

const Container = styled.div`
  & > img {
    display: inline;
    height: 1rem;
    margin-left: 1rem;
  }
`;
