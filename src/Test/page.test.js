import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Page from '../components/Page';
import '@testing-library/jest-dom/extend-expect';

describe('The navigation bar should contain', () => {
  it('House logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>,
    );
    const link = getByText('Scroll horizontally');
    expect(link).toBeInTheDocument();
  });
  const component = renderer.create(
    <MemoryRouter>
      <Page />
    </MemoryRouter>,
  ).toJSON();

  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
