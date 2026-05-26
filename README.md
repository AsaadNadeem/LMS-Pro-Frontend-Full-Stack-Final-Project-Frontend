# Frontend - MERN Learning Management System

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Environment is already configured in `.env`:
- VITE_API_BASE_URL: http://localhost:8000/api

✅ Backend API is automatically proxied during development

### 3. Start Development Server
```bash
npm run dev
```

Frontend runs on: **http://localhost:5173**

### 4. Build for Production
```bash
npm run build   # Creates optimized dist/ folder
npm run preview # Preview production build locally
```

## Project Structure

```
src/
├── components/
│   ├── common/          - ConfirmModal, Loader, etc.
│   ├── layout/          - Navbar, Sidebar, Footer
│   └── roleRoutes/      - AdminRoute, InstructorRoute
├── pages/
│   ├── admin/           - Admin dashboard & management
│   ├── instructor/      - Instructor dashboard & courses
│   ├── student/         - Student courses & lessons
│   └── public/          - Public pages (Home, Login, Register)
├── api/                 - API client functions
├── context/             - React Context (Auth)
├── routes/              - Route definitions
└── styles/              - Custom CSS
```

## Key Features

### Authentication
- Register & Login
- JWT token management
- Protected routes by role

### User Roles
- **Admin** - Manage users, courses, analytics
- **Instructor** - Create & manage courses/lessons
- **Student** - Enroll in courses, view lessons

### Components
- Responsive Bootstrap UI
- Chart.js for analytics
- React Router for navigation
- Axios for API calls
- Toast notifications (react-toastify)
- Loading skeleton screens

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## Technologies

- **React 19** - UI framework
- **Vite 7** - Build tool
- **React Router 7** - Navigation
- **Axios** - HTTP client
- **Bootstrap 5** - UI framework
- **Chart.js** - Analytics charts
- **React Toastify** - Notifications

## Environment Variables

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Change this when deploying to production.

## Troubleshooting

- Port 5173 in use? Vite uses next available port (5174, 5175, etc.)
- API connection failed? Ensure backend is running on port 8000
- Components not showing? Check browser console (F12) for errors

## Deployment

1. Build: `npm run build`
2. Deploy `dist/` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting

3. Update `VITE_API_BASE_URL` to production API

For detailed setup, see [../SETUP_GUIDE.md](../SETUP_GUIDE.md)