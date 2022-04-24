import React, {useLayoutEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import data from '../data.json';
import Section from './Section';

const Content = () => {
  const works = data.works;
  const content = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const goToNextSection = () => {
    console.log('next', content.current.scrollTop, content.current.offsetTop)
    // content.current.scrollIntoView();
    setLastScrollY(window.scrollY);
  }

  const goToPrevSection = () => {
    console.log('prev', content.current.scrollTop, window.scrollY)
    setLastScrollY(window.scrollY);
  }

  const handleScroll = () => {
    if (!scrolling) {
      setScrolling(true);
      const previousScroll = content.current.scrollTop;
      console.log(previousScroll)
      if (content.current.scrollTop > previousScroll) {
        goToNextSection();
      } else if (content.current.scrollTop < previousScroll) {
        goToPrevSection();
      }
    }
  }

  useLayoutEffect(() => {
    console.log('hi');
    content.current.scrollY = '100px';
    content.current.addEventListener('scroll', handleScroll);
    // return () => content.current.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <Container ref={content}>
      <Section
        copy={data.description}
        bottom={data.contact_email}
      />
      {works.map(section => (
        <Section
          name={section.id}
          key={section.id}
          copy={section.copy }
          image_url={section.image}
          site_url={section.url}
          site_name={section.link}
        />
      ))}
    </Container>
  )
}

export default Content;

const Container = styled.div`
  height: calc(100vh - var(--header-height) - (4 * var(--outer-padding)));
  padding-left: var(--outer-padding);
  padding-right: var(--outer-padding);
  overflow: hidden;
`;
