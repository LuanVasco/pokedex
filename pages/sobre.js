import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


export default function Sobre() {
  return (
    <div>
      <Head>
        <title>Sobre | Pokédex</title>
        <meta content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <h1>Sobre a pokédex</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
     
    </div>
  );
}