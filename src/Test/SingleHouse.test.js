import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleHouse from '../components/SingleHouse';
import '@testing-library/jest-dom/extend-expect';

describe('The navigation bar should contain', () => {
  it('House logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SingleHouse />
      </MemoryRouter>,
    );
    const link = getByText('About this listing');
    expect(link).toBeInTheDocument();
  });
});
