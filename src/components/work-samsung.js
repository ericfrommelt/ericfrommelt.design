import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkSamsung = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Samsung_Reshape.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div css={css`
        margin: 8em 0;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        background-color: #ccc;
      `}>
        <div css={css`
          grid-column: 2 / span 12;
          margin-bottom: 4em;

          @media screen and (min-width: 800px) {
            grid-column: 11 / span 3;
          }
        `}>
          <h2 css={css`
            margin-top: 6em;
            margin-left: -.2rem;
          `}>Single Page Story</h2>
          <div css={css`
          width: 2rem;
          height: 4px;
          background-color: #0076c6;
        `}></div>
        <small css={css`
        `}>Samsung</small>
        </div>
        <div css={css`
          grid-column: 2 / span 12;
          margin-bottom: 4em;

        @media screen and (min-width: 800px) {
          grid-column: 2 / span 8;
          margin-top: -14em;
          margin-bottom: 8em;
        }
      `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}
export default WorkSamsung