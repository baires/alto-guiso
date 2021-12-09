import Head from "next/head";

const HeadBasic = () => (
  <Head>
    <title>Alto Guiso Index</title>
    <meta
      property="og:description"
      content="Alto Guiso Index aka AGI"
    />
    <meta
      property="og:image"
      content="https://www.apertura.com/__export/1524847670222/sites/revistaap/img/2018/04/27/alto_guiso.jpg_1913337537.jpg"
    />
    <meta
      property="og:url"
      content="https://alto-guiso-alpha.vercel.app/"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "html,body,p{margin:0;padding:0;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html,body, #__next{height: 100%;}"
      }}
    />
  </Head>
);

export default HeadBasic;
