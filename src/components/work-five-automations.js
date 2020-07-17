import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FiveAutomations = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "5Automations_7-9-2018-01.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "5Automations_7-9-2018-02.png" }) {
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
        <h2>Slack : Illustration</h2>
      </div>
      <div css={css`
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 4rem;
        row-gap: 4rem;
        margin-top: 2rem;
      `}>
        <div>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
        <div>
          <Img fluid={data.image2.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}

export default FiveAutomations