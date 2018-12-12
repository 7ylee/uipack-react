import styled from 'styled-components';
import { resetCSS } from '../utility';

const Title = styled.h1`
    ${resetCSS};
    box-sizing: border-box;
    color: #333;
    display: block;
    font-size: ${props => props.sub ? '1.5em' : '2em'};
    border-bottom: ${props => props.underline && '1px solid #efefef'};
`;

export default Title;