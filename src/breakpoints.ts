import { css } from "styled-components";

export const breakpoints = (
  cssProp: string = "padding",
  cssPropUnits: string = "px",
  values: Record<string, number>[] = [],
  mediaQueryType: string = "max-width"
) => {
  return values.map(value => {
    const screenBreakpoint = Object.keys(value)[0];
    const cssPropBreakpoint = Object.values(value)[0];
    return css`
      @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
        ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
      }
    `;
  });
};