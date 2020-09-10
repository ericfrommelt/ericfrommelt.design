import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkAccenture = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "MoonShot.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "HighStakes_Site.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "LoyaltyMill_Site.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 80) {
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
{/* ========== Header ========== */}
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
          `}>Single Page Stories</h2>
          <div css={css`
            width: 2rem;
            height: 4px;
            background-color: red;
        `}></div>
        <small css={css`
        `}>Accenture</small>
        </div>

{/* ========== Countdown ========== */}
        <div css={css`
          grid-column: 2 / span 12;
          margin-bottom: 4em;

          @media screen and (min-width: 800px) {
            grid-column: 2 / span 8;
        }
      `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>

{/* ========== High Stakes ========== */}
        <div css={css`
          grid-column: 2 / span 12;
          margin-bottom: 4em;

        @media screen and (min-width: 800px) {
          grid-column: 7 / span 4;
        }
      `}>
          <Img fluid={data.image2.sharp.fluid}></Img>
        </div>

{/* ========== Moonshot ========== */}
        <div css={css`
          grid-column: 2 / span 12;
          margin-bottom: 4em;

        @media screen and (min-width: 800px) {
          grid-column: 3 / span 7;
        }
      `}>
          <Img fluid={data.image3.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}
export default WorkAccenture