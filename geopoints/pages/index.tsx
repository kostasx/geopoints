import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from 'react-query';
import fetchUserData from '../util/fetchUserData';

const Home: NextPage = () => {
  // get the user from auth0
  const { user } = useUser();

  // fetch the user data with ReactQuery using the user email
  const { isError, isLoading, data, error } = useQuery(
    ['fectchUserData', user?.email],
    () => fetchUserData(user?.email!)
  );

  // todo: show spinner when loading
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError && error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  console.log({ data });
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <section className="mb-auto">
        <h1 className="text-neutral-500">{data.email}</h1>
        <h1 className="text-neutral-500">{data.bio}</h1>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
