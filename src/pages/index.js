import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Masonry from 'react-masonry-component'
import Layout from "../components/layout"
import Home from "../components/Home"

const IndexPage = ({ data }) => (
  <Layout translucentNav={true}>
    <HelmetDatoCms seo={data.allDatoCmsFrontpage.edges[0].node.seoMetaTags} />
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
        seoMetaTags {
          tags {
            tagName
            content
          }
        }
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
            title
            column
            columns
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
            textcolor {
              alpha
              blue
              green
              hex
              red
            }
            showButton
          }
          ... on DatoCmsHeroAnimation {
            descriptionNode{
              childMarkdownRemark{
                html
              }
            }
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
    allDatoCmsVideo {
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
  }
`
