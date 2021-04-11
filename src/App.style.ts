import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content auto min-content;
  grid-template-areas:
    "head"
    "body"
    "footer";

  > header {
    grid-area: head;
  }

  > main {
    grid-area: body;
  }

  > footer {
    grid-area: footer;
  }
`;
