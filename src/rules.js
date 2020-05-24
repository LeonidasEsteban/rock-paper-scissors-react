import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'

const RulesStyled = styled.div`
  text-align: center;
  .close-button {
    margin-top: 2em;
  }
  .rules-overlay {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: #3B4262;
      text-transform: uppercase;
      font-weight: 700;
      font-family: Arial;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
  }
`

function Rules() {
  const [visible, setVisible] = useState(true)
  function handleToggleClick() {
    setVisible(!visible)
  }
  return (
    <RulesStyled>
      {
        (visible) && (
          <div className="rules-overlay">
            <h2>Rules</h2>
            <img src="./images/image-rules.svg" alt="Game Rules" />
            <img className="close-button" onClick={handleToggleClick} src="./images/icon-close.svg" alt="Close the game rules" />
          </div>
        )
      }
      <Button onClick={handleToggleClick} />
    </RulesStyled>
  )
}

export default Rules
