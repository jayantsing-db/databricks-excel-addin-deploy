# Deployment Guide for Excel Add-in with Backend

This document provides instructions for setting up, running, and deploying the Excel Add-in with its backend server.

## Development Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git
- An Office 365 account for testing the add-in

### Install Dependencies

```bash
npm install
```

### Running the Development Environment

The project now includes both a frontend (Excel Add-in) and a backend server. You can run both together with:

```bash
npm run dev
```

This command starts:
- The webpack dev server for the frontend on port 3000
- The Express backend server on port 3001

### Testing the Add-in

1. To test the add-in in Excel, run:
   ```bash
   npm start
   ```

2. This will sideload the add-in in Excel and you can interact with it.

3. The backend API can be accessed at http://localhost:3001/api/health and other endpoints.

## Deployment

### Vercel Deployment

To deploy the application to Vercel:

1. Install the Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment.

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Docker Deployment

The project includes Docker configuration for containerized deployment:

1. Build the Docker image:
   ```bash
   docker build -t excel-addin-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3001:3001 excel-addin-app
   ```

3. Your application will be available at http://localhost:3001.

## Configuration

### Environment Variables

You can configure the application behavior using environment variables:

- `PORT`: Port for the backend server (default: 3001)
- Add other environment variables as needed for your application

### Manifest Updates

When deploying to production, update the `manifest.xml` file to point to your production URL:

1. Open `webpack.config.js`
2. Update the `urlProd` constant to your production URL
3. Rebuild the application

## Troubleshooting

### Common Issues

- **CORS errors**: If you encounter CORS errors during development, ensure the CORS middleware is properly configured in `server.js`.
- **Port conflicts**: If port 3000 or 3001 is already in use, you can change the ports in `package.json` and `server.js`.

### Support

For questions or issues, please open an issue in the project repository. 