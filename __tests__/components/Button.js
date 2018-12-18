import React from 'react';
import Button from '../../src/components/Button';
import { renderWithTheme } from '../../__test_helper__';

describe('Button', () => {
    // render with theme
    it('renders correctly with theme', () => {
        const tree = renderWithTheme(
            <Button type="button">Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // style modifiers - has primary, secondary, positive, negative variations
    it('has style modifier - primary', () => {
        const tree = renderWithTheme(
            <Button type="button" primary>Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // style modifiers - has small, large
    it('has size modifier - small', () => {
        const tree = renderWithTheme(
            <Button type="button" small>Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // display modifiers - inline by default
    it('has display modifier - block', () => {
        const tree = renderWithTheme(
            <Button type="button" block>Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // size modifiers - has large, small, medium by default
    it('has size & style & display modifier', () => {
        const tree = renderWithTheme(
            <Button type="button" primary large block>Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // disabled attribute
    it('has disabled attribute', () => {
        const tree = renderWithTheme(
            <Button type="button" primary large block disabled>Button</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});