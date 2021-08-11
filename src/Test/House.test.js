import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../reducers/index';
import House from '../components/House';

afterEach(() => {
  cleanup();
});

describe('House component tests', () => {
  const house = {
    id: 1,
    name: 'Villa',
    image: 'https://res.cloudinary.com/lidu4394/image/upload/v1621343540/vu-anh-TiVPTYCG_3E-unsplash_1_gqha0y. jpg',
    price: '2000',
    rank: 4,
  };
  render(
    <Provider store={store}>
      <Router>
        <House house={House} />
      </Router>
    </Provider>,
  );
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <House house={house} />
        </Router>
      </Provider>,
    )
    .toJSON();

  const houseElement = screen.getByTestId('house');

  test('Component should Render', () => {
    expect(houseElement).toBeInTheDocument();
  });
  test('Component should contain a per month text', () => {
    expect(houseElement).toHaveTextContent('per month');
  });
  test('Matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
