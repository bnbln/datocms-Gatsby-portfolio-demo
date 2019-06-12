import React from 'react'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image'
import Layout from "../components/layout"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Contact = () => (
  <Layout translucentNav={false}>
    {/* <HelmetDatoCms seo={{title: "Contact"}} /> */}

    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" style={{
        textAlign: "center",
    }}>
      <Grid container justify="center" alignItems="center" style={{
        minHeight: "calc(100vh - 50px)"
      }}>

        <Grid item xs={11} md={8} md={6} lg={5}>
          <Typography variant="h2" gutterBottom>
            Kontakt
          </Typography>
          <TextField
            required
            fullWidth
            id="standard-name"
            label="Name"
            type="name" name="name"
            margin="normal"
            style={{ margin: 8 }}
          />
        <br/>
          <TextField
            required
            fullWidth
            id="standard-name"
            label="Mail"
            type="email"
            name="email"
            margin="normal"            
            style={{ margin: 8 }}
          />
          <br />
          <TextField
            required
            fullWidth
            id="standard-multiline-flexible"
            label="Multiline"
            name="message"
            multiline
            rows="4"
            style={{ margin: 8 }}
            margin="normal"
          />
          <br /> <br/><br/>
          <Button variant="outlined" color="secondary" type="submit">
            Senden
        </Button>
        </Grid>
      </Grid>

      </form>

  </Layout>
)

export default Contact