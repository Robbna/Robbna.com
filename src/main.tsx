import "./index.css";
import ReactDOM from "react-dom/client";
import { initializeI18n } from "./app/plugins/";
import { App } from "@/app/app";
import { ThemeContextProvider } from "@/app/contexts/ThemeContext";
import { DataContextProvider } from "./app/contexts/DataContext";

initializeI18n().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ThemeContextProvider>
  );
});
