import React from 'react';
import { shallow } from 'enzyme';
import Button, { style } from '../../src/components/Button';

describe('Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button style={style.default} text="label text" />);
    })
    it('shoud render <button></button>', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })
    it('should render text inside <button>', () => {
        expect(wrapper.text()).toEqual('label text');
    })
    describe('type default', () => {
        beforeEach(() => {
            wrapper = shallow(<Button style={style.default} text="label text" />);
        })
        it('should have `button` type', () => {
            expect(wrapper.props().type).toEqual('button');
            expect(wrapper.find('button').props().style).toEqual(style.default);
        })
    })
    describe('type submit', () => {
        beforeEach(() => {
            wrapper = shallow(<Button style={style.submit} type="submit" text="label text" />);
        })
        it('should have `submit` type', () => {
            expect(wrapper.props().type).toEqual('submit');
            expect(wrapper.find('button').props().style).toEqual(style.submit);
        })
    })
});