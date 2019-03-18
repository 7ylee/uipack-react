import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as theme from './theme';

import Motion from './components/Motion';

// core ui
import Emoji from './components/Emoji';
import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
    * {
        line-height: 1.5;
    };
`;

const App = () =>
    <ThemeProvider theme={theme.idus}>
        <div>
            <GlobalStyle />
            <Button type="button" disabled>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Button type="button" primary>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Motion>
                <Motion.FromBottom>FromBottom blahblah</Motion.FromBottom>
            </Motion>
        </div>
    </ThemeProvider>
    ;

export default App;