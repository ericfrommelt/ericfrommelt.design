import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const WorkTransformationVideo = () => {
  const data = useStaticQuery(graphql`
  query {
    image1: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_01.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_02.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_03.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_04.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_05.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_06.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_07.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_08.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image9: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_09.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image10: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_10.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image11: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_11.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image12: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_12.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image13: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_13.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image14: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_14.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image15: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_15.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image16: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_16.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image17: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_17.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image18: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_18.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image19: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_19.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image20: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_20.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image21: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_21.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image22: file(relativePath: { eq: "Transformation_Shapes_11-2-2017_22.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);
  return (
    <div css={css`
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      grid-template-rows: 1fr, 1fr, 1fr;
      margin-top: 4rem 0;
      column-gap: 1rem;
      row-gap: 1rem;
    `}>
      <Img css={css`grid-column: 2 / span 4; grid-row: 1;`} fluid={data.image2.sharp.fluid}></Img>
      <Img css={css`grid-column: 9 / span 5; grid-row: 3;`} fluid={data.image21.sharp.fluid}></Img>
      <div css={css`
        grid-column: 2 / span 3;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `}>
        <Img fluid={data.image7.sharp.fluid}></Img>
      </div>
      <div css={css`
        grid-column: 7 / span 8;
        grid-row: 1;
        align-self: center;
        color: black;
      `}>
        <h2>Brand Video</h2>
        <div css={css`
          width: 2rem;
          height: 4px;
          background-color: #5bb9cf;
        `}></div>
        <small>Digitas</small>  
      </div>

      <div css={css`
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        grid-column: 5 / span 9;
        grid-row: 2;
      `}>
        <iframe css={css`
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        `} src="https://player.vimeo.com/video/283314295" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default WorkTransformationVideo