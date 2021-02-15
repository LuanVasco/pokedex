import React from 'react';
import Menu from '../../src/components/commons/Menu';

export default function Pokemon({ pokemon }) {
  return (
    <div style={{background: "#FF4E4E"}}>
       <Menu />
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt=""/>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  .then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
    throw new Error('Deu problema');
  })
  .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      pokemon
    }
  }
}

export async function getStaticPaths() { //Basicamente o mesmo código da Home, com diferença no return
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  return {
    paths: pokemons.map((pokemon) => ({ //pra cada pokemon na resposta, um caminho sera gerado
      params: {
        id: pokemon.entry_number.toString(), //necessario usar o toString porque não aceita inteiro como caminho (path)
      },
    })),
    fallback: false,
  };
}