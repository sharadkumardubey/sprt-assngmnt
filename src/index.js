import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/globalStyles";
import store from "./store";
import "./index.css";
import theme from './styles/theme';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeConsumer, ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
