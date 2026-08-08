import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, PublicOnlyRoute } from "./routes/ProtectedRoute";
import { FullScreenSpinner } from "./components/ui/Spinner";

// Lazy-loaded page components for optimal performance & code splitting
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BoardPage = lazy(() => import("./pages/BoardPage"));
const MyTasks = lazy(() => import("./pages/MyTasks"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Team = lazy(() => import("./pages/Team"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppLayout = lazy(() => import("./components/layout/AppLayout"));

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Suspense fallback={<FullScreenSpinner label="Loading Flowboard…" />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicOnlyRoute>
                <Register />
              </PublicOnlyRoute>
            }
          />

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/board/:boardId" element={<BoardPage />} />
          </Route>

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#16161d",
            border: "1px solid #e9e8f3",
            borderRadius: "999px",
            padding: "0.6rem 1rem",
            boxShadow: "0 8px 24px rgba(28,27,64,0.1)",
            fontSize: "0.875rem",
            fontWeight: 500,
          },
        }}
      />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
