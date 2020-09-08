import React from 'react'
import { css } from '@emotion/core'

const Nameplate = () => {
  return (
    <div>
      <h3
        css={css`
          font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: -.02rem;
          text-transform: uppercase;
          font-weight: 700;
          line-height: 1.6rem;

          @media screen and (min-width: 820px) {
            font-size: 1.2rem;
          }
        `}
      >Eric Frommelt</h3>
    </div>
  )
}

export default Nameplate