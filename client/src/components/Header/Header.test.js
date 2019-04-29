import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import Header from './';

describe('Header', () => {
    let links;

    // Shallow renders the Header component and finds all the Link elements on the page (Shallow render happens before
    // JSX is converted to HTML, which is why Link elements are not anchor(<a>) elements yet)
    beforeAll(() => {
        // WrappedComponent is necessary because the Header component is surrounded by a withRouter call. We want to test
        // the Header component, not the Router which surrounds it
        const component = shallow(<Header.WrappedComponent/>);
        links = component.find(Link);
    });

    it('Should render Link component with to prop of "/login"', () => {
        expect(links.find({to: '/login'}).length).toBe(1);
    });

    it('Should render Link component with to prop of "/signup"', () => {
        expect(links.find({to: '/signup'}).length).toBe(1);
    });
});
