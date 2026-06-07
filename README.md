# 🚀 GitHub Repo Explorer

## 📌 Project Title & Brief Description

The GitHub Repo Explorer is a full-stack web application that allows users to search GitHub profiles and view their public repositories. Users can explore profile information, repository details, and sort repositories based on different criteria. The project demonstrates frontend-backend integration, REST API consumption, caching, and deployment of a full-stack application.

---

## 🌐 Live Demo Links

* **Frontend (Deployed):** https://github-repo-explorer-xl9q.vercel.app/
* **Backend API (Deployed):** https://github-repo-explorer-pfx4.onrender.com

---

## ⚙️ Tech Stack

### Frontend:

* React (Vite): Used for building a fast and responsive user interface
* CSS: Used for styling and layout

### Backend:

* Node.js: JavaScript runtime for server-side development
* Express.js: Framework for building RESTful APIs
* CORS: To allow cross-origin requests between frontend and backend

### API:

* GitHub REST API: Used to fetch user and repository data

---

## 🚀 How to Run Locally

### Prerequisites:

* Node.js installed on your system

### Step 1: Clone the Repository

```bash
git clone https://github.com/apeksha124/github-repo-explorer
cd github-repo-explorer
```

### Step 2: Run the Backend Server

```bash
cd server
npm install
node server.js
```

* Backend runs on: `http://localhost:5000`

### Step 3: Run the Frontend

```bash
cd client
npm install
npm run dev
```

* Frontend runs on: `http://localhost:5173`

---

## 📡 API Documentation

### Base URL:

```
/api/github
```

---

### 👤 Get User Profile

* **Method:** GET
* **Endpoint:** `/:username`

**Example:**

```http
/api/github/octocat
```

---

### 📂 Get User Repositories

* **Method:** GET
* **Endpoint:** `/:username/repos`

**Example:**

```http
/api/github/octocat/repos
```

---

## 📁 Project Structure

```
github-repo-explorer/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                # Backend (Node + Express)
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔮 Next Steps

* Add repository pagination
* Add dark mode
* Add repository filtering
* Add language statistics
* Improve UI responsiveness
* Add search suggestions
* Add GitHub contribution statistics

---
