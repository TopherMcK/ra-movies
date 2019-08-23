import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../js/utils/ShallowTestUtil";
import Login from "../../js/login/Login";

describe('Login', () => {
    let testComponent;
    let navigation;
    let navigate;

    let mockIsValidUsername;
    let mockIsValidPassword;
  
    beforeAll(() => {
      let shallowTestUtil = new ShallowTestUtil();
      shallowTestUtil.prepTest();
    });
  
    beforeEach(() => {
      navigate = jest.fn();
      navigation = {
        navigate
      }

      props = {
        navigation
      };
      
      testComponent = shallow(<Login {...props} />);

      testComponent.instance().isValidUsername = mockIsValidUsername
      testComponent.instance().mockIsValidPassword = mockIsValidPassword
    });

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    });

    describe('Expected UI components', () => {
      it('should be wrapped in a view', () => {
          const expectedLoginWrapperCount = 1;
          const loginWrapperCount = testComponent.find('#loginWrapper').length;
          expect(loginWrapperCount).toBe(expectedLoginWrapperCount);
      });

      it('should contain a username section', () => {
        const usernameWrapper = testComponent.find('#usernameWrapper');

        const expectedUsernameCount = 1;
        const usernameWrapperCount = usernameWrapper.length;
        expect(usernameWrapperCount).toBe(expectedUsernameCount);

        const usernameLabel = testComponent.find('#usernameLabel');
        expect(usernameLabel.length).toBe(1);
        expect(usernameLabel.at(0).prop('children')).toEqual('User Name');

        const usernameTextInput = testComponent.find('#usernameTextInput');
        expect(usernameTextInput.length).toBe(1);
      });

      it('should contain a password section', () => {
        const passwordWrapper = testComponent.find('#passwordWrapper');

        const expectedPasswordCount = 1;
        const passwordWrapperCount = passwordWrapper.length;
        expect(passwordWrapperCount).toBe(expectedPasswordCount);

        const passwordLabel = testComponent.find('#passwordLabel');
        expect(passwordLabel.length).toBe(1);
        expect(passwordLabel.at(0).prop('children')).toEqual('Password');

        const passwordTextInput = testComponent.find('#passwordTextInput');
        expect(passwordTextInput.length).toBe(1);
      });

      it('should contain a button section', () => {
        const buttons = testComponent.find('#buttonsWrapper > ButtonScaler');
        const orTxt = testComponent.find('#buttonsWrapper > Text');
        expect(buttons.length).toBe(2);
        expect(orTxt.at(0).prop('children')).toEqual('- or -');
      });
    });

    describe('Username input', () => {
      it('should warn user if characters are more than 0 and less than 3', () => {
          const usernameTextInput = testComponent.find('#usernameTextInput');

          usernameTextInput.first().props().onChangeText("a");

          const usernameWarning = testComponent.find("#usernameWarning");
          expect(usernameWarning.prop('children')).toEqual("Invalid Username");
      });

      
      it('should clear warning characters are 0 or greater than 3', () => {
        const usernameTextInput = testComponent.find('#usernameTextInput');

        usernameTextInput.first().props().onChangeText("a");

        let usernameWarning = testComponent.find("#usernameWarning");
        expect(usernameWarning.prop('children')).toEqual("Invalid Username");

        usernameTextInput.first().props().onChangeText("abcd");

        usernameWarning = testComponent.find("#usernameWarning");
        expect(usernameWarning.prop('children')).toEqual(null);
      });
    })

    describe('Password input', () => {
      it('should warn user if characters are less than 3', () => {
        const passwordTextInput = testComponent.find('#passwordTextInput');

        passwordTextInput.first().props().onChangeText("a");

        let passwordWarning = testComponent.find("#passwordWarning");
        expect(passwordWarning.prop('children')).toEqual("Invalid Password");

        passwordTextInput.first().props().onChangeText("abcd");

        passwordWarning = testComponent.find("#passwordWarning");
        expect(passwordWarning.prop('children')).toEqual(null);
      });
    });

    describe('Sign in btn', () => {
      it('should be disabled until username and password field are valid', () => {
        const signInBtn = testComponent.find("#signInBtn");
        expect(signInBtn.at(0).prop("disabled")).toBe(true)
      });

      it('should enable when username and password field are valid', () => {
        testComponent.instance().setState({
          hasValidPassword: true ,hasValidUsername: true
        })


        const signInBtn = testComponent.find("#signInBtn");
        expect(signInBtn.at(0).prop("disabled")).toBe(false)
      });
    })

    describe('Skip btn', () => {
      it('should navigate user to MainView onPress with username undefined and isGuest true', () => {
        const skipBtn = testComponent.find('#skipBtn').at(0);
        skipBtn.props().onPress();
        const expectedParams = {
          isGuest: true,
          username: undefined
        }
        expect(navigate).toBeCalledWith('MainRT', expectedParams);
      });
    });
  });