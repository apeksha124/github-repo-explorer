# GitHub Repo Explorer

A full-stack web application that allows users to search GitHub profiles and explore repositories using the GitHub API.

## Features

* Search GitHub users by username
* Display profile information:

  * Avatar
  * Name
  * Bio
  * Followers
  * Following
  * Public Repository Count
* View repositories of a user
* Sort repositories by:

  * Stars
  * Name
  * Last Updated
* View additional repository details:

  * Fork Count
  * Open Issues
  * Default Branch
* Recent Search History
* Loading Indicators
* Error Handling
* Backend Response Caching (60 seconds)

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js
* CORS

### API

* GitHub REST API

## Project Structure

github-repo-explorer/

├── client/

│   ├── src/

│   │   ├── App.jsx

│   │   ├── App.css

│   │   └── main.jsx

│   └── package.json

│

├── server/

│   ├── server.js

│   └── package.json

│

└── README.md

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
node server.js
```

## API Endpoints

### Get User Profile

```http
GET /api/github/:username
```

### Get User Repositories

```http
GET /api/github/:username/repos
```

## Caching

The backend caches GitHub API responses for 60 seconds to reduce unnecessary requests and improve performance.

## Future Improvements

* Pagination for repositories
* Dark Mode
* Repository Language Statistics
* Improved Search Experience

## Author

Developed as part of a Full Stack Developer evaluation project.
