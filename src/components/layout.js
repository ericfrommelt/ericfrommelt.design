import React from "react"
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Header from '../components/header'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
  <>
    <Global 
      styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          ::selection {
            background-color: red;
            color: white;
          }

          a { 
            text-decoration: none;
            color: #000;
            }

          html,
          body {
            margin: 0;
            color: #000;
            font-family: "Ringside Regular SSm A", "Ringside Regular SSm B", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 18px;
            line-height: 1.8;

            /* remove margin for the main div that gatsby mounts into */
            > div {
              margin-top: 0;
            }

            h1 {
              color: #222;
              line-height: 1.1;
              font-family: "Quarto A", "Quarto B", Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              font-style: normal;
              font-weight: 400;
            }

              + * { 
                margin-top: 0.5rem;
            }

            h1 { font-size: 4rem; }
            h2 { 
              font-size: .9rem; 
              font-weight: 400;
              }
            h3 { font-size: 1rem; }

            small {
              font-size: .5rem;
              font-family: "Operator Mono A", "Operator Mono B";
              font-style: normal;
              font-weight: 400;
            }
            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `} 
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://use.typekit.net/cni2rpi.css"></link>
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7804816/7320412/css/fonts.css" />
      </Helmet>
      <div css={css`
        width: 100%;
        height: .5rem;
        background: #000;
      `}></div>
      <main
        css={css`
          max-width: 1170px;
          margin: 0 auto;
          min-height: 100vh;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
        `}
      >
        <Header></Header>
        <div>
          {children}
        </div>
      </main>
  </>
  )
}

export default Layout