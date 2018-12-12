import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/Button';

describe('Button', () => {
    let tree;
    beforeEach(() => {
        tree = renderer
            .create(<Button>Button</Button>)
            .toJSON();
    })
    it('renders correctly', () => expect(tree).toMatchSnapshot());
    // can have theme
    // style modifiers - has primary, secondary, positive, negative variations
    // size modifiers - has large, small, medium by default
    // display modifiers - inline by default
});
