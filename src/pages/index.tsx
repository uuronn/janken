import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FlexContainer } from "~/components/FlexContainer";
import { JankenCard } from "~/components/JankenCard";
import { JANKEN_VALUE_LIST } from "~/data";

const Home: NextPage = () => {
  const time = 200;
  const [myJanken, setMyJanken] = useState<string>();
  const enemyJanken =
    JANKEN_VALUE_LIST[Math.floor(Math.random() * JANKEN_VALUE_LIST.length)];

  useEffect(() => {
    switch (myJanken) {
      case "gu":
        switch (enemyJanken) {
          case "gu":
            setTimeout(() => {
              alert("あいこです");
              location.reload();
            }, time);
            break;
          case "choki":
            setTimeout(() => {
              alert("勝ちです");
              location.reload();
            }, time);
            break;
          case "pa":
            setTimeout(() => {
              alert("負けです");
              location.reload();
            }, time);
            break;
        }
        break;

      case "choki":
        switch (enemyJanken) {
          case "choki":
            setTimeout(() => {
              alert("あいこです");
              location.reload();
            }, time);
            break;
          case "pa":
            setTimeout(() => {
              alert("勝ちです");
              location.reload();
            }, time);
            break;
          case "gu":
            setTimeout(() => {
              alert("負けです");
              location.reload();
            }, time);
            break;
        }
        break;

      case "pa":
        switch (enemyJanken) {
          case "pa":
            setTimeout(() => {
              alert("あいこです");
              location.reload();
            }, time);
            break;
          case "gu":
            setTimeout(() => {
              alert("勝ちです");
              location.reload();
            }, time);
            break;
          case "choki":
            setTimeout(() => {
              alert("負けです");
              location.reload();
            }, time);
            break;
        }
        break;
    }
  }, [myJanken]);

  return (
    <div css={home}>
      {/* 相手のじゃんけん */}
      <FlexContainer flexDirection="column" alignItems="center">
        <p css={text}>あいて</p>
        {!myJanken ? (
          <JankenCard imgPath="/images/question.png" css={enemyCard} />
        ) : (
          <JankenCard imgPath={`/images/${enemyJanken}.png`} css={enemyCard} />
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
