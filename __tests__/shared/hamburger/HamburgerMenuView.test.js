import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../../js/utils/ShallowTestUtil";
import HamburgerMenuView from "../../../js/shared/hamburger_menu/HamburgerMenuView";
import { when } from 'jest-when'

describe('HamburgerMenuView', () => {
    let testComponent;
    let navigation;
    let navigate;
    let getParam;
  
    beforeAll(() => {
      let shallowTestUtil = new ShallowTestUtil();
      shallowTestUtil.prepTest();
    });
  
    beforeEach(() => {
      navigate = jest.fn();
      getParam = jest.fn();

      when(getParam).calledWith('isGuest').mockReturnValue(false);
      when(getParam).calledWith('username').mockReturnValue('Jaraiya');

      navigation = {
        navigate,
        getParam
      }

      props = {
        navigation,
      };

        testComponent = shallow(<HamburgerMenuView { ...props } />);
    });

    describe('menu header', () => {
        it('should display the user\'s name.', () => {
            const expectedText = "Guest";
            const actualText = testComponent.find('#usernameTxt').prop('children');

            expect(expectedText).toEqual(actualText);
        });
    });

    describe('signout btn', () => {
        it('should call navigate to LoginRT on press', () => {
            testComponent.find('#signoutBtn').props().onPress();
            expect(navigate).toBeCalledWith('LoginRT');
        });
    });

    describe('getSignInOrLogoutText', () => {
        it('should return "Sign In" when isGuest true', () => {
            const expectedText = 'Sign In';
            
            const instance = testComponent.instance();
            const actualText = instance.getSignInOrLogoutText();

            expect(actualText).toEqual(expectedText);
        });


        it('should return "Log Out" when isGuest false', () => {
            testComponent.setState({isGuest: false});

            const expectedText = 'Log Out';
            
            const instance = testComponent.instance();
            const actualText = instance.getSignInOrLogoutText();

            expect(actualText).toEqual(expectedText);
        });
    });
});