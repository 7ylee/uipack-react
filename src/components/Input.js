import styled from 'styled-components';

const Input = styled.input`
    display: inline-block;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: purple;
    border: 2px solid purple;
    box-shadow: none;

    &:focus {
        outline: none;
        box-shadow: 0 0 2px 2px #efefef
    }
`;

export default Input;