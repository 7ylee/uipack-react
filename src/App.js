import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as theme from './theme';

import Palette from './App/Palette';

// core ui
import Emoji from './components/Emoji';
import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
    * {
        line-height: 1.5;
    };
`;

const App = () => {
    const PaletteList = Object.keys(theme).map((key) => <Palette key={key} title={key} colors={theme[key]} />);

    return (
        <ThemeProvider theme={theme.idus}>
            <div>
                <GlobalStyle />
                {PaletteList}
                <Button type="button" disabled>THEMED BUTTON <Emoji symbol="😃" /></Button>
                <Button type="button" primary>THEMED BUTTON <Emoji symbol="😃" /></Button>
            </div>
        </ThemeProvider>
    )
};

export default App;