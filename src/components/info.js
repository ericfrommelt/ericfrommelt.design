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
        image2: file(relativePath: { eq: "plant-01.jpg" }) {
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
        grid-template-rows: 20em 1fr;
      `}>
        <div css={css`
          grid-column: 7 / span 1;
          grid-row: 3;
          max-width: .6em;
          margin-top: 4em;
        `}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <title>tri-down</title>
            <g id="Layer_2" data-name="Layer 2">
              <polygon css={css`fill: #000; stroke: none;`} points="0 30 0 0 30 0 0 30"/>
            </g>
          </svg>
        </div>
        <Img css={css`
          grid-column: 2 / span 12;

          @media screen and (min-width: 800px) {
            grid-column: 3 / span 3;
            grid-row: 1;
            margin: 2em 0 2em 2em;
          }
        `} fluid={data.image1.sharp.fluid}></Img>

        <Img css={css`
          grid-column: 2 / span 12;

          @media screen and (min-width: 800px) {
            grid-column: 1 / span 5;
            grid-row: 2;
          }
        `} fluid={data.image2.sharp.fluid}></Img>

        <div css={css`
          grid-column: 2 / span 12;
          margin-top: 4em;

          @media screen and (min-width: 820px) {
            grid-column: 7 / span 6;
          }
        `}>
          <p css={css`
            font-size: 1.4rem;
          `}>I'm a multi-disciplinary designer and developer focused on storytelling at the intersection of design, user experience, and development.</p>
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
            <li>Data Visualization</li>
            <li>HTML / CSS / JavaScript</li>
            <li>Motion Design</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Info