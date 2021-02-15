import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuWrapper.Logo = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  margin-top: 18px;
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  a {
    text-decoration: none;
    color: #000;
    margin: 0 12px;
  }
`;

