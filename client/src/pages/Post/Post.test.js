import React from 'react';
import {shallow} from 'enzyme';
import Post from './';

describe('Post', () => {
    let wrapper;

    // Shallow renders the EditDeal component and finds all the Link elements on the page (Shallow render happens before
    // JSX is converted to HTML, which is why Link elements are not anchor(<a>) elements yet)
    beforeEach(() => {
        // WrappedComponent is necessary because the EditDeal component is surrounded by a withRouter call. We want to test
        // the EditDeal component, not the Router which surrounds it
        wrapper = shallow(<Post match={{params: {id: 1}}}/>, {disableLifecycleMethods: true});
    });

    it('getLink() should return this.state.link without modification if "http" is in the link', () => {
        wrapper.instance().state.link = 'http://www.google.com';
        wrapper.update();
        expect(wrapper.instance().getLink()).toEqual(wrapper.instance().state.link);
    });

    it('getLink() should return this.state.link with http:// at the front if "http" is not in the link', () => {
        wrapper.instance().state.link = 'www.google.com';
        wrapper.update();
        expect(wrapper.instance().getLink()).toEqual("http://" + wrapper.instance().state.link);
    });

    it('getImageUrl() should return this.state.imageUrl if this.state.imageUrl is defined', () => {
        wrapper.instance().state.imageUrl = 'http://imgur.com/thisisanimage.jpg';
        wrapper.update();
        expect(wrapper.instance().getImageUrl()).toEqual(wrapper.instance().state.imageUrl);
    });

    it('getImageUrl() should return "/static/images/no-image-icon.png" if this.state.imageUrl is undefined', () => {
        expect(wrapper.instance().getImageUrl()).toEqual("/static/images/no-image-icon.png");
    })

});
