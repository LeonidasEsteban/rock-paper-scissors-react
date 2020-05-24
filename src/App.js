import React from 'react';
import './App.css';
import Header from './header'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'
import Rules from './rules'

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  color: white;
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
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
