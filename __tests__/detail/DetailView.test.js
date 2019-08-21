import React from "react";
import {shallow} from 'enzyme';
import ShallowTestUtil from "../../js/utils/ShallowTestUtil";
import DetailView from "../../js/detail/DetailView.js";
import { FlatList, Text } from 'react-native';
import { render } from 'react-native-testing-library'

describe('DetailView', () => {
    let testComponent;

    let defaultImgSrc = "a url"
    let defaultTitle = 'Nothing But Trouble'
    let releaseDate = '1999'
    let defaultDirector = "Dan Akroyd"
    let defaultPlot = "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!"
    let movieRating = 'PG-13'

    let actor1 = "Main Lead"
    let actor2 = "Co Star"
    let actor3 = "Nobody"
    let defaultCast = actor1 + ", " + actor2 + ", " + actor3

    var expectedSrcUri = {
        testUri : ""
      }
    let props
    
    beforeAll(() => {
        let shallowTestUtil = new ShallowTestUtil();
        shallowTestUtil.prepTest();
    });

    beforeEach(() => {
        props = {
            detailMovie: {
                Poster: defaultImgSrc,
                Title: defaultTitle,
                Year: releaseDate,
                Director: defaultDirector,
                Actors: defaultCast,
                Plot: defaultPlot,
                Rating: movieRating
            }
        }
        testComponent = shallow(<DetailView {...props} />);
    })

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    })

    describe('UI Render', () => {
        it('should set Poster from props.poster', () => {
            let poster = testComponent.find('#poster').at(0)
            expect(poster).toBeTruthy;
            expect(poster.prop("source")).toStrictEqual({uri: defaultImgSrc })
        });

        it('should set Title from props.detailMovie.title', () => {
            let title = testComponent.find("#title");
            expect(title.at(0).prop("children")).toBe(defaultTitle)
        })

        it('should set Year from props.detailMovie.Year', () => {
            let year = testComponent.find("#year");
            expect(year.at(0).prop("children")).toBe(releaseDate)
        });

        it('should set Director from props.detailMovie.Director', () => {
            let director = testComponent.find("#director");
            expect(director.at(0).prop("children")).toBe(defaultDirector)
        });

        it('should set Cast from props.detailMovie.Cast', () => {
            testComponent = render(<DetailView {...props}/>)

            let flatList = testComponent.getAllByType(FlatList);
            let actors = flatList[0].findAllByType(Text);
            expect(actors.length).toBe(3);

            expect(actors[0].props.children).toBe(actor1);
            expect(actors[1].props.children).toBe(actor2);
            expect(actors[2].props.children).toBe(actor3);
        });

        it('should not set Cast from props.detailMovie.Cast when Null', () => {
            props.detailMovie.Actors = null
            testComponent = render(<DetailView {...props}/>)

            let flatList = testComponent.getAllByType(FlatList);
            let actors = flatList[0].findAllByType(Text);
            expect(actors.length).toBe(0);
        });

        it('should set synopsis from props.detailMovie.Plot', () => {
            let plot = testComponent.find("#plot");
            expect(plot.at(0).prop("children")).toBe(defaultPlot);
        });

        it('should set rating icon from props.detailMovie.Rating', () => {
            // let rating = testComponent.find("#rating");
            props.detailMovie.Rated = "PG-13";
            testComponent = shallow(<DetailView {...props} />);
            expectedSrcUri.testUri = '../../assets/rated_pg13.png';
            
            console.log("What is the testComponent? " + testComponent);

            expect(testComponent.find('#rating').at(0).prop("source")).toEqual(expectedSrcUri);
            // expect(rating.at(0).prop("source")).toStrictEqual({uri: '../../assets/rated_pg13.png'})

            // expectedSrcUri.testUri = '../../../assets/logo.png';
            // expect(testComponent.find('#logo').props().source).toEqual(expectedSrcUri);
        });
    });

    describe('convertToCastList', () => {
        it('should return a cast array from default cast string', () => {
            let expectedCount = 3
            let actualList = testComponent.instance().convertToCastList(defaultCast);
            expect(actualList.length).toBe(expectedCount);
            expect(actualList[0]).toBe(actor1);
            expect(actualList[1]).toBe(actor2);
            expect(actualList[2]).toBe(actor3);
        });

        it('should return null when string is null', () => {
            let actualList = testComponent.instance().convertToCastList(null);
            expect(actualList).toBe(null);
        });
    });
})