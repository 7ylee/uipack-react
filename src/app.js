import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Input from './components/Input';

const App = () => (
    <div>
        <Button>TESTING</Button>
        <Input type="text" placeholder="123123" />
    </div>
);
const root = document.getElementById('root');

ReactDOM.render(<App />, root);