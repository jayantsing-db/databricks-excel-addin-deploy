import * as React from "react";
import { useEffect } from "react";

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    // Office JS is already ready at this point since this component is rendered after Office.onReady()
    // Redirect to the Databricks dashboard
    window.location.href = "https://dbc-674c6175-59a4.dev.databricks.com/embed/dashboardsv3/01f04f5c291416bcb356cde2a691f3cb";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>{props.title} - Loading Databricks dashboard...</p>
    </div>
  );
};

export default App;
