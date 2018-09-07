import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Container from '../../Container/Container';
import Header from './Header';

configure({adapter: new Adapter()});

describe('<Container/>', () =>{
    it('should render valid data on search', () =>{
        expect(shallow(<Container/>).find(Header).exists()).toBe(true)
    });
})