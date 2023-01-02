import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Dispatch, Fragment, SetStateAction } from "react";

import { BaseModal } from "../BaseModal";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  result?: string;
};

export const AlertModal = ({ setIsModal, result }: Props): JSX.Element => {
  const router = useRouter();

  const closeHandler = () => {
    setIsModal(false);
    router.reload();
  };

  if (!result) return <Fragment />;

  return (
    <BaseModal css={baseModal} close={() => closeHandler()}>
      <h1 css={modal}>{result}</h1>
    </BaseModal>
  );
};

const baseModal = css`
  overflow: hidden;
`;

const modal = css`
  text-align: center;
  font-size: 1.8rem;
`;
