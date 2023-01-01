import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FlexContainer } from "~/components/FlexContainer";
import { JankenCard } from "~/components/JankenCard";
import { JANKEN_VALUE_LIST } from "~/data";

const Home: NextPage = () => {
  const [myJanken, setMyJanken] = useState<string>();
  const [enemyJanken, setEnemyJanken] = useState<string>();

  useEffect(() => {
    setEnemyJanken(
      JANKEN_VALUE_LIST[Math.floor(Math.random() * JANKEN_VALUE_LIST.length)]
    );
  }, []);

  useEffect(() => {
    if (enemyJanken) {
      console.log("enemy: ", enemyJanken);
    }
  }, [enemyJanken]);

  const guClickHandler = () => {
    setMyJanken("gu");
  };

  const chokiClickHandler = () => {
    setMyJanken("choki");
  };

  const paClickHandler = () => {
    setMyJanken("pa");
  };

  useEffect(() => {
    if (myJanken === "gu") {
      if (enemyJanken === "gu") {
        alert("グーを出してあいこです");
        location.reload();
      }

      if (enemyJanken === "choki") {
        alert("グーを出して勝ちです");
        location.reload();
      }

      if (enemyJanken === "pa") {
        alert("グーを出して負けです");
        location.reload();
      }
    }

    if (myJanken === "choki") {
      if (enemyJanken === "choki") {
        alert("チョキを出してあいこです");
        location.reload();
      }

      if (enemyJanken === "pa") {
        alert("チョキを出して勝ちです");
        location.reload();
      }

      if (enemyJanken === "gu") {
        alert("チョキを出して負けです");
        location.reload();
      }
    }

    if (myJanken === "pa") {
      if (enemyJanken === "pa") {
        alert("パーを出してあいこです");
        location.reload();
      }

      if (enemyJanken === "gu") {
        alert("パーを出して勝ちです");
        location.reload();
      }

      if (enemyJanken === "choki") {
        alert("パーを出して負けです");
        location.reload();
      }
    }
  }, [myJanken]);

  return (
    <div css={home}>
      <FlexContainer flexDirection="column" alignItems="center">
        <p css={enemyText}>あいて</p>
        {myJanken ? (
          <JankenCard imgPath={`/images/${enemyJanken}.png`} css={enemyCard} />
        ) : (
          <JankenCard imgPath="/images/question.png" css={enemyCard} />
        )}
      </FlexContainer>

      <FlexContainer justifyContent="center">
        <button onClick={guClickHandler}>
          <JankenCard imgPath={`/images/gu.png`} />
        </button>
      </FlexContainer>
      <FlexContainer justifyContent="space-around">
        <button onClick={chokiClickHandler}>
          <JankenCard imgPath={`/images/choki.png`} />
        </button>
        <button onClick={paClickHandler}>
          <JankenCard imgPath={`/images/pa.png`} />
        </button>
      </FlexContainer>
      <p css={enemyText}>じぶん</p>
    </div>
  );
};

export default Home;

const home = css`
  width: 100vw;
  height: 100vh;
  padding: 30px 16px;
`;

const enemyText = css`
  text-align: center;
  font-size: 30px;
`;

const enemyCard = css`
  img {
    display: block;
    margin: 0 auto;
    transform: rotate(180deg);
  }
`;
