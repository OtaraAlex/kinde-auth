import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_APP_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_APP_KINDE_DOMAIN}
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);
