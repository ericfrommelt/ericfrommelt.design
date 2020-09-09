import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkWired = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "wired-okcupid.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div css={css`
        margin: 4rem 0;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-template-rows: auto auto;
      `}>
        <div css={css`
          grid-column: 2 / span 12;
          grid-row: 1;

          @media screen and (min-width: 820px) {
            grid-column: 3 / span 6;
            grid-row: 1 / span 2;
            align-self: end;
            transform-origin: 0 0;
            transform: rotate(-90deg);
          }
        `}>
          <h2 css={css`

            @media screen and (min-width: 820px) {
              margin-top: 1em;
              margin-left: -.2rem;
            }
          `}>The top dating site profiles from multiple platforms</h2>
          <div css={css`
          width: 2rem;
          height: 4px;
          background-color: orangered;
        `}></div>
        <small css={css`
        `}>Wired</small>
        </div>
        <div css={css`
          margin: 2rem 0;
          grid-column: 2 / span 12;
          grid-row: 2;

          @media screen and (min-width: 820px) {
            grid-column: 4 / span 10;
            grid-row: 1 / span 2;
          }
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}
export default WorkWired