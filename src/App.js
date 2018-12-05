import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Emoji from './components/Emoji';

const App = () => (
    <div>
        <Button type="submit">
            <Emoji label="alert" content="🚨" />
            <span> SomeBtn </span>
            <Emoji label="alert" content="🚨" />
        </Button>
        <Input type="text" placeholder="⌨" />
        <Emoji label="smileface" content="😃" />
    </div>
);

export default App;