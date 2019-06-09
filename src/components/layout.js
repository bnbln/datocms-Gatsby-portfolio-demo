import React, { Component } from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Header from "./Header";
import '../styles/index.sass'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
  },
  text: {
    primary: "#fff"
  },
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#fff'
    },
    secondary: {
      main: '#064260'
    },
  },
});

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {

      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
      allDatoCmsFrontpage{
        edges {
          node {
            id
          }
        }
      }
    }
  `}
    render={data => (
      <App data={data} /*info={info} menu={menu} social={social} frontpage={frontpage} frontpageNew={frontpageNew} */>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
            {children}
      </App>
    )}
  />
)


export default TemplateWrapper


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: 0
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      scroll: window.pageYOffset
    })
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateDimensions);
  }
  render() {
    console.log(this.props.data)
    return (
      <MuiThemeProvider theme={theme}>
        <Header info={this.props.data.datoCmsSite} social={this.props.data.allDatoCmsSocialProfile} scroll={this.state.scroll} isHome={true} />
        {this.props.children}
        {/* <Home frontpage={this.props.frontpage} info={this.props.info} header="lottie" /> */}
      </MuiThemeProvider>
    )
  }
}
