import React from 'react';
import { ThemeProvider } from 'styled-components';
import Emoji from './components/Emoji';
import Button from './components/Button';
import { idus } from './theme';

const App = () => (
    <ThemeProvider theme={idus}>
        <div>
            <Button>THEMED BUTTON <Emoji symbol="😃" /></Button>
        </div>
    </ThemeProvider>
);

export default App;