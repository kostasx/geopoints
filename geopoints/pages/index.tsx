import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <section className="mb-auto">
        <h1 className="text-neutral-500">home works</h1>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
