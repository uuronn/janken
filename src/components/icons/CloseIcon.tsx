import { css } from "@emotion/react";
import type { ComponentPropsWithRef } from "react";

import { colors } from "~/styles/themes";

import { sizeTheme } from "./theme";

export interface CloseIconProps extends ComponentPropsWithRef<"svg"> {
  size?: "sm" | "md" | "lg";
}

const common = css`
  object-fit: contain;
  vertical-align: top;
`;

export const CloseIcon = ({
  size = "md",
  ...props
}: CloseIconProps): JSX.Element => {
  const svg = css`
    ${common};
    ${sizeTheme[size]};
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.658"
      height="21.658"
      viewBox="0 0 21.658 21.658"
      css={svg}
      {...props}
    >
      <g transform="translate(-676.672 -267.172)">
        <line
          x2="16"
          y2="16"
          transform="translate(679.5 270)"
          fill="none"
          stroke={colors.black.lighten[1]}
          strokeLinecap="round"
          strokeWidth="4"
        />
        <line
          x2="16"
          y2="16"
          transform="translate(695.501 270) rotate(90)"
          fill="none"
          stroke={colors.black.lighten[1]}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};
