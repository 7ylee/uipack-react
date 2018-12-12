import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { idus, normal } from './theme';

import Emoji from './components/Emoji';
import Button from './components/Button';
import Title from './components/Title';

const GlobalStyle = createGlobalStyle`
    * {
        line-height: 1.5;
    };
`;

const App = () => (
    <ThemeProvider theme={idus}>
        <div>
            <GlobalStyle />
            <Title as="h1">UIPACK-IDUS</Title>
            <Button primary>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Button secondary>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <br />
            <Button theme={normal} primary large>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Button theme={normal}>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Button theme={normal} secondary small>THEMED BUTTON <Emoji symbol="😃" /></Button>
        </div>
    </ThemeProvider>
);

export default App;