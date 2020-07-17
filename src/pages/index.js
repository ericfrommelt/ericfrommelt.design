import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import Layout from "../components/layout"
import CovidHair from "../components/covid-hair"
import WorkHPE from "../components/work-hpe"
import WorkWired from "../components/work-wired"
import WorkTransformationVideo from "../components/work-transformation-video"
import WorkJennAir from "../components/work-jennair"
import WorkSpecimen from "../components/work-specimen"
import WorkFiveAutomations from "../components/work-five-automations"

export default () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <h1 css={css`
          margin-bottom: 4rem;
        `}><span css={css`letter-spacing: -.2rem;`}>H</span>ello, <span css={css`letter-spacing: -.2rem;`}>I'</span>m Eric. I tell stories through data visualization, infographics, art direction, typography, illustration and photography — synthesized by design. </h1>
        <div css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        `}>
          <div css={css`
            grid-column: 10;
            width: 20px;
            height: 20px;
            margin-bottom: 12rem;
            `}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.71 5.06">
              <title>DownArrow</title>
              <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                <polyline css={css`fill: none; stroke: #000; stroke-miterlimit: 10;`} points="0.35 0.35 4.35 4.35 8.35 0.35"/></g>
              </g>
            </svg>
          </div>
        </div>
        <WorkHPE></WorkHPE>
        <WorkWired></WorkWired>
        <WorkTransformationVideo></WorkTransformationVideo>
        <WorkJennAir></WorkJennAir>
        <WorkFiveAutomations></WorkFiveAutomations>
      </Layout>
    </>
  )
}


