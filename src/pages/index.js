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
import WorkSamsung from "../components/work-samsung"
import WorkUxUi from "../components/work-uxui"
import WorkIllustration from "../components/work-illustration"
import WorkAccenture from "../components/work-accenture"

export default () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <section id="intro" css={css`
          display: grid;
          grid-template-columns: repeat(14, 1fr);
        `}>
          <h1 css={css`
            font-size: 2.4rem;
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: 12rem;
            grid-column: 2 / span 13;

            @media screen and (min-width:820px) {
            font-size: 5rem;
          }
          `}>Hello, I'm Eric. <br />I tell visual stories.</h1>
          <div css={css`
              grid-column-start: 10;
              grid-column-end: 11;
              grid-row: 2;
              margin-bottom: 4em;

              @media screen and (min-width: 820px) {
                margin-bottom: 12em;
              }
          `}>
            <div css={css`
              position: absolute;
              max-width: 14px;

              @keyframes move {
                0% {
                  margin-top: 0px;
                }

                50% {
                  margin-top: 10px;
                }

                100% {
                  margin-top: 0px;
                }
              };

              animation: move 1s steps(60) infinite;
            `}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.71 5.06">
                <title>DownArrow</title>
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                  <polyline css={css`fill: none; stroke: #000; stroke-miterlimit: 10;`} points="0.35 0.35 4.35 4.35 8.35 0.35"/></g>
                </g>
              </svg>
            </div>
          </div>
        </section>
        <WorkHPE></WorkHPE>
        <WorkWired></WorkWired>
        <WorkTransformationVideo></WorkTransformationVideo>
        <WorkSamsung></WorkSamsung>
        <WorkUxUi></WorkUxUi>
        <WorkAccenture></WorkAccenture>
        <WorkFiveAutomations></WorkFiveAutomations>
        <WorkIllustration></WorkIllustration>
      </Layout>
    </>
  )
}


