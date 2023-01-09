import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Movie Search</h1>
        <input id="search" placeholder="Search" />
      </main>
    </>
  );
}
