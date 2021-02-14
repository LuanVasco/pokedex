import styled from 'styled-components'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  return {
    props: {
      pokemons,
    },
  };
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  const { pokemons } = props;
  return  (
    <div>
      <Head>
        <title>Pokédex</title>
        <meta content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Title>Pokédex - Luan Godoy</Title>
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
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
            <a>{pokemon.pokemon_species.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
