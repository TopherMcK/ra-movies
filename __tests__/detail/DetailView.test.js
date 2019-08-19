import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../js/utils/ShallowTestUtil";
import Login from "../../js/login/Login";
import DetailView from "../../js/detail/DetailView";

describe('DetailView', () => {
    let testComponent;

    let defaultTitle = 'The Avengers'
    
    beforeAll(() => {
        let shallowTestUtil = new ShallowTestUtil();
        shallowTestUtil.prepTest();
    });

    beforeEach(() => {
        props = {
            detailMovie: {
                Title: defaultTitle

            }
        }
        testComponent = shallow(<DetailView {...props} />);
    })

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    })

    describe('UI Render', () => {
        it('should set Title from props.title', () => {
            let title = testComponent.find('#title').at(0)
            expect(title.prop('children')).toBe(defaultTitle);
        });
    });
})