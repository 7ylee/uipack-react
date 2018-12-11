import styled from 'styled-components';
import { normal } from '../theme';

const Button = styled.button`
    background-color: ${props => props.theme.main};
    color: #FFF;
`;

Button.defaultProps = {
    theme: {
        main: normal
    }
};

export default Button;