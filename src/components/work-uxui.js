import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkUxUi = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "twcbcc_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "voicezone.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "vbb_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
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
        grid-template-rows: repeat(2, 1fr);
        background-color: white;
      `}>
        <div css={css`
          grid-column: 11 / span 3;
          grid-row: 1 / span 2;
          align-self: end;
        `}>
          <h2 css={css`
            margin-top: 6em;
            margin-left: -.2rem;
          `}>Branding, UX/UI design</h2>
          <div css={css`
          width: 2rem;
          height: 4px;
          background-color: #0076c6;
        `}></div>
        <small css={css`
        `}>Time Warner Cable</small>
        </div>
        <div css={css`
          grid-column: 2 / span 12;
          grid-row: 3;
          z-index: 20;
          margin-top: 4rem;
          @media (min-width:820px) {
            
          }
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}

export default WorkUxUi