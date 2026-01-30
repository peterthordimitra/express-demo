# Express.js Demo: Static Site + Simple API

This project is a small, beginner-friendly **Express.js demo application**. It shows how to:

- Create an Express server
- Serve static HTML files
- Build a simple JSON API endpoint
- Call that API from the frontend using `fetch`
- Run everything on a single Express server (same origin)

It’s designed as a learning example for understanding core Express concepts.

---

## What This App Does

- Serves a static HTML page at `/`
- Exposes a simple API endpoint at `/api/message`
- The HTML page makes a request to the API and displays the response

No database, no frameworks on the frontend—just Express and vanilla JavaScript.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **Vanilla HTML + JavaScript (no frontend framework)**

---

# Project Structure

express-demo/  
├── server.js  
├── package.json  
└── public/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.html  

- `server.js` – Express server and API routes
- `public/index.html` – Static HTML page served by Express

---

# Getting Started (Run Locally)

## Prerequisites

- Node.js (LTS recommended)
- npm (included with Node)

Check versions:

1. ```node -v```
2. ```npm -v```

## Installation

### Clone the repository:

`git clone https://github.com/peterthordimitra/express-demo`

### Navigate into the project directory:

 `cd express-demo`

### Install dependencies:

`npm install`

### Running the App

Start the server:

`node server.js`

You should see:

* Server running at http://localhost:3000

Open your browser and go to:

* http://localhost:3000


* Click “Load Message” to fetch data from the Express API.

## API Endpoint

* Request:
`GET /api/message`

* Response:
`
{
  "message": "Hello from the Express API!"
}
`
## Learning Goals

This project demonstrates:

1. Express app setup
2. Middleware usage (express.json, express.static)
3. Basic routing
4. The request/response cycle
5. Serving frontend and backend from the same server

## Possible Next Steps

1. Add POST routes
2. Use express.Router() for better structure
3. Add environment variables
4. Connect a database
5. Add logging or error-handling improvements

### MIT License

This project is provided for learning and experimentation purposes.

---
