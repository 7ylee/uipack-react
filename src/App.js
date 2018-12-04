import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => (
    <div>
        <Button type="button" text="default button" />
        <Button type="submit" text="submit button" />
        <Input type="text" placeholder="123123" />
    </div>
);

export default App;