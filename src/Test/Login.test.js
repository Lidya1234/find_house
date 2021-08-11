import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../reducers/index';
import Login from '../components/Login';

afterEach(() => {
  cleanup();
});

describe('House component tests', () => {
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>,
  );
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    )
    .toJSON();

  const loginElement = screen.getByTestId('login');

  test('Component should Render', () => {
    expect(loginElement).toBeInTheDocument();
  });
  test('Component should contain a sign in text', () => {
    expect(loginElement).toHaveTextContent('Sign in');
  });
  test('Matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
