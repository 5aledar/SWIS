import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import General from "./pages/General";
import Login from "./pages/Login";
import ProtectedRoute from "./features/auth/components/ProtectedRoutes";
import CompleteProfile from "./pages/CompleteProfile";
import WarHouses from "./pages/WarHouses";
import Users from "./pages/Users";
import Branches from "./pages/Branches";
import Items from "./pages/Items";
import Transactions from "./pages/Transactions";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <General />,
          },
          {
            path: "/warehouses",
            element: <WarHouses />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/branches",
            element: <Branches />,
          },
          {
            path: "/items",
            element: <Items />,
          },
          {
            path: '/transactions',
            element: <Transactions />
          }
        ],
      },
    ],
  },
  {
    path: "/log-in",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: '/complet-profile',
    element: <CompleteProfile />
  }
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
