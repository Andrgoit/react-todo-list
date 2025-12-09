import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import "./index.css";

const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage/DashboardPage"));
const Layout = lazy(() => import("@/components/Layout/Layout"));
const PrivateRoute = lazy(
  () => import("@/components/PrivateRoute/PrivateRoute.jsx"),
);
const PublicRoute = lazy(
  () => import("@/components/PublicRoute/PublicRoute.jsx"),
);

function App() {
  return (
    <Suspense fallback="...loading">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
