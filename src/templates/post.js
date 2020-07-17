import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post} }) => (
  <Layout>
    <h1 css={css`
      font-size: 8rem;
      letter-spacing: -.3rem;
      font-weight: 700;
    `}>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.80rem;
      `}
    >{post.frontmatter.date}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default PostTemplate