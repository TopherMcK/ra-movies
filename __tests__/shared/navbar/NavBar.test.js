import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../../js/utils/ShallowTestUtil";
import NavBar from "../../../js/shared/navbar/NavBarView";

describe('NavBar', () => {
    let testComponent;

    var expectedSrcUri = {
        testUri : ""
      }
  
    beforeAll(() => {
      let shallowTestUtil = new ShallowTestUtil();
      shallowTestUtil.prepTest();
    });
  
    beforeEach(() => {
        testComponent = shallow(<NavBar />);
    });

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    });

    describe('shouldShowSearch false', () => {
        it('should render logo', () => {
            expectedSrcUri.testUri = '../../../assets/logo.jpg';
            expect(testComponent.find('#logo').props().source).toEqual(expectedSrcUri);
        });
    
        it('should show username', () => {
            expect(testComponent.find('#username').at(0).prop('children')).toEqual('Guest');
        });
    
        it('should have a search btn with a search image', () => {
            expectedSrcUri.testUri = '../../../assets/search_icon.png';
            expect(testComponent.find('#navBarSearchBtn > Image').props().source).toEqual(expectedSrcUri);
        });
    
        it('should have a menu btn with a menu image', () => {
            expectedSrcUri.testUri = '../../../assets/menu_icon.png';
            expect(testComponent.find('#navBarMenuBtn > Image').props().source).toEqual(expectedSrcUri);
        });
    });

    describe('shouldShowSearch true', () => {
        beforeEach(() => {
            testComponent.setState({shouldShowSearch: true});
        });

        it('should have a back button to return from search', () => {
            expectedSrcUri.testUri = '../../../assets/arrow_back.png';
            expect(testComponent.find('#navBarSearchReturnBtn > Image').props().source).toEqual(expectedSrcUri);
        });

        it('should have a TextInput for searches', () => {
            expect(testComponent.find('TextInput').length).toBe(1);
        });

        it('should have a search icon button to submit searches', () => {
            expectedSrcUri.testUri = '../../../assets/search_icon.png';
            expect(testComponent.find('#navBarSubmitSearchBtn > Image').props().source).toEqual(expectedSrcUri);
        });
    });

});