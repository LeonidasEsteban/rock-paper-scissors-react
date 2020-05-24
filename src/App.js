import React from 'react';
import './App.css';
import Header from './header'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'
import Rules from './rules'

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
