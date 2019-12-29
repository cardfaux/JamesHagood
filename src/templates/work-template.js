import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout.component';
import StyledTitle from '../components/StyledTitle';
import styles from '../css/single-work.module.css';

const workTemplate = ({ data }) => {
  const {
    title,
    published,
    languages,
    description: { description },
    image,
  } = data.work;
  console.log(description);

  return (
    <Layout>
      <section className={styles.work}>
        <div className={styles.center}>
          <div className={styles.imgContainer}>
            <div className={styles.title}>{title}</div>
            <Image fluid={image.fluid} className={styles.img} alt={title} />
            <div className={styles.footer}>Languages/Tools: {languages}</div>
          </div>
        </div>
        <div className={styles.description}>
          <StyledTitle title="brief" subtitle="description" />
          <h2>{description}</h2>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getWork($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do YYYY")
      languages
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default workTemplate;
