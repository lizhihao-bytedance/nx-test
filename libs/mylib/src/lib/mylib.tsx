import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MylibProps {}

const StyledMylib = styled.div`
  color: pink;
`;

export function Mylib(props: MylibProps) {
  return (
    <StyledMylib>
      <h1>Welcome to mylib!</h1>
    </StyledMylib>
  );
}

export default Mylib;
