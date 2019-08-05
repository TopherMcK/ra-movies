import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../js/utils/ShallowTestUtil";
import Home from "../../js/home/Home";

describe('Home', () => {
    let testComponent;
  
    beforeAll(() => {
      let shallowTestUtil = new ShallowTestUtil();
      shallowTestUtil.prepTest();
    });
  
    beforeEach(() => {
        testComponent = shallow(<Home />);
    });

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    });
});