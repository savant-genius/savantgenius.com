import React, {useRef} from 'react';
import styled from 'styled-components';
import data from '../data.json';
import Section from './Section';
import useScrollDirection from '../hooks/useScrollDirection';

const Content = () => {
  const works = data.works;
  const contentContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = sectionRefs.current.slice(0, works.length + 1);
  sectionRefs.current[0] = useRef();
  const currentSectionIndex = useRef(0);

  const goToNextSection = () => {
    currentSectionIndex.current = Math.min(currentSectionIndex.current + 1,
      sectionRefs.current.length - 1);
    sectionRefs.current[currentSectionIndex.current].scrollIntoView(
      {behavior: 'smooth'});
  };

  const goToPrevSection = () => {
    currentSectionIndex.current = Math.max(currentSectionIndex.current - 1, 0);
    sectionRefs.current[currentSectionIndex.current].scrollIntoView(
      {behavior: 'smooth'});
  };

  useScrollDirection(contentContainerRef, goToNextSection, goToPrevSection);

  return (
    <Container ref={contentContainerRef}>
      <Section
        ref={element => sectionRefs.current[0] = element}
        copy={data.description}
        bottom={data.contact_email}
      />
      {works.map((section, index) => (
        <Section
          name={section.id}
          key={section.id}
          ref={element => sectionRefs.current.push(element)}
          copy={section.copy}
          image_url={section.image}
          site_url={section.url}
          site_name={section.link}
        />
      ))}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  height: calc(100vh - var(--header-height) - (4 * var(--outer-padding)));
  padding-left: var(--outer-padding);
  padding-right: var(--outer-padding);
  overflow: hidden;
`;
