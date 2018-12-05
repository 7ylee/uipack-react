import React from 'react';
import { shallow } from 'enzyme';
import Button, { style } from '../../src/components/Button';

describe('Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button style={style.default}>some text</Button>);
    })
    it('shoud render <button></button>', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })
    describe('type default', () => {
        beforeEach(() => {
            wrapper = shallow(<Button style={style.default}>some text</Button>);
        })
        it('should have `button` type', () => {
            expect(wrapper.props().type).toEqual('button');
            expect(wrapper.find('button').props().style).toEqual(style.default);
        })
    })
    describe('type submit', () => {
        beforeEach(() => {
            wrapper = shallow(<Button style={style.submit} type="submit">some text</Button>);
        })
        it('should have `submit` type', () => {
            expect(wrapper.props().type).toEqual('submit');
            expect(wrapper.find('button').props().style).toEqual(style.submit);
        })
    })
});