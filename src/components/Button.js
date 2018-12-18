import styled, { css } from 'styled-components';
import Color from 'color';
import { resetCSS, boxShadow } from '../utility';
import { normal } from '../theme';

const Button = styled.button`
    ${resetCSS + boxShadow};

    position: relative;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    cursor: pointer;

    /* default element attributes */
    &[disabled] {
        color: ${props => props.theme.GRAY_LIGHT_3000};
        border-color: ${props => props.theme.GRAY_LIGHT_2000};
        background: ${props => props.theme.GRAY_LIGHT_1000};
        cursor: default;
        box-shadow:none;
    };

    /* display props */
    vertical-align: middle;
    display: ${props => props.block ? 'block' : 'inline-block'};

    /* sizing props */
    ${props => {
        if (props.large) {
            return css`
                padding: 0 24px;
                font-size: 1em;
                line-height: 46px;
            `;
        };
        if (props.small) {
            return css`
                padding: 0 12px;
                font-size: 0.6em;
                line-height: 22px;
            `;
        };
        return css`
            padding: 0 16px;
            font-size: 0.8em;
            line-height: 30px;
        `;
    }};

    /* style properties */
    ${props => {
        let propColor = props.theme.WHITE;
        if (props.primary) {
            propColor = props.theme.PRIMARY;
        };
        if (props.secondary) {
            propColor = props.theme.SECONDARY;
        };
        if (props.positive) {
            propColor = props.theme.POSITIVE;
        };
        if (props.negative) {
            propColor = props.theme.NEGATIVE;
        };

        return css`
            border-radius: 2px;
            border-width: 1px;
            border-style: solid;
            border-color: ${Color(propColor).darken(0.3).hex()};
            background-color: ${propColor};
            color: ${Color(propColor).isDark() ? props.theme.WHITE : props.theme.GRAY_3};

            &:focus:not(:disabled),
            &:hover:not(:disabled) {
                outline: none;
                background-color: ${Color(propColor).isDark() ? Color(propColor).darken(0.15).hex() : Color(propColor).darken(0.08).hex()};
            };
        `;
    }};
`;

Button.defaultProps = { theme: {} };
// map normal theme as default;
Object.keys(normal).map(key => {
    Button.defaultProps.theme[key] = normal[key];
    return false
});

export default Button;