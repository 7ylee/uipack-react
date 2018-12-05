import React from 'react';
import { shallow } from 'enzyme';
import Emoji from '../../src/components/Emoji';

describe('Emoji', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Emoji label="smilie" content="😃" />);
    });
    it('should render <span></span>', () => {
        expect(wrapper.find('span').length).toEqual(1);
    })
    it('should have `role` as img', () => {
        expect(wrapper.props().role).toEqual('img');
    })
    it('should have [aria-label] attribute', () => {
        expect(wrapper.prop('aria-label')).toEqual('smilie');
    })
    it('should have text as children === `content` prop', () => {
        expect(wrapper.children().text()).toEqual('😃')
    })
});