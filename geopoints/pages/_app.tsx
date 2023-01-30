import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserDataContext from '../contexts/UserDataContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(null);

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <UserDataContext.Provider value={{ userData, setUserData }}>
          <Component {...pageProps} />
        </UserDataContext.Provider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyApp;
