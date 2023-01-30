import '../styles/globals.css';
import type { AppProps } from 'next/app';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
