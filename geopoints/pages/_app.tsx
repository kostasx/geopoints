import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import {UserDataContextProvider} from '../contexts/UserDataContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <UserDataContextProvider>
          <Component {...pageProps} />
        </UserDataContextProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyApp;
