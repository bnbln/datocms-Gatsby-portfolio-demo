import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import { homedir } from 'os';
import Home from "../components/Home"

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      <Home data={data} />
    </Masonry>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
            allDatoCmsFrontpage {
    edges {
      node {
        header {
          ... on DatoCmsHeroVideo {
            description
            video {
              height
              provider
              providerUid
              thumbnailUrl
              title
              url
              width
            }
            color {
              alpha
              blue
              green
              hex
              red
            }
            showButton
          }
          ... on DatoCmsHeroImage {
            description
            image {
              id
              size
              url
              format
            }
            color {
              alpha
              blue
              green
              hex
              red
            }
            showButton
          }
          ... on DatoCmsHeroAnimation {
            description
            animation
            color {
              alpha
              blue
              green
              hex
              red
            }
            showButton
          }
        }
      }
    }
  }
    allDatoCmsArticleVideo {
    edges {
      node {
        title
        video {
          url
          title
          provider
          providerUid
          thumbnailUrl
          width
          height
        }
      }
    }
  }
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
