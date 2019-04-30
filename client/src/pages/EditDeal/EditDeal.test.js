import React from 'react';
import {shallow} from 'enzyme';
import EditDeal from './';

describe('EditDeal', () => {
    let wrapper;

    // Shallow renders the EditDeal component and finds all the Link elements on the page (Shallow render happens before
    // JSX is converted to HTML, which is why Link elements are not anchor(<a>) elements yet)
    beforeEach(() => {
        // WrappedComponent is necessary because the EditDeal component is surrounded by a withRouter call. We want to test
        // the EditDeal component, not the Router which surrounds it
        wrapper = shallow(<EditDeal/>, {disableLifecycleMethods: true});
    });

    it('isPriceValid() should call setCustomValidity("") if the price is a number with no decimals (i.e. 34)', () => {
        const e = {target: {value: 34, setCustomValidity: jest.fn()}};
        wrapper.instance().isPriceValid(e);

        expect(e.target.setCustomValidity).toBeCalledWith("");
    });

    it('isPriceValid() should call setCustomValidity("") if the price is a number with decimals (i.e. 34.45)', () => {
        const e = {target: {value: '34.45', setCustomValidity: jest.fn()}};
        wrapper.instance().isPriceValid(e);

        expect(e.target.setCustomValidity).toBeCalledWith("");
    });

    it('isPriceValid() should call setCustomValidity("Must be a number") is not a number', () => {
        const e = {target: {value: '34.x', setCustomValidity: jest.fn()}};
        wrapper.instance().isPriceValid(e);

        expect(e.target.setCustomValidity).toBeCalledWith("Must be a number");
    });

});
