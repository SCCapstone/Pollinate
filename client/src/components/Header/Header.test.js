import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Header from './';

describe('Header', () => {
  it('Should render Link component with to prop of "/login"', () => {
    const component = shallow(<Header.WrappedComponent/>);

    const links = component.find(Link);
    expect(links.find({to: '/login'}).length).toBe(1);
  });
});
