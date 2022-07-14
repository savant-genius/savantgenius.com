import styled from 'styled-components';

export const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(100% - var(--header-height));
  margin-top: var(--header-height);
  padding-left: var(--outer-padding);
  padding-right: var(--outer-padding);
  padding-bottom: calc(2 * var(--outer-padding));
  
  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (min-width: 750px) {
      width: 50%;
    }
  }

  .copy, .contact {
    margin: calc(0.5 * var(--outer-padding)) 0;
  }

  .contact {
    
  }
  
  .bottom {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 750px) {
      > * {
        width: 50%;
        align-self: flex-end;
      }
    }
  }
`;
