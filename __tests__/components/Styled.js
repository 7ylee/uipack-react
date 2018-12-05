import React from 'react';
import renderer from 'react-test-renderer';
import { Btn, Segment } from '../../src/components/Styled';

describe('Btn', () => {
    let tree;
    beforeEach(() => {
        tree = renderer
            .create(<Btn>AA</Btn>)
            .toJSON();
    })
    it('renders correctly', () => expect(tree).toMatchSnapshot());
});

describe('Segment', () => {
    let tree;
    beforeEach(() => {
        tree = renderer
            .create(<Segment>Segment</Segment>)
            .toJSON();
    })
    it('renders correctly', () => expect(tree).toMatchSnapshot());
});

