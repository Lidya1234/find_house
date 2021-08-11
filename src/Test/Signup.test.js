import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../reducers/index';
import Signup from '../components/Signup';

afterEach(() => {
  cleanup();
});

describe('Signup component tests', () => {
  render(
    <Provider store={store}>
      <Router>
        <Signup />
      </Router>
    </Provider>,
  );
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>,
    )
    .toJSON();

  const signupElement = screen.getByTestId('signup');

  test('Component should Render', () => {
    expect(signupElement).toBeInTheDocument();
  });
  test('Component should contain a sign in test', () => {
    expect(signupElement).toHaveTextContent('Sign in');
  });
  test('Matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
