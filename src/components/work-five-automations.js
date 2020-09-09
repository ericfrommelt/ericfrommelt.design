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
      image3: file(relativePath: { eq: "automationsspreads-1.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "automationsspreads-2.png" }) {
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
        grid-template-rows: 4;
        margin: 8rem 0;
      `}>
        <div css={css`
          grid-column: 2 / span 8;
          grid-row: 1;
          align-self: center;
          color: black;
          margin-bottom: 2em;
      `}>
        <h2>Five Automations Illustration</h2>
        <div css={css`
          width: 2rem;
          height: 4px;
          background-color: red;
        `}></div>
        <small>Slack</small>  
      </div>
        <Img css={css`
          grid-column: 2 / span 12;
          grid-row: 2;
        `} fluid={data.image1.sharp.fluid}></Img>
        <Img css={css`
          grid-column: 2 / span 12;
          grid-row: 3;
          margin-top: 1rem;
        `} fluid={data.image2.sharp.fluid}></Img>
        <Img css={css`
          grid-column: 2 / span 6;
          grid-row: 4;
          margin-top: 1rem;
          margin-right: 1rem;
        `} fluid={data.image3.sharp.fluid}></Img>
        <Img css={css`
          grid-column: 8 / span 6;
          grid-row: 4;
          margin-top: 1rem;
          margin-left: 1rem;
        `} fluid={data.image4.sharp.fluid}></Img>
      </div>
      
    </>
  )
}

export default FiveAutomations