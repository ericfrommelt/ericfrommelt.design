import React from 'react'
import { useStaticQuery, grpahql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

  const Info = () => {
    const data = useStaticQuery(graphql`
      query {
        image1: file(relativePath: { eq: "portrait-ef.jpg" }) {
          sharp: childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
  return (
    <>
      <div css={css`
        margin: 8em 0;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-template-rows: repeat(2, 1fr);
      `}>
        <Img css={css`
          grid-column: 1 / span 5;
        `} fluid={data.image1.sharp.fluid}></Img>
        <div css={css`
          grid-column: 7 / span 6;
        `}>
          <p>I'm a multi-disciplinary designer and developer focused on storytelling at the intersection of design, user experience, and development.</p>
          <h3 css={css`
            margin-top: 4em;
          `}>Skills</h3>
          <ul css={css`
            list-style: none;
            padding: 0;
            font-family: "Operator Mono A", "Operator Mono B";
            font-style: normal;
            font-weight: 400;
          `}>
            <li>Art Direction</li>
            <li>UX/UI Design</li>
            <li>Visual Design</li>
            <li>Illustration</li>
            <li>HTML / CSS / JavaScript</li>
            <li>Motion Design</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Info