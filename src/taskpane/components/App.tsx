import * as React from "react";
import { useEffect, useState } from "react";
import { insertText } from "../taskpane";

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dashboardUrl = "https://e2-dogfood.staging.cloud.databricks.com/embed/dashboardsv3/01ef486a14151a3ca3dc14b667c9cec9?o=6051921418418893";

  useEffect(() => {
    // Office JS is already ready at this point since this component is rendered after Office.onReady()
    insertText("Hello, world!");
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    console.error("Failed to load Databricks dashboard in iframe");
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
      {isLoading && (
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          zIndex: 1000
        }}>
          <p>{props.title} - Loading Databricks dashboard...</p>
        </div>
      )}
      <iframe
        src={dashboardUrl}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          flex: 1
        }}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allow="clipboard-read; clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
        title="Databricks Dashboard"
      />
    </div>
  );
};

export default App;
