import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Root() {
  return (
    <div>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}
