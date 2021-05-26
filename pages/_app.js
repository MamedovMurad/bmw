import '../styles/globals.css'
import React, { useState } from "react";
import { Context } from "../context/Context";
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState("az");

  return <Context.Provider value={[context, setContext]}>
  <Component {...pageProps} />
  </Context.Provider>
}

export default MyApp
