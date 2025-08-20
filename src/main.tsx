import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { theme } from "./config/theme";

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    document.body.append(app);
    return app;
  })()
).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={theme}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

