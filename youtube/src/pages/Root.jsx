import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import NavBar from '../components/NavBar/NavBar';
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
