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
    `}>
      <h2>HPE : Content design</h2>
    </div>
    <div css={css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
      row-gap: 4rem;
      margin-top: 2rem;
    `}>
      {/* Cloud Cliff */}
      <div>
        <Img fluid={data.image1.sharp.fluid}></Img>
      </div>

      {/* Cyber Crime */}
      <div>
        <Img fluid={data.image2.sharp.fluid}></Img>
      </div>

      {/* Genomic */}
      <div>
        <Img fluid={data.image3.sharp.fluid}></Img>
      </div>

      {/* Flash Storage Myths */}
      <div>
        <Img fluid={data.image4.sharp.fluid}></Img></div>
    </div>
    </>
  )
}

export default WorkHPE