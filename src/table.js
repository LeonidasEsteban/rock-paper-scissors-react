import React from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function Table() {
  return (
    <TableStyled>
      <Token name="rock" />
      <Token name="scissors" />
      <Token name="paper" />
    </TableStyled>
  )
}

export default Table
