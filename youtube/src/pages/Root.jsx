import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import NavBar from '../components/NavBar/NavBar';
import { YoutubeApiProvider } from '../context/YoutubeApiContex';
const queryClient = new QueryClient();

export default function Root() {
  return (
    <div>
      <NavBar />
      {/* 우산에 씌워진 모든 컴포넌트는 한 번 생성된 youtube 인스턴스를 사용할 수 있다. */}
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
