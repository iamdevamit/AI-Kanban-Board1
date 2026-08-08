# 🚀 AI Kanban Board

> An intelligent, real-time, collaborative project management workspace built with the **PERN stack** (PostgreSQL, Express, React, Node.js), **Socket.IO** WebSockets, and **Google Gemini 2.0 Flash AI**.

---

## 🌟 Overview

**AI Kanban Board** redefines project management by merging real-time team collaboration with AI-powered task automation. Stop spending hours manually creating backlogs and breaking down complex requirements—let AI generate actionable tasks, split complex items into subtasks, and synthesize sprint summaries on demand.

---

## 🔥 Key Features

- **🤖 AI Task Automation (Gemini 2.0 Flash)**:
  - **Goal-to-Backlog Generator**: Turn a single-line project goal into a complete, prioritized task backlog.
  - **Subtask Breakdown**: Automatically decompose high-level tasks into actionable, step-by-step subtasks.
  - **Sprint Executive Summaries**: Generate instant sprint summaries outlining completed work, active tasks, risks, and next priorities.

- **⚡ Real-Time Collaboration (Socket.IO)**:
  - **Live Presence & Viewers**: See active team members currently viewing the board.
  - **Real-Time Cursor Tracking**: Track live cursor movements across the board.
  - **Instant State Sync**: Changes to columns, tasks, position movements, and comments update instantly across all connected clients.

- **📋 Interactive Drag-and-Drop Kanban**:
  - Powered by `@dnd-kit` for fluid reordering across columns (`Todo`, `In Progress`, `Review`, `Done`).
  - Fractional positioning algorithm (`DOUBLE PRECISION`) for zero-collision task reordering.
  - Priority levels (`Low`, `Medium`, `High`, `Urgent`), assignee avatars, and due dates.

- **📊 Workspace Dashboard & Activity Feed**:
  - Real-time KPI distributions (task velocity, owned vs. shared boards).
  - Searchable command palette and multi-filter criteria (priority, assignee, text).
  - Activity audit logging tracking all user actions.

- **🔐 Enterprise Security & Permissions**:
  - JWT Authentication with salted BCrypt password hashing.
  - Granular board membership roles (`Owner`, `Admin`, `Member`).

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Framer Motion
- **Icons**: Lucide React
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`
- **Networking**: Axios + Socket.IO Client

### **Backend**
- **Runtime**: Node.js + Express 4
- **Database**: PostgreSQL (`pg` pool, hosted on Neon.tech Cloud)
- **Real-Time**: Socket.IO 4
- **AI Engine**: `@google/genai` (Gemini 2.0 Flash)
- **Security**: JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, CORS middleware

---

## 📁 Repository Structure

```
AI-Kanban-Board/
├── Backend/
│   ├── src/
│   │   ├── config/         # Database connection configuration
│   │   ├── controllers/    # API Controllers (Auth, Board, Column, Task, AI, User)
│   │   ├── db/             # SQL schemas (schema.sql), init scripts, seeders
│   │   ├── middleware/     # Auth & Board access control guards
│   │   ├── realtime/       # Socket broadcasting & activity log utilities
│   │   ├── routes/         # Express REST API routes
│   │   ├── services/       # Google Gemini AI integration service
│   │   ├── socket/         # Socket.IO connection & room presence handlers
│   │   └── utils/          # JWT helpers & ApiError handlers
│   ├── .env.example        # Environment variables template
│   ├── index.js            # Express server & WebSocket initialization
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── assets/         # Static assets & branding graphics
│   │   ├── components/     # UI components (board, AI modals, layout, auth, landing)
│   │   ├── context/        # React Context providers (AuthContext, BoardsContext)
│   │   ├── hooks/          # Custom hooks (useBoard, useWorkspace)
│   │   ├── lib/            # Axios API wrappers & Socket.IO client
│   │   ├── pages/          # App pages (Dashboard, BoardPage, Landing, Login, etc.)
│   │   ├── routes/         # Protected routes setup
│   │   └── main.jsx        # App entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **PostgreSQL Database**: A local instance or a cloud instance (e.g., [Neon.tech](https://neon.tech))
- **Google Gemini API Key**: Obtainable from [Google AI Studio](https://aistudio.google.com/)

---

### 1️⃣ Backend Setup

1. **Navigate to the Backend directory**:
   ```bash
   cd Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the `Backend/` directory:
   ```env
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173

   # PostgreSQL Connection String
   DATABASE_URL=postgresql://user:password@localhost:5432/kanban_db?sslmode=require

   # Security
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d

   # Gemini AI API Key
   GEMINI_API_KEY=your_gemini_api_key_here
   GEMINI_MODEL=gemini-2.0-flash
   ```

4. **Initialize the Database**:
   Run the database initialization script to create tables and indexes:
   ```bash
   npm run db:init
   ```

5. **Start the Backend Server**:
   ```bash
   npm run dev
   ```
   The backend API & Socket.IO server will start on `http://localhost:5000`.

---

### 2️⃣ Frontend Setup

1. **Open a new terminal and navigate to the Frontend directory**:
   ```bash
   cd Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the `Frontend/` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_SOCKET_URL=http://localhost:5000
   ```

4. **Start the Vite Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| **POST** | `/api/auth/register` | Register a new user | ❌ |
| **POST** | `/api/auth/login` | Login user & return JWT | ❌ |
| **GET** | `/api/auth/me` | Fetch currently authenticated user | ✅ |
| **GET** | `/api/boards` | List user's accessible boards | ✅ |
| **POST** | `/api/boards` | Create a new Kanban board | ✅ |
| **GET** | `/api/boards/:id` | Get board details, columns, and tasks | ✅ |
| **PATCH** | `/api/boards/:id` | Update board title/description/color | ✅ |
| **DELETE** | `/api/boards/:id` | Delete board | ✅ |
| **POST** | `/api/boards/:id/ai/generate-tasks` | AI auto-generate tasks from goal | ✅ |
| **POST** | `/api/boards/:id/ai/breakdown` | AI break down task into subtasks | ✅ |
| **POST** | `/api/boards/:id/ai/summary` | AI generate sprint executive summary | ✅ |

---

## 📡 WebSockets Real-Time Events

| Event | Direction | Description |
| :--- | :--- | :--- |
| `board:join` | Client ➔ Server | Join board room & retrieve active presence list |
| `board:leave` | Client ➔ Server | Leave board room |
| `presence:cursor` | Client ➔ Server | Broadcast live cursor `(x, y)` coordinates |
| `presence:sync` | Server ➔ Client | Sync list of currently active viewers |
| `board:updated` | Server ➔ Client | Broadcast board modifications |
| `task:created` | Server ➔ Client | Real-time notify card creation |
| `task:moved` | Server ➔ Client | Real-time update task position/column movement |

---

## 🛡️ License

Distributed under the **ISC License**. See `LICENSE` for more information.

---

## 👤 Author

Developed by **Amit Rajput** ([@iamdevamit](https://github.com/iamdevamit)).