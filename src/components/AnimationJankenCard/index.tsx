import { css } from "@emotion/react";

export const AnimationJankenCard = ({ ...props }): JSX.Element => {
  return (
    <>
      <span css={border} />
      <div css={overlay} {...props}>
        <img src="/images/all-janken.png" alt="じゃんけんカード" css={img} />
      </div>
    </>
  );
};

const border = css`
  position: absolute;
  width: 123px;
  height: 123px;
  border: solid 3px #000;
  top: 57px;
  left: 50.4%;
  transform: translateX(-50%);
  border-radius: 50%;
`;

const overlay = css`
  clip-path: circle(15.5% at 50.8% 76.8%);
`;

const img = css`
  width: 392px;
  transform: rotate(180deg);
  animation: rotate 1.5s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
