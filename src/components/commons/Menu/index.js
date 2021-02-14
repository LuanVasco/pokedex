import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../theme/Logo';
import Link from 'next/link';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
]

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Logo>
        <Logo />
      </MenuWrapper.Logo>
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
               <Link href={link.url} >
               <a>{link.texto}</a>
              </Link>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
   
    </MenuWrapper>
  );
}