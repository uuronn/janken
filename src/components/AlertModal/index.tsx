import { css } from "@emotion/react";
import type { Dispatch, SetStateAction } from "react";

import { BaseModal } from "../BaseModal";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  result?: string;
};

export const AlertModal = ({ setIsModal, result }: Props): JSX.Element => {
  const closeHandler = () => {
    setIsModal(false);
    location.reload();
  };

  return (
    <BaseModal css={baseModal} close={() => closeHandler()}>
      <h1 css={modal}>{result}</h1>
    </BaseModal>
  );
};

const modal = css`
  text-align: center;
  font-size: 1.8rem;
`;

const baseModal = css`
  overflow: hidden;
`;
