import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkHPE = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "CloudCliff_8-24-2017-01.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "CyberCrime_8-15-2017-01.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "hpe-3.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "Storage_Myths_07-12-2017-02.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
    <div css={css`
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      margin-top: 2em;

      @media screen and (min-width: 820px) {
        grid-template-rows: repeat(6, 1fr);
      }
    `}>
      <div css={css`
        grid-column: 2 / span 12;
        grid-row: 1;
        color: white;
        margin: 4em 0;

        @media screen and (min-width: 820px) {
          grid-column: 7 / span 6;
          grid-row: 1;
          align-self: center;
        }
      `}>
        <h2>Single Page Stories</h2>
        <div css={css`
          width: 2em;
          height: 4px;
          background-color: #00B386;
        `}></div>
        <small>HPE</small>  
      </div>

      {/* ============================ Cloud Cliff ============================ */}
      <div css={css`
        grid-column: 2 / span 12;
        grid-row: 2;
        margin-top: 2em;

        @media screen and (min-width: 820px) {
          grid-column: 2 / span 4;
          grid-row: 1 / span 4;
          margin-top: -8rem;
        }
      `}>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>

      {/* ============================ Cyber Crime ============================ */}
      <div css={css`
        grid-column: 2 / span 12;
        grid-row: 3;
        margin-top: 2em;

        @media screen and (min-width: 820px) {
          grid-column: 7 / span 8;
          grid-row: 2 / span 3;
        }
      `}>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>

      {/* Genomic */}
      <div css={css`
        grid-column: 2 / span 12;
        grid-row: 4;
        margin-top: 2em;

        @media screen and (min-width: 820px) {
          grid-column: 3 / span 7;
          grid-row: 4 / span 3;
          z-index: -10;
          margin-top: -2rem;
          margin-bottom: 8rem;
        }
      `}>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>

      {/* ============================ Flash Storage Myths ============================ */}
      <div css={css`
        grid-column: 2 / span 12;
        grid-row: 5;
        margin-top: 2em;
        margin-bottom: 2em;

        @media screen and (min-width: 820px) {
          grid-column: 11 / span 3;
          grid-row: 5 / span 2;
        }
      `}>
        <Img fluid={data.image4.sharp.fluid}></Img>
      </div>

      <div css={css`
        grid-column: 1 / span 14;
        grid-row: 1 / span 6;
        background-color: #101010;
        z-index: -20;
      `}></div>
    </div>
    </>
  )
}

export default WorkHPE