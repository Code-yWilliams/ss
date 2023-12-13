import React, { Suspense, lazy } from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const HomeLayout = lazy(() => import("@app/components/HomeLayout"));
const Login = lazy(() => import("@pages/Login"));
const Private = lazy(() => import("@app/routes/Private"));
const Signup = lazy(() => import("@pages/Signup"));

const Routes = () => {
  return (
    <RouterRoutes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LinearProgress />}>
            <Private>
              <HomeLayout />
            </Private>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<LinearProgress />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<LinearProgress />}>
            <Signup />
          </Suspense>
        }
      />
    </RouterRoutes>
  );
};

export default Routes;
