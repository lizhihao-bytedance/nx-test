import { render } from '@testing-library/react';

import MylibPublishable from './mylib-publishable';

describe('MylibPublishable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MylibPublishable />);
    expect(baseElement).toBeTruthy();
  });
});
