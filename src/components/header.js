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
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      margin: 2em 0 6em 0;
      @media screen and (min-width: 820px) {
        margin: 6em 0;
      }
    `}
  >
    <Link css={css`
      grid-column: 2 / span 4;
    `} to='/'><Nameplate></Nameplate></Link>
    <nav css={css`
      grid-column: 8 / span 6;
      justify-self: end;
      font-size: .8rem;
      margin-top: 2em;

      @media screen and (min-width: 820px) {
        margin-top: .8em;
      }
    `}
>
      <Link css={css`margin-right: 1rem;`} to='/information/'>Information</Link>
    </nav>
  </header>
)

export default Header