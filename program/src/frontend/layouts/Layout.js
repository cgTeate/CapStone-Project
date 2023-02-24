import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - HypeHeads' : 'HypeHeads'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header className='flex justify-center sticky z-10 items-center top-0 bg-gray-500'>
            <Header/>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-gray-500">
          <Footer/>
        </footer>
      </div>
    </>
  );
}