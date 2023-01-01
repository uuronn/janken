import "~/styles/globals.css";
import "~/styles/reset.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="janken-app"
        canonical="サイトの正規のURL"
        description="じゃんけんアプリ"
        openGraph={{
          type: "website等のタイプ",
          site_name: "じゃんけんアプリ",
          title: "janken-app",
          description: "じゃんけんアプリ",
          url: "url",
          images: [
            {
              url: "画像URL",
              width: 300,
              height: 600,
              alt: "alt"
            }
          ]
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
