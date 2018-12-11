import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/Button';

describe('Btn', () => {
    let tree;
    beforeEach(() => {
        tree = renderer
            .create(<Button>Button</Button>)
            .toJSON();
    })
    it('renders correctly', () => expect(tree).toMatchSnapshot());
});
