import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import Header from './';

describe('Header', () => {
    let links, wrapper;

    // Shallow renders the EditDeal component and finds all the Link elements on the page (Shallow render happens before
    // JSX is converted to HTML, which is why Link elements are not anchor(<a>) elements yet)
    beforeAll(() => {
        // WrappedComponent is necessary because the EditDeal component is surrounded by a withRouter call. We want to test
        // the EditDeal component, not the Router which surrounds it
        wrapper = shallow(<Header.WrappedComponent/>);
        links = wrapper.find(Link);
    });

    it('Should render Link component with to prop of "/login"', () => {
        expect(links.find({to: '/login'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/signup"', () => {
        expect(links.find({to: '/signup'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/about"', () => {
        expect(links.find({to: '/about'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/tutorial"', () => {
        expect(links.find({to: '/tutorial'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/category/apparel"', () => {
        expect(links.find({to: '/category/apparel'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/category/technology"', () => {
        expect(links.find({to: '/category/technology'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/category/tools"', () => {
        expect(links.find({to: '/category/tools'}).length).toBe(1);
    });
    it('Should render Link component with to prop of "/category/other"', () => {
        expect(links.find({to: '/category/other'}).length).toBe(1);
    });
});
