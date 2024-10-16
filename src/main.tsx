import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "./index.css";

// server.start();

async function enableMocking() {
  const { server } = await import("@/mocks/browser");

  return server.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
