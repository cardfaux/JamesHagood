import React from 'react';
// import { graphql } from 'gatsby';
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import HomePage from '../components/Three/pages/homePage';
// import Layout from "../components/Layout.component"
// import StyledHero from "../components/StyledHero.component"
// import Banner from "../components/Banner.component"
// import About from "../components/Home/About.component"
// import Services from "../components/Home/Services.component"
import SEO from '../components/SEO.component';

// export default ({ data }) => {
export default () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <SEO
        title="Home"
        description="JamesHagood Design and Development, Building Modern WebSites with Your Ideas."
      />
      <HomePage />
    </div>
    // <Layout>
    //   <SEO title="Home" description="JamesHagood Design and Development, Building Modern WebSites with Your Ideas." />
    //   <StyledHero home="true" img={data.codeImg.childImageSharp.fluid}>
    //     <Banner
    //       title="FullStack JavaScript Developer"
    //       info="Designing, Developing, and Deploying Your Ideas To The World Wide Web"
    //     >
    //       <AniLink fade className="btn-secondary" to="/work">
    //         my work
    //       </AniLink>
    //     </Banner>
    //   </StyledHero>
    //   <About />
    //   <Services />
    // </Layout>
  );
};

// export const query = graphql`
//   query {
//     codeImg: file(relativePath: { eq: "code.png" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 4160) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
