import * as React from "react";
import { useEffect } from "react";
import { insertText } from "../taskpane";

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    // Office JS is already ready at this point since this component is rendered after Office.onReady()
    // Redirect to the Databricks dashboard
    window.location.href = "https://dbc-81e5ad6a-48db.dev.databricks.com/embed/dashboardsv3/01f05f5ae70b1a7d8b2c3a8059ed6d1a";
    insertText("Hello, world!");
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>{props.title} - Loading Databricks dashboard...</p>
    </div>
  );
};

export default App;
