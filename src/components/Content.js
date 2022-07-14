import React, {useRef, useCallback} from 'react';
import styled from 'styled-components';
import {Work} from './Work';
import useScrollDirection from '../hooks/useScrollDirection';

export const Content = ({works, switchIndex}) => {
  const contentContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = sectionRefs.current.slice(0, works.length);
  const sectionIndexRef = useRef(0);

  const goToNextSection = useCallback(() => {
    if (sectionIndexRef.current === sectionRefs.current.length - 1) {
      return;
    }
    sectionIndexRef.current = Math.min(
      sectionIndexRef.current + 1,
      sectionRefs.current.length - 1);
    sectionRefs.current[sectionIndexRef.current].scrollIntoView({
      behavior: 'smooth'
    });
  }, [sectionIndexRef, sectionRefs]);

  const goToPrevSection = useCallback(() => {
    if (sectionIndexRef.current === 0) {
      switchIndex(null);
    }
    sectionIndexRef.current = Math.max(sectionIndexRef.current - 1, 0);
    sectionRefs.current[sectionIndexRef.current].scrollIntoView({
      behavior: 'smooth'
    });
  }, [sectionIndexRef, sectionRefs, switchIndex]);

  useScrollDirection(contentContainerRef, goToNextSection, goToPrevSection);

  return (
    <Container ref={contentContainerRef}>
      {works.map((section, idx) => (
        <Work
          name={section.id}
          key={section.id}
          ref={element => sectionRefs.current.push(element)}
          copy={section.copy}
          image_url={section.image}
          site_url={section.url}
          site_name={section.link}
          isLast={idx === works.length - 1}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  overflow: scroll;
  flex-grow: 1;
`;
