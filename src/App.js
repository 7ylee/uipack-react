import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Emoji from './components/Emoji';

const App = () => (
    <div>
        <Button type="button" text="default button" />
        <Button type="submit" text="submit button" />
        <Input type="text" placeholder="⌨" />

        <Emoji label="smileface" content="😃" />
    </div>
);

export default App;