import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.component"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner.component"
import About from "../components/Home/About.component"
import Services from "../components/Home/Services.component"

export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="FullStack JavaScript Developer"
          info="Designing, Developing, and Deploying Your Ideas To The World Wide Web"
        >
          <Link className="btn-secondary" to="/work">
            my work
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
