import * as React from "react";
import { useEffect } from "react";

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    // Office JS is already ready at this point since this component is rendered after Office.onReady()
    // Redirect to the Databricks dashboard
    window.location.href = "https://e2-dogfood.staging.cloud.databricks.com/embed/dashboardsv3/01ef486a14151a3ca3dc14b667c9cec9?o=6051921418418893";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>Loading Databricks dashboard...</p>
    </div>
  );
};

export default App;
