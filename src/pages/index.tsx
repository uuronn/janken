import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AlertModal } from "~/components/AlertModal";
import { AnimationJankenCard } from "~/components/AnimationJankenCard";
import { FlexContainer } from "~/components/FlexContainer";
import { JankenCard } from "~/components/JankenCard";
import { JANKEN_VALUE_LIST } from "~/data";
import { useGetLocalStorage } from "~/hook/useGetLocalStorage";

const Home: NextPage = (): JSX.Element => {
  const [myJanken, setMyJanken] = useState<string>();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [result, setResult] = useState<string>();
  const [enemyJanken] = useState(
    () =>
      JANKEN_VALUE_LIST[Math.floor(Math.random() * JANKEN_VALUE_LIST.length)]
  );

  const { localMyBest, localMyBestCounter, localMyBestReset } =
    useGetLocalStorage();

  const win = "あなたの 勝ち です！";
  const draw = "あなたは あいこ です";
  const lose = "あなたの 負け です。";

  const jankenResultFun = (result: string) => {
    setResult(result);
    setIsModal(true);
  };

  useEffect(() => {
    console.log("fdf", localMyBest);
  }, [localMyBest]);

  useEffect(() => {
    if (myJanken === enemyJanken) {
      jankenResultFun(draw);
    } else {
      switch (myJanken) {
        case "gu":
          switch (enemyJanken) {
            case "choki":
              jankenResultFun(win);
              localMyBestCounter();
              break;

            case "pa":
              jankenResultFun(lose);
              localMyBestReset();
              break;
          }
          break;

        case "choki":
          switch (enemyJanken) {
            case "pa":
              jankenResultFun(win);
              localMyBestCounter();
              break;

            case "gu":
              jankenResultFun(lose);
              localMyBestReset();
              break;
          }
          break;

        case "pa":
          switch (enemyJanken) {
            case "gu":
              jankenResultFun(win);
              localMyBestCounter();
              break;

            case "choki":
              jankenResultFun(lose);
              localMyBestReset();
              break;
          }
          break;
      }
    }
  }, [myJanken]);

  return (
    <>
      <div css={home}>
        {/* 相手のじゃんけん */}
        <FlexContainer flexDirection="column" alignItems="center">
          <p css={enemyText}>あいて</p>
          {!myJanken ? (
            <AnimationJankenCard css={animationJankenCard} />
          ) : (
            <JankenCard
              imgPath={`/images/${enemyJanken}.png`}
              css={enemJankenyCard}
            />
          )}
        </FlexContainer>

        <p css={counter}>連続勝利数：{localMyBest}</p>

        {/* 自分のじゃんけん */}
        <FlexContainer justifyContent="center">
          <button onClick={() => setMyJanken("gu")}>
            <JankenCard imgPath={`/images/gu.png`} />
          </button>
        </FlexContainer>
        <FlexContainer justifyContent="center" gap={8}>
          <button onClick={() => setMyJanken("choki")}>
            <JankenCard imgPath={`/images/choki.png`} />
          </button>
          <button onClick={() => setMyJanken("pa")}>
            <JankenCard imgPath={`/images/pa.png`} />
          </button>
        </FlexContainer>
      </div>
      {isModal && <AlertModal setIsModal={setIsModal} result={result} />}
    </>
  );
};

export default Home;

const home = css`
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
`;

const enemyText = css`
  margin-bottom: 200px;
  font-size: 24px;
  text-align: center;
`;

const animationJankenCard = css`
  position: absolute;
  top: -150px;
  left: 49.6%;
  transform: translateX(-50%);
`;

const enemJankenyCard = css`
  position: absolute;
  top: 40px;

  img {
    margin: 0 auto;
    display: block;
    transform: rotate(180deg);
  }
`;

const counter = css`
  font-size: 20px;
  text-align: center;
`;
