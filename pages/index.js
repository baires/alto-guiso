import React from "react";
import HeadBasic from "../head";
import "isomorphic-unfetch";

const BLUE = "https://api.bluelytics.com.ar/v2/latest";
BLUE
export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(BLUE);
    const json = await res.json();
    return { sell: json.blue.value_sell };
  }

  render() {
    const { sell } = this.props;
    const RATIO = 3.4;
    const GUISO_RATIO = Math.round(RATIO * sell).toFixed(0);

    return (
      <>
        <HeadBasic />
        <div className="container">
          <div>
            <p>
              Hoy necesitas <strong>${GUISO_RATIO}</strong> para un Alto Guiso
            </p>
            <p>
              <small>
                ({RATIO} * ${sell} dolar blue)
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
