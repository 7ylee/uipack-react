import styled, { css } from 'styled-components';
import Color from 'color';
import { resetCSS, boxShadow } from '../utility';
import { normal } from '../theme';

const darkenColorHex = (color, percent) => Color(color).darken(percent).hex();

const mapColorByProps = (props) => {
    const { primary, secondary, positive, negative, theme } = props;
    let colorState = theme.WHITE;

    if (primary) colorState = theme.PRIMARY;
    if (secondary) colorState = theme.SECONDARY;
    if (positive) colorState = theme.POSITIVE
    if (negative) colorState = theme.NEGATIVE;

    return colorState;
};

const Button = styled.button`
    ${resetCSS + boxShadow}

    position: relative;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    cursor: pointer;

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
        }
        if (props.small) {
            return css`
                padding: 0 12px;
                font-size: 0.6em;
                line-height: 22px;
            `
        };
        return css`
            padding: 0 16px;
            font-size: 0.8em;
            line-height: 30px;
        `;
    }}

    /* style properties */
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => darkenColorHex(mapColorByProps(props), 0.3)};
    background-color: ${props => mapColorByProps(props)};
    color: ${props => Color(mapColorByProps(props)).isDark() ? props.theme.WHITE : props.theme.GRAY_3};
    &:hover,
    &:focus {
        outline: none;
        background-color: ${props => {
        const color = Color(mapColorByProps(props))
        return color.isDark() ? color.darken(0.15).hex() : color.darken(0.08).hex();
    }};
    }
`;

Button.defaultProps = { theme: {} };
// map normal theme as default;
Object.keys(normal).map(key => {
    Button.defaultProps.theme[key] = normal[key];
    return false
});

export default Button;