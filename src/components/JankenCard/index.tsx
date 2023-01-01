import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"div"> {
  imgPath: string;
}

export const JankenCard = ({ imgPath, ...props }: Props): JSX.Element => {
  return (
    <div css={card} {...props}>
      <img src={imgPath} alt="じゃんけん画像" css={img} />
    </div>
  );
};

const card = css`
  width: 152px;
  height: 152px;
`;

const img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
