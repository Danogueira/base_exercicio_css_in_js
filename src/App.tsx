import React from 'react';
import styled from 'styled-components';
import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import GlobalStyles from './GlobalStyles';

const Container = styled.div
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
}

export default App;
