import React from 'react'
import { css } from '@emotion/core'

const WorkSpecimen = () => {
  return (
    <div css={css`
      margin: 4rem 0;
    `}>
      <h2 css={css`
        margin-bottom: 2rem;
      `}>Personal work</h2>
      <div css={css`
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
      `}>
        <iframe css={css`
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        `} src="https://player.vimeo.com/video/15885998" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default WorkSpecimen