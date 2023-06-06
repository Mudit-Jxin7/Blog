# MERN Blog Application

This is a full-stack blog application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, read, and update blog posts. The application provides an intuitive user interface for managing blog content and utilizes a RESTful API for server-side functionality.

## Prerequisites

To run this application locally, you need to have the following software installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```shell
git clone https://github.com/Mudit-Jxin7/blog.git
cd blog
```

2. Install the server dependencies:

```shell
cd server
npm install
```

3. Install the client dependencies:

```shell
cd ../client
npm install
```

## Configuration

1. Create a `.env` file in the server directory and add the following variables:

```
MONGODB_URI=<your-mongodb-uri>
```

Replace `<your-mongodb-uri>` with your actual MongoDB connection string.

## Usage

1. Start the server:

```shell
cd server
nodemon index.js
```

The server will run on `http://localhost:4000`.

2. Start the client:

```shell
cd client
npm run dev
```

The client will run on `http://127.0.0.1:5173` and automatically open in your default browser.

## Folder Structure

The project structure is as follows:

- `server/` - Backend server code
  - `models/` - Database models
  - `index.js` - API routes
- `client/` - Frontend client code
  - `public/` - Public assets
  - `src/` - Source code
    - `components/` - Reusable React components
    - `pages/` - Main application pages

## Contributing

Contributions to this project are welcome. Feel free to open issues and submit pull requests.

Please follow the existing code style and make sure to run tests before submitting any changes.

## Acknowledgments

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
