import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from './App'

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2A45C2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    position: relative;
  }
`

function Score() {
  const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  )
}

export default Score
