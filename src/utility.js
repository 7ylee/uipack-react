import { css } from 'styled-components';

// reset component
export const resetCSS = css`
    margin: 0;
    padding: 0;
    border: 0 none;
`;

// common shadow
export const boxShadow = css`
    box-shadow: 0 3px 5px 2px rgba(220, 220, 220, 0.5);
`;

// media-query break point
export const breakpoint = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(breakpoint).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${breakpoint[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});
