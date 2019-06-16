import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hello
      <br /> My Name is Serge
    </h1>
    <p>
      I am a designer and full-stack developer from New York. I am working as a
      frontend developer at TommyJohn. I have been doing work with node, express
      and react. I have experience working with wordpress sites as well. Feel
      free to get in contact with{" "}
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
