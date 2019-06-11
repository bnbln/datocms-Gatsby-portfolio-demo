import React, { Component } from "react"
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


const TemplateWrapper = ({ data, children, ...props }) => (
  <App data={data} translucentNav={props.translucentNav}>
    {console.log(data)}
    <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      // seo={data.datoCmsFrontpage.seo}
    />
    {children}
  </App>
)


export default props => (
  <StaticQuery
    query={graphql`
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
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
      datoCmsFrontpage {
    seo {
      title
      description
      twitterCard
    }
    feed {
      ... on DatoCmsChronologisch {
        id
        projects
      }
      ... on DatoCmsKuratiert {
        id
        elements {
          id
          title
          
        }
      }
    }
  }
    }
    `}
    render={data => <TemplateWrapper data={data} {...props} />}
  />
)


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
    return (
      <MuiThemeProvider theme={theme}>
        <Header info={this.props.data.datoCmsSite} social={this.props.data.allDatoCmsSocialProfile} scroll={this.state.scroll} translucentNav={this.props.translucentNav} />
        <div style={{
          marginTop: this.props.translucentNav ? 0 : 50
        }}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
