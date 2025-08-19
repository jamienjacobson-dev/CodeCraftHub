# User Management Service (UMS) - Node.js + MongoDB

This repository contains a scalable User Management Service (UMS) implemented with Express.js and MongoDB (via Mongoose). It provides a foundational structure for user management, authentication, and RBAC, and is designed to slot into a broader microservice ecosystem.

Prerequisites:
- Node.js 14+
- MongoDB (local or remote)
- Environment variables via .env (MONGO_URI, JWT_SECRET, JWT_REFRESH_SECRET, PORT)

Key routes (versioned):
- POST /api/v1/users (Admin only) - create user
- GET /api/v1/users (Admin only) - list users
- GET /api/v1/users/:id (Admin only) - get user by id
- PATCH /api/v1/users/:id (Admin only) - update user by id
- GET /api/v1/users/me (Authenticated user) - profile
- PATCH /api/v1/users/me (Authenticated user) - update profile

Run locally:
- npm install
- Create a .env with required vars
- npm run dev
