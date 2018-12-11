import styled from 'styled-components';
import { normal } from '../theme';

export const Btn = styled.button`
    background-color: ${props => props.theme.main};
    color: #FFF;
`;

Btn.defaultProps = {
    theme: {
        main: normal
    }
};

export const Segment = styled.div`
    background: #FFF;
`;