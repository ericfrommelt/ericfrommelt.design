import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Nameplate from '../components/nameplate'

const NavLink = styled(Link)`
  font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #222;
  font-size: .8rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6rem;
    `}
  >
    <Link to='/'><Nameplate></Nameplate></Link>
    <nav>
      <Link css={css`margin-right: 1rem;`} to='/information'>Information</Link>
      <Link to='/journal'>Journal</Link>
    </nav>
  </header>
)

export default Header