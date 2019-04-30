import React from 'react';
import {shallow} from 'enzyme';
import About from './';

describe('About', () => {
    let figures, wrapper;

    // Shallow renders the EditDeal component and finds all the Link elements on the page (Shallow render happens before
    // JSX is converted to HTML, which is why Link elements are not anchor(<a>) elements yet)
    beforeEach(() => {
        // WrappedComponent is necessary because the EditDeal component is surrounded by a withRouter call. We want to test
        // the EditDeal component, not the Router which surrounds it
        wrapper = shallow(<About/>);
        figures = wrapper.find('.foundee-figure');
    });

    it('Should have 5 divs with the foundee-figure class', () => {
        expect(figures.length).toBe(5);
    });

    it('Each figure should have an anchor element with an href to linkedin', () => {
       expect(figures.find('a[href*="linkedin"]').length).toBe(5);
    })

});
