import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, my name is Olga. 
    I am a developer passionate about building user-centered, accessible, 
    performant, maintainable applications with modern tools</h1>
    <p>Say Hello </p>
    
   
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
