import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import ShallowTestUtil from "../js/utils/ShallowTestUtil";

describe('App', () => {

    beforeAll(() => {
      let shallowTestUtil = new ShallowTestUtil();
      shallowTestUtil.prepTest();
    });

    it('should render', () => {
        var app = shallow(<App />);
        expect(app).toBeTruthy();
    });
});