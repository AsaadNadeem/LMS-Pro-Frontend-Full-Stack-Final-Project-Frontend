# 🎓 MERN LMS — Frontend

> React + Vite client for the MERN Learning Management System.
> Supports three user roles: **Admin**, **Instructor**, and **Student**.

---

## ⚡ Get Running in 3 Steps

```bash
# 1. Install
npm install

# 2. Start
npm run dev

# 3. Open
# → http://localhost:5173
```

> The `.env` file is pre-configured. No setup needed for local development.
> Backend API calls are automatically proxied to `http://localhost:8000/api`.

---

## 📁 Source Structure

```
src/
│
├── api/                    API client functions (Axios-based)
├── context/                Auth context (React Context API)
├── routes/                 Route definitions
├── styles/                 Custom CSS
│
├── components/
│   ├── common/             Shared UI — ConfirmModal, Loader, etc.
│   ├── layout/             Navbar, Sidebar, Footer
│   └── roleRoutes/         AdminRoute, InstructorRoute guards
│
└── pages/
    ├── admin/              Dashboard & user/course management
    ├── instructor/         Course & lesson authoring
    ├── student/            Enrollment & lesson viewing
    └── public/             Home, Login, Register
```

---

## 🧩 Features at a Glance

**Authentication**
- Register / Login with JWT
- Role-based protected routes

**Three User Roles**

| Role | Capabilities |
|---|---|
| Admin | Manage users, courses, view analytics |
| Instructor | Create and manage courses & lessons |
| Student | Browse, enroll, and view lessons |

**UI & UX**
- Responsive layout via Bootstrap 5
- Analytics charts with Chart.js
- Toast notifications via react-toastify
- Loading skeleton screens
- Client-side routing with React Router

---

## 🛠 Scripts

```bash
npm run dev       # Start local dev server (http://localhost:5173)
npm run build     # Compile optimized production bundle → dist/
npm run preview   # Serve production build locally for testing
npm run lint      # Run ESLint checks
```

---

## 🔧 Tech Stack

| Layer | Library / Tool |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite 7 |
| Routing | React Router 7 |
| HTTP Client | Axios |
| Styling | Bootstrap 5 |
| Charts | Chart.js |
| Notifications | React Toastify |

---

## 🌍 Environment

```env
# .env
VITE_API_BASE_URL=http://localhost:8000/api
```

Update this value when deploying to production.

---

## 🚀 Deployment

```bash
npm run build   # Outputs to dist/
```

Upload the `dist/` folder to any static host:

- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop or CLI
- **GitHub Pages** — via `gh-pages` package
- **Any static host** — upload `dist/` directly

Then update `VITE_API_BASE_URL` in your production environment.

---

## 🩺 Troubleshooting

| Problem | Fix |
|---|---|
| Port 5173 already in use | Vite auto-selects next port (5174, 5175…) |
| API calls failing | Make sure backend is running on port 8000 |
| Components not rendering | Open DevTools (F12) and check the console |
