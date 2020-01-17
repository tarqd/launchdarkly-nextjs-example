import React from 'react';
import App from 'next/app';
import { withLDProvider } from "launchdarkly-react-client-sdk";



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withLDProvider({
  clientSideID: "<KEY HERE>",
  user: {
  key: "anonymous",
  anonymous: true
  }
  })(MyApp);