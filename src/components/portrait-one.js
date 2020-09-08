import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const PortraitOne = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "portrait-ef.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "portrait-drakkar.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div 
      css={css`
      max-width: 50vw;
      display: grid;
      grid-template-columns: repeat(100, 1fr);
      grid-template-rows: repeat(7, 1fr);
      `}>
        <Img css={css`
          grid-column: 10 / span 40;
          grid-row: 1 / span 2;
        `} fluid={data.image1.sharp.fluid}></Img>
        <Img css={css`
          grid-column: 35 / span 55;
          grid-row: 3 / span 3;
        `} fluid={data.image2.sharp.fluid}></Img>
        <div css={css`
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          grid-column: 58 / span 10;
          grid-row: 2;
          background-color: black;
        `}></div>
    </div>
  )
}

export default PortraitOne