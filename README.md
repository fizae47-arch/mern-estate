# 🏠 FizaEstate — Real Estate Platform

A full-stack real estate web application built with the MERN stack that allows users to discover, search, and manage property listings.

The platform includes user authentication, Google OAuth, property listing management, search and filtering, image uploads, user profiles, and property interaction features.

## 🚀 Project

FizaEstate is designed as a complete real-world real estate platform where users can browse properties and authenticated users can manage their own listings and profiles.

## ✨ Features

### 🔐 Authentication

- User signup
- User login
- JWT-based authentication
- Google OAuth authentication
- Protected routes
- User logout

### 🏠 Property Listings

- Create property listings
- Edit listings
- Delete listings
- View property details
- Property images
- Property descriptions
- Rent and sale listings
- Property information and pricing

### 🔎 Search & Filtering

- Search properties
- Filter properties
- Rent/Sale property filtering
- Browse available listings
- View detailed property information

### 👤 User Profile

- User profile
- Update profile information
- Update password
- Profile image/avatar
- Manage personal listings

### 🖼️ Image Management

Property and profile images are uploaded and stored using:

- Supabase Storage

### ⭐ Property Interaction

- Save/favorite properties
- Contact property owners
- Interact with property listings

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- Redux
- Redux Toolkit

### Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- Middleware

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- Firebase Google OAuth

### Image Storage

- Supabase

### Deployment

- Vercel

### Development Tools

- Git
- GitHub
- VS Code

## 🏗️ Architecture

The application follows a full-stack MERN architecture.

### Frontend

The React frontend provides:

- Property browsing
- Search and filtering
- Authentication UI
- Property management
- User profile management
- Property details

### Backend

The Express backend provides REST APIs for:

- Authentication
- User management
- Property listings
- Listing creation and updates
- Listing deletion
- Protected operations

### Database

MongoDB stores application data including:

- User information
- Property listings
- Listing details

### Image Storage

Supabase is used for storing uploaded property and profile images.

## 🔐 Authentication & Authorization

The application uses JWT-based authentication to protect user-specific functionality.

Google authentication is also implemented using Firebase OAuth.

Protected functionality includes:

- Creating listings
- Editing listings
- Deleting listings
- Updating profiles
- Managing user-specific data

## 📦 Main Functional Areas

- User Authentication
- Google OAuth
- Property Listings
- Property Search
- Property Filtering
- Property Details
- Create Listing
- Edit Listing
- Delete Listing
- User Profiles
- Image Uploads
- Favorites
- Property Interaction

## 🎯 Project Highlights

FizaEstate demonstrates experience building a complete full-stack web application rather than only a frontend interface.

The project covers the complete development flow:

```text
React UI
   ↓
REST APIs
   ↓
Express Backend
   ↓
MongoDB Database
   ↓
Authentication & Authorization
   ↓
Cloud Image Storage
