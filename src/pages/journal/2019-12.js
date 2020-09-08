import React from 'react'
import { css } from '@emotion/core'
import Layout from '../../components/layout'

export default () => (
  <>
    <Layout>
      <div css={css`
        display: grid;
        grid-template-columns: repeat(14, 1fr);
      `}>
        <date css={css`
          grid-column: 9;
          font-family: "Operator Mono A", "Operator Mono B";
          font-style: normal;
          font-weight: 400;
          font-size: .5rem;
          transform-origin: 0 0;
          transform: rotate(-90deg);
        `}>2019-12</date>
      </div>
    </Layout>
  </>
)