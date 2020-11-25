import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header'
import {findByTestAttribute} from '../../../utils/testing/findByTestAttribute'
import {createHeaderElements, createHeaderLogo} from '../logic/HeaderBuilder'
import HeaderJson from '../model/Mocks/headerMock.json'



const setUp = (props={} ) => {
    const component = shallow(<Header logo = {createHeaderElements(HeaderJson.headerElements)} headerElements = {createHeaderLogo(HeaderJson.logo)}  />);
    return component;
}



describe('Header component', () =>{

    let component;
    beforeEach(() => {
        component = setUp();
    })

    // console.log(component.debug())
    
    it('Should render logo class', () =>{

        const logoLink = findByTestAttribute(component, 'logo-link')


        expect(logoLink.length).toBe(1);
    });

    it('Should render Blog tab', () =>{

        const blogLink = findByTestAttribute(component, 'blog-link')


        expect(blogLink.length).toBe(1);
    });

    it('Should render Gallery tab', () =>{

        const galleryLink = findByTestAttribute(component, 'gallery-link')


        expect(galleryLink.length).toBe(1);
    });

    it('Should render Software tab', () =>{

        const softwareLink = findByTestAttribute(component, 'software-link')

        expect(softwareLink.length).toBe(1);
    });

    it('Should render about tab', () =>{

        const aboutLink = findByTestAttribute(component, 'about-link')


        expect(aboutLink.length).toBe(1);
    });

});