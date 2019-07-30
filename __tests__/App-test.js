/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// import Routes from '../Routes';
jest.mock("../Routes");
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  let testApp;
  let testComponent;
  // const routes = shallow(<Routes />);

  beforeEach(() => {
    testApp = renderer.create(<App />);
    testComponent = testApp.getInstance();
  })

  it('renders correctly', () => {
    expect(testComponent).toBeTruthy();
  });

  it('has routes', () => {
    let testRoute = testApp.getInstance();
    expect(testRoute).toBeTruthy();
  });
})


