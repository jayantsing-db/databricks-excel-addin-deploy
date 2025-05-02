const express = require('express');
const path = require('path');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for development
app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

// Serve static files from the "dist" directory (webpack output)
app.use(express.static(path.join(__dirname, 'dist')));

// Define API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is data from the backend server',
    timestamp: new Date().toISOString()
  });
});

// Catch-all route to serve the frontend for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'taskpane.html'));
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  // Check if we're running in development or production
  if (process.env.NODE_ENV === 'development') {
    // In development, use HTTPS with dev certificates
    const devCerts = require("office-addin-dev-certs");
    
    // Get HTTPS options from the same cert utility used by webpack
    devCerts.getHttpsServerOptions().then(options => {
      https.createServer(options, app).listen(PORT, () => {
        console.log(`HTTPS server running on port ${PORT}`);
      });
    });
  } else {
    // In production or other environments, use standard HTTP
    // (Vercel will handle the HTTPS part)
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

module.exports = app; // Export for testing 