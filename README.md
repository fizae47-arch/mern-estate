# FizaEstate

A full-stack MERN real estate platform for browsing, searching, and managing property listings.

## Live Demo

https://mern-estate-theta-woad.vercel.app/

## Overview

FizaEstate is a full-stack real estate web application built with the MERN stack. The platform allows users to create accounts, browse property listings, search and filter properties, manage their own listings, save favorites, and communicate with property owners.

The project focuses on building a complete real-world application with authentication, database integration, image storage, state management, and REST APIs.

## Features

### Authentication
- User signup and login
- JWT-based authentication
- Google OAuth authentication
- Protected routes and user-specific functionality

### Property Listings
- Create property listings
- Edit existing listings
- Delete listings
- View detailed property information
- Upload property images
- Search and filter listings
- Support for rent and sale listings

### User Features
- User profile
- Update profile information
- Update password
- Save properties to favorites
- Contact property owners
- Messaging functionality

### Backend
- RESTful APIs
- Express.js server
- MongoDB database
- Mongoose for database modeling
- JWT authentication
- Protected API routes

### Image Storage
- Supabase Storage for property images

### State Management
- Redux Toolkit
- Centralized application state

### UI
- React
- Tailwind CSS
- Responsive design
- Reusable components

## Tech Stack

### Frontend
- React
- JavaScript
- Tailwind CSS
- Redux Toolkit

### Backend
- Node.js
- Express.js
- REST APIs
- JWT

### Database
- MongoDB
- Mongoose

### Authentication & Services
- Firebase Google OAuth
- Supabase Storage

### Deployment
- Vercel
- Git
- GitHub

## Project Structure

```text
mern-estate/
├── client/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── ...
│
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── ...
