import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AlertModal } from "~/components/AlertModal";
import { AnimationJankenCard } from "~/components/AnimationJankenCard";
import { FlexContainer } from "~/components/FlexContainer";
import { JankenCard } from "~/components/JankenCard";
import { JANKEN_VALUE_LIST } from "~/data";

const Home: NextPage = () => {
  const [myJanken, setMyJanken] = useState<string>();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [result, setResult] = useState<string>();
  const [enemyJanken] = useState(
    () =>
      JANKEN_VALUE_LIST[Math.floor(Math.random() * JANKEN_VALUE_LIST.length)]
  );

  const win = "あなたの 勝ち です！";
  const draw = "あなたは あいこ です";
  const lose = "あなたの 負け です。";

  const jankenResultFun = (result: string) => {
    setTimeout(() => {
      setIsModal(true);
      setResult(result);
    }, 200);
  };

  console.log(enemyJanken);

  useEffect(() => {
    switch (myJanken) {
      case "gu":
        switch (enemyJanken) {
          case "gu":
            jankenResultFun(draw);
            break;

          case "choki":
            jankenResultFun(win);
            break;

          case "pa":
            jankenResultFun(lose);
            break;
        }
        break;

      case "choki":
        switch (enemyJanken) {
          case "choki":
            jankenResultFun(draw);
            break;

          case "pa":
            jankenResultFun(win);
            break;

          case "gu":
            jankenResultFun(lose);
            break;
        }
        break;

      case "pa":
        switch (enemyJanken) {
          case "pa":
            jankenResultFun(draw);
            break;

          case "gu":
            jankenResultFun(win);
            break;

          case "choki":
            jankenResultFun(lose);
            break;
        }
        break;
    }
  }, [myJanken]);

  return (
    <>
      <div css={home}>
        {/* 相手のじゃんけん */}
        <FlexContainer flexDirection="column" alignItems="center">
          <p css={enemyText}>あいて</p>
          {!myJanken ? (
            <AnimationJankenCard css={enemyJankenCard} />
          ) : (
            // <JankenCard imgPath="/images/question.png" css={enemyCard} />
            <JankenCard
              imgPath={`/images/${enemyJanken}.png`}
              css={enemyCard}
            />
          )}
        </FlexContainer>

        {/* 自分のじゃんけん */}
        <FlexContainer justifyContent="center">
          <button onClick={() => setMyJanken("gu")}>
            <JankenCard imgPath={`/images/gu.png`} />
          </button>
        </FlexContainer>
        <FlexContainer justifyContent="center">
          <button onClick={() => setMyJanken("choki")}>
            <JankenCard imgPath={`/images/choki.png`} />
          </button>
          <button onClick={() => setMyJanken("pa")}>
            <JankenCard imgPath={`/images/pa.png`} />
          </button>
        </FlexContainer>
        <p css={text}>じぶん</p>
      </div>
      {isModal && <AlertModal setIsModal={setIsModal} result={result} />}
    </>
  );
};

export default Home;

const enemyText = css`
  text-align: center;
  font-size: 24px;

  margin-bottom: 200px;
`;

const home = css`
  width: 100vw;
  height: 100vh;

  position: relative;
  overflow: hidden;
  /* width: 100vw;
  height: 100vh; */
  padding: 0 16px;
`;

const enemyJankenCard = css`
  position: absolute;
  top: -150px;
  left: 49.6%;
  transform: translateX(-50%);
`;

const text = css`
  text-align: center;
  font-size: 24px;
`;

const enemyCard = css`
  position: absolute;
  top: 40px;

  img {
    display: block;
    margin: 0 auto;
    transform: rotate(180deg);
  }
`;
