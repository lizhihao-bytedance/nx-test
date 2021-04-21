import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MylibPublishableProps {}

const StyledMylibPublishable = styled.div`
  color: pink;
`;

export function MylibPublishable(props: MylibPublishableProps) {
  return (
    <StyledMylibPublishable>
      <h1>Welcome to mylib-publishable!</h1>
    </StyledMylibPublishable>
  );
}

export default MylibPublishable;
