import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkJennair = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Choose-Your-Column.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "Noir.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "Noir-Two.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "Obsidian-Interior.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "Rise.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "Rise-Two.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image7: file(relativePath: { eq: "Rise-Three.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image8: file(relativePath: { eq: "Rise-Four.png" }) {
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
    `}>
      <h2>JennAir : Social design</h2>
    </div>
    <div css={css`
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 4rem;
      row-gap: 4rem;
      margin-top: 2rem;
    `}>
      <div>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>
      <div>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>
      <div>
        <Img fluid={data.image5.sharp.fluid}></Img>
      </div>
      <div>
        <Img fluid={data.image6.sharp.fluid}></Img>
      </div>
    </div>
    </>
  )
}

export default WorkJennair