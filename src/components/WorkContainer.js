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

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
  
  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: calc(0.5 * var(--outer-padding)) 0;
  }
  
  .bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .icon {
      align-self: flex-start;
    }

    @media screen and (min-width: 900px) {
      align-self: flex-end;
      > * {
        align-self: flex-end;
      }
      .icon {
        align-self: flex-end;
      }
    }
    
    @media screen and (min-width: 600px) and (max-width: 900px) and (max-height: 700px)  {
      width: 50%;
      .icon {
        align-self: flex-end;
      }
    }
  }
`;
