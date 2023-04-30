import Document, { Html } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <Head /> // breaks style
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body> */}
      </Html>
    );
  }
}

export default MyDocument;
