import React from 'react';
import { ThemeProvider } from 'styled-components';
import Emoji from './components/Emoji';
import { Btn } from './components/Styled';
import { idus } from './theme';

const App = () => (
    <ThemeProvider theme={idus}>
        <div>
            <Btn>THEMED BUTTON <Emoji label="smileface" content="😃" /></Btn>
        </div>
    </ThemeProvider>
);

export default App;