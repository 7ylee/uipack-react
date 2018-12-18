import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { idus } from '../src/theme';

export function renderWithTheme(component) {
    return renderer.create(
        <ThemeProvider theme={idus}>
            {component}
        </ThemeProvider>
    );
};

export function foo() {
};