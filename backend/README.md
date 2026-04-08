# Job Portal Backend

This is the backend API for the Job Portal application.
It is built with Node.js, Express, and MongoDB, and provides endpoints for users, companies, jobs, and applications.

## Features

- User authentication and authorization
- Company creation and management
- Job posting and retrieval
- Job application submission and tracking
- File upload support with Cloudinary

## Tech Stack

- Node.js
- Express
- MongoDB / Mongoose
- JWT for authentication
- bcryptjs for password hashing
- multer for file uploads
- Cloudinary for image handling
- dotenv for environment configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the backend folder with required variables, for example:
   ```env
   PORT=5000
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloud_name>
   CLOUDINARY_API_KEY=<your_api_key>
   CLOUDINARY_API_SECRET=<your_api_secret>
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. The server will start on the configured port (default: `5000`).

## Project Structure

- `index.js` - entry point for the backend server
- `controllers/` - request handlers for resources
- `models/` - Mongoose schemas and models
- `routes/` - Express routes
- `middlewares/` - middleware for authentication, file upload, etc.
- `utils/` - helpers for Cloudinary, data URI conversion, and database setup

## Notes

- Ensure MongoDB is running and accessible from the backend.
- Update the `.env` values before starting the server.
- Use Postman or a similar tool to test API endpoints.
