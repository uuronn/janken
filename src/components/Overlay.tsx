import { css } from "@emotion/react";
import type { ComponentPropsWithRef, ForwardedRef } from "react";

export interface OverlayProps extends ComponentPropsWithRef<"button"> {
  forwardRef?: ForwardedRef<HTMLButtonElement>;
}

const common = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index--overlay);
  background: rgba(0, 0, 0, 0.54);
`;

export const Overlay = ({
  forwardRef,
  ...props
}: OverlayProps): JSX.Element => {
  return <button ref={forwardRef} css={common} {...props} />;
};
