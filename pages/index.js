import React from "react";
import HeadBasic from "../head";
import "isomorphic-unfetch";

const GALICIA =
  "https://www.bancogalicia.com/cotizacion/cotizar?currencyId=02&quoteType=SU&quoteId=999";

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(GALICIA);
    const json = await res.json();
    return { sell: json.sell };
  }

  render() {
    const { sell } = this.props;
    const RATIO = 3.4;
    const GUISO_RATIO = RATIO * sell.split(",").join(".");
    return (
      <>
        <HeadBasic />
        <div className="container">
          <div>
            <p>
              You will need <strong>${GUISO_RATIO}</strong> to buy an Alto Guiso
              today
            </p>
            <p>
              <small>
                ({RATIO} * ${sell.split(",").join(".")} Bco. Galicia)
              </small>
            </p>
          </div>
        </div>
        <style jsx>{`
          .container {
            font-size: 24px;
            line-height: 1.4;
            height: 100%;
            padding: 0 10%;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container p {
            text-align: center;
          }
          .container small {
            color: gray;
            font-size: 60%;
          }
        `}</style>
      </>
    );
  }
}
