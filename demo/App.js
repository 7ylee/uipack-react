import React from 'react';
import { Emoji, Button } from '../src/index';

const App = () => (
    <div>
        <h1><Emoji symbol="😃" /></h1>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
);

export default App;