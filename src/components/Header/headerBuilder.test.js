import {shallow} from 'enzyme';
import {findByTestAttribute} from '../../utils/testing/findByTestAttribute'
import headerMock from './Mocks/headerMock.json'
import {createHeaderElements, createHeaderLogo} from './HeaderBuilder'

const setUpLogoWithProps = (props={} ) => {
    const component = shallow(createHeaderLogo(headerMock.logo));
    return component;
}

const setUpLogoWithoutProps = (props={} ) => {
    const component = shallow(createHeaderLogo());
    return component;
}

const setUpHeaderElementsWithProps = (props={} ) => {
    const component = shallow(createHeaderElements(headerMock.headerElements));
    return component;
}

const setUpHeaderElementsWithoutProps = (props={} ) => {
    const component = shallow(createHeaderElements());
    return component;
}

describe('header element builder with props', () =>{

    let component;
    beforeEach(() => {
        component = setUpHeaderElementsWithProps();
    })

    // console.log(component.debug())
    it('should create nav elements', () => {
        const navElements = findByTestAttribute(component, 'nav-elements')
        expect(navElements.length).toBe(1);
    });
});

describe('header element builder without props', () =>{

    // console.log(component.debug())
    it('should not create nav elements', () => {
        try{
            const navElements = findByTestAttribute(setUpHeaderElementsWithoutProps(), 'nav-elements')
            expect(navElements.length).toBe(1);}
        catch(error){
            expect(error.message).toBe('No nav elements in arguments');
        }
    });
});



describe('logo element builder with props', () =>{

    let component;
    beforeEach(() => {
        component = setUpLogoWithProps();
    })

    // console.log(component.debug())
    it('should create logo component', () => {
        const logoComponent = findByTestAttribute(component, 'logo-link')
        expect(logoComponent.length).toBe(1);
    });
});

describe('logo element builder without props', () =>{

    // console.log(component.debug())
    
    it('should NOT create logo component', () => {
        try{
            const logoComponent = findByTestAttribute(setUpLogoWithoutProps(), 'logo-link')
            expect(logoComponent.length).toBe(1);
        }catch(error){
            expect(error.message).toBe('No logo element in arguments');
        }
    });
    
});