import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkIllustration = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "StyleShifters.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "quant-junkies2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "visiond-for-space.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "ShotLink_Photo.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "oculus-rift-2x.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "PureData_layout.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
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
        grid-template-columns: repeat(1, 1fr);
        margin: 8em 0;
        padding: 1em;
        @media screen and (min-width: 800px) {
          grid-template-columns: repeat(2, 1fr);
          padding: 4em;
        };
      `}>
        <div css={css`
          grid-column: 1;
          grid-row: 1;
          align-self: center;
          color: black;
          margin-bottom: 2em;
      `}>
        <h2>Illustration</h2>
        <div css={css`
          width: 2rem;
          height: 4px;
          background-color: teal;
        `}></div>  
      </div>
        <div css={css`
          padding: 2em 0;
          @media screen and (min-width: 800px) {
            padding: 2em;
          }
        `}>
          <Img fluid={data.image4.sharp.fluid}></Img>
        </div>
        <div css={css`
          padding: 2em 0;
          @media screen and (min-width: 800px) {
            padding: 2em;
          }
        `}>
          <Img fluid={data.image5.sharp.fluid}></Img>
        </div>
        <div css={css`
          padding: 2em 0;
          @media screen and (min-width: 800px) {
            padding: 2;
          }
        `}>
          <Img fluid={data.image2.sharp.fluid}></Img>
        </div>
        <div css={css`
          padding: 2em 0;
          @media screen and (min-width: 800px) {
            padding: 2em;
          }
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
        <div css={css`
          padding: 2em 0;
          @media screen and (min-width: 800px) {
            padding: 2em;
          }
        `}>
          <Img fluid={data.image6.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}

export default WorkIllustration