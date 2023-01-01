import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AlertModal } from "~/components/AlertModal";
import { FlexContainer } from "~/components/FlexContainer";
import { JankenCard } from "~/components/JankenCard";
import { JANKEN_VALUE_LIST } from "~/data";

const Home: NextPage = () => {
  const [myJanken, setMyJanken] = useState<string>();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [result, setResult] = useState<string>();
  const [enemyJanken, _] = useState(
    () =>
      JANKEN_VALUE_LIST[Math.floor(Math.random() * JANKEN_VALUE_LIST.length)]
  );

  const jankenResultFun = (result: string) => {
    setTimeout(() => {
      setIsModal(true);
      setResult(result);
    }, 200);
  };

  useEffect(() => {
    switch (myJanken) {
      case "gu":
        switch (enemyJanken) {
          case "gu":
            jankenResultFun("あなたはあいこです");
            break;

          case "choki":
            jankenResultFun("あなたの勝ちです！");
            break;

          case "pa":
            jankenResultFun("あなたの負けです。");
            break;
        }
        break;

      case "choki":
        switch (enemyJanken) {
          case "choki":
            jankenResultFun("あなたはあいこです");
            break;

          case "pa":
            jankenResultFun("あなたの勝ちです！");
            break;

          case "gu":
            jankenResultFun("あなたの負けです。");
            break;
        }
        break;

      case "pa":
        switch (enemyJanken) {
          case "pa":
            jankenResultFun("あなたはあいこです");
            break;

          case "gu":
            jankenResultFun("あなたの勝ちです！");
            break;

          case "choki":
            jankenResultFun("あなたの負けです。");
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
          <p css={text}>あいて</p>
          {!myJanken ? (
            <JankenCard imgPath="/images/question.png" css={enemyCard} />
          ) : (
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

const home = css`
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
`;

const text = css`
  text-align: center;
  font-size: 24px;
`;

const enemyCard = css`
  img {
    display: block;
    margin: 0 auto;
    transform: rotate(180deg);
  }
`;
