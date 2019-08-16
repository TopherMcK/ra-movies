import React from 'react'
import HomeTab from "../../js/tabs/HomeTab";
import { shallow } from 'enzyme';
import ShallowTestUtil from '../../js/utils/ShallowTestUtil'



describe('HomeTab', () => {
    let testComponent;
    let getSearchSuggestionResults;

    beforeAll(() => {
        let shallowTestUtil = new ShallowTestUtil();
        shallowTestUtil.prepTest();
      });

    beforeEach(() => {
        // dependency.getSearchSuggestionResults = jest.fn();
        getSearchSuggestionResults = jest.fn();
        var searchService = require("../../js/rest/SearchService");
        searchService.getSearchSuggestionResults = getSearchSuggestionResults;
        testComponent = shallow(<HomeTab />);
        testComponent.searchService = searchService;
    });

    describe('when created', () => {
        it('should call service to retrieve home movies', () => {
            // expect(dependency.searchService.getSearchSuggestionResults()).isCalled()
        });
    });

    describe('service responses', () => {
        it('should show activity indicator while loading', () => {

        });

        it('should show unable to retrieve result when call is unsuccessful', () => {

        });

        it('should show a poster from the response when call is successful', () => {
            
        });
    });
});