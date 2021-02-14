import React from 'react';
import Head from 'next/head';
import Menu from '../src/components/commons/Menu';

export default function Sobre() {
  return (
    <div style={{background: "#FF4E4E"}}>
      <Head>
        <title>Sobre | Pokédex</title>
        <meta content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Menu />
    </div>
  );
}