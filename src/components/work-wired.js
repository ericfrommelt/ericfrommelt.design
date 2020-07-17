import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkWired = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "wired-okcupid.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
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
      `}>
        <h2>Wired : Infographic design</h2>
        <div css={css`
          margin: 2rem 0;
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}
export default WorkWired