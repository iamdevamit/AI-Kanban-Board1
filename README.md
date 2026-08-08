<div align="center">

  # ⚡ AI KANBAN BOARD

  **An Intelligent, Real-Time Collaborative Project Management Platform**

  [![Vercel Live](https://img.shields.io/badge/Vercel-Live--App-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-kanban-board1.vercel.app/)
  [![Render Backend](https://img.shields.io/badge/Render-API--Server-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://ai-kanban-board1.onrender.com)
  [![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Google Gemini](https://img.shields.io/badge/Gemini-2.0--Flash-8E75FF?style=for-the-badge&logo=googlecloud&logoColor=white)](https://ai.google.dev/)
  [![Socket.IO](https://img.shields.io/badge/Socket.io-Realtime-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon--Cloud-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)

  <br />

  [🌐 **Explore Live Demo**](https://ai-kanban-board1.vercel.app/) • 
  [🚀 **Launch Dashboard**](https://ai-kanban-board1.vercel.app/dashboard) • 
  [🔌 **Backend API Status**](https://ai-kanban-board1.onrender.com) • 

</div>

---

## 📌 Live Links & Deployment Quick Access

> [!IMPORTANT]
> Both Frontend and Backend services are fully deployed, configured with cross-origin security (CORS), and live in production!

| Component | Provider | Live URL | Status |
| :--- | :--- | :--- | :---: |
| **Frontend Web App** | Vercel | [https://ai-kanban-board1.vercel.app](https://ai-kanban-board1.vercel.app) | 🟢 Live |
| **Database Pool** | Neon PostgreSQL | Cloud Hosted (US East) | 🟢 Live |

---

## 🌟 About The Project

**AI Kanban Board** is a next-generation workspace engineered to eliminate manual sprint planning and streamline team productivity. Built with the **PERN stack** (PostgreSQL, Express, React, Node.js), **Socket.IO** WebSockets, and **Google Gemini 2.0 Flash AI**, it brings real-time collaborative editing together with automated project orchestration.

Whether you're breaking down a high-level software goal or generating sprint progress reports, AI Kanban Board acts as your intelligent Scrum Master.

---

## ✨ Core Features

### 🤖 1. AI Task Orchestration (Powered by Gemini 2.0 Flash)
* **Goal-to-Backlog Generator**: Input a single-line vision (e.g. *"Build an AI-powered fitness app"*) and generate 6 concrete, prioritized Kanban tasks.
* **Subtask Decomposition**: Auto-split complex cards into ordered, actionable subtasks.
* **Sprint Summary Generator**: Synthesize sprint health, completed accomplishments, active blockers, and immediate recommendations.

### ⚡ 2. Real-Time Collaboration & Presence (Socket.IO)
* **Live Viewers & Avatars**: Instantly see who is active on your board in real time.
* **Live Cursor Synchronization**: Track teammate cursor interactions seamlessly across cards.
* **Instant State Broadcasting**: Drag-and-drop card movements, column updates, and edits stream instantly without manual refreshing.

### 📋 3. Fluid Drag-and-Drop Kanban Engine
* Built using **`@dnd-kit/core`** and **`@dnd-kit/sortable`** for maximum accessibility and performance.
* **Collision-Free Fractional Ordering**: Uses floating-point algorithm (`DOUBLE PRECISION`) for zero-conflict reordering across columns (`Todo`, `In Progress`, `Review`, `Done`).
* **Rich Task Details**: Support for priorities (`Low`, `Medium`, `High`, `Urgent`), assignee avatars, and due dates.

### 📊 4. Workspace Analytics & Audit Trail
* **KPI Metrics**: Real-time project velocity counters, board ownership ratios, and mini activity charts.
* **Command Palette (`Cmd+K` / `Ctrl+K`)**: Rapid navigation across boards, views, and settings.
* **Audit Trail Feed**: Chronological activity timeline logging every board change.

---

## 🏗️ System Architecture

```mermaid
graph TD
    User([User Web Browser]) -->|HTTPS / WSS| Vercel[Vercel Frontend - React 19]
    Vercel -->|REST API Requests| Render[Render Backend - Node.js / Express]
    Vercel <-->|Socket.IO WebSockets| Render
    Render -->|SQL Queries| Neon[(Neon PostgreSQL Database)]
    Render -->|GenAI SDK Prompting| Gemini[Google Gemini 2.0 Flash AI]
```

---

## 🛠️ Technology Stack Breakdown

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Platform** | React 19, Vite 8, React Router v7 |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lucide Icons |
| **Kanban Core** | `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities` |
| **Real-Time Client** | Socket.IO Client v4, Axios |
| **Backend API** | Node.js, Express v4 |
| **Database & ORM** | PostgreSQL (`pg` native pool), SQL Migrations, Neon Cloud |
| **AI Integration** | `@google/genai` (Gemini 2.0 Flash) |
| **Authentication** | JWT (`jsonwebtoken`), BCrypt salted password hashing |

---

## 🔌 API & WebSockets Reference

### REST API Endpoints

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :---: |
| **POST** | `/api/auth/register` | Register a new user | Public |
| **POST** | `/api/auth/login` | Login user & return JWT token | Public |
| **GET** | `/api/auth/me` | Fetch authenticated profile | ✅ Bearer |
| **GET** | `/api/boards` | List accessible workspace boards | ✅ Bearer |
| **POST** | `/api/boards` | Create a new Kanban board | ✅ Bearer |
| **GET** | `/api/boards/:id` | Fetch board, columns, tasks & members | ✅ Bearer |
| **POST** | `/api/boards/:id/ai/generate-tasks` | AI auto-generate tasks from goal prompt | ✅ Bearer |
| **POST** | `/api/boards/:id/ai/breakdown` | AI decompose task into subtasks | ✅ Bearer |
| **POST** | `/api/boards/:id/ai/summary` | AI generate sprint executive report | ✅ Bearer |

### WebSockets Real-Time Events

| Event Name | Type | Payload / Action |
| :--- | :--- | :--- |
| `board:join` | Client ➔ Server | Join board room session & request active presence list |
| `presence:cursor` | Client ➔ Server | Stream mouse coordinates `(x, y)` to board members |
| `presence:sync` | Server ➔ Client | Receive list of online team viewers |
| `board:updated` | Server ➔ Client | Live update board metadata across all open sessions |
| `task:created` / `task:moved` | Server ➔ Client | Sync card creation and column reordering instantly |

---

## 💻 Local Development Setup

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher
* **PostgreSQL Database** or [Neon.tech](https://neon.tech) account
* **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone Repository
```bash
git clone https://github.com/iamdevamit/AI-Kanban-Board1.git
cd AI-Kanban-Board1
```

### 2. Backend Environment & Setup
```bash
cd Backend
npm install
```

Create `Backend/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

DATABASE_URL=postgresql://user:password@localhost:5432/kanban_db?sslmode=require
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.0-flash
```

Initialize Database tables & seed initial data:
```bash
npm run db:init
npm run dev
```

### 3. Frontend Environment & Setup
Open a new terminal:
```bash
cd Frontend
npm install
```

Create `Frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

Start the Vite development server:
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## 📄 License

Distributed under the **ISC License**.

---

<div align="center">
  <sub>Built with ❤️ by <b><a href="https://github.com/iamdevamit">Amit Rajput</a></b></sub>
</div>
