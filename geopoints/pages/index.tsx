import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from 'react-query';

import Map from '../components/Map';
import fetchUserData from '../util/fetchUserData';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

const Home: NextPage = () => {
  const Auth = useUser();

  // fetch the user data with ReactQuery using the user email from auth0
  const { isError, isLoading, data, error, refetch } = useQuery(
    ['fectchUserData', Auth.user?.email],
    () => fetchUserData(Auth.user?.email!),
    {
      enabled: false,
    }
  );

  if (Auth.isLoading) {
    return <LoadingSpinner />;
  }

  if (Auth.error) {
    return <span>Error on Auth</span>;
  }

  if (!data) {
    refetch();
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError && error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main className="flex flex-col h-screen justify-between bg-black">
      <Header />
      <section className="mb-auto">
        <Map/>
        {/* <h1 className="text-neutral-500">{data.email}</h1>
        <h1 className="text-neutral-500">{data.bio}</h1> */}
      </section>
      <Footer />
    </main>
  );
};

export default Home;
