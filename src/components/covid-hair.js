import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CovidHair = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "covid-hair-07-14-2020.JPG" }) {
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
        grid-template-columns: repeat(12, 1fr);
        margin-top: 2rem;
      `}>
        <div css={css`
          grid-column: 9 / span 2;
          text-transform: uppercase;
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
          <small css={css`
            display: inline-block;
            transform-origin: top left;
            transform: rotate(-90deg);
          `}>Covid Hair 07-14-2020</small>
        </div>
      </div>
    </>
  )
}

export default CovidHair