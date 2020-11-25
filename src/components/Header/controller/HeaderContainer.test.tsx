import React from 'react';
import {shallow} from 'enzyme';
import HeaderContainer from './HeaderContainer'
import {findByTestAttribute} from '../../../utils/testing/findByTestAttribute'
import headerMock from '../model/Mocks/headerMock.json'

//TODO test with typescript

const setUpWithProps = (props={} ) => {
    const component = shallow(<HeaderContainer headerElements={headerMock} />);
    return component;
}

const setUpWithoutProps = (props={} ) => {
    const component = shallow(<HeaderContainer />);
    return component;
}



describe('Header container with proper props', () =>{

    let component: any;
    beforeEach(() => {
        component = setUpWithProps();
    })

    // console.log(component.debug())
    it('should render Header Component', () => {
        const headerComponent = findByTestAttribute(component, 'header-component')
        expect(headerComponent.length).toBe(1);
    });
});

describe('Header container without proper props', () =>{

    let component: any;
    beforeEach(() => {
        component = setUpWithoutProps();
    })

    // console.log(component.debug())
    it('should render Header Component', () => {
        const headerComponent = findByTestAttribute(component, 'header-component')
        expect(headerComponent.length).toBe(0);
    });
});