import { css } from "@emotion/react";
import type { ComponentPropsWithRef } from "react";

import { CloseIcon } from "~/components/icons/CloseIcon";
import { Overlay } from "~/components/Overlay";
import { colors, overlayOrder } from "~/styles/themes";

interface BaseModalProps extends ComponentPropsWithRef<"div"> {
  close?: () => void;
}

export const BaseModal = ({
  children,
  close,
  ...props
}: BaseModalProps): JSX.Element => {
  return (
    <>
      <Overlay onClick={close} />
      <div css={common} {...props}>
        {close && (
          <button css={closeIcon} onClick={close}>
            <CloseIcon size="md" />
          </button>
        )}
        {children}
      </div>
    </>
  );
};

const common = css`
  width: 100%;
  max-width: 300px;
  padding: 30px 30px 30px;
  position: fixed;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  box-shadow: 0 3px 6px 0 ${colors.black.lighten[1]};
  background: ${colors.white};
  border-radius: 10px;
`;

const closeIcon = css`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: ${overlayOrder.high};
`;
