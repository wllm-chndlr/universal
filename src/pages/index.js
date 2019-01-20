import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import Title from 'components/title';
import Kaplow from 'components/kaplow';

// import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      {/* <div style={{ fontSize: '5rem' }}>
        yo yo yo
      </div> */}
      {/* <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal> */}
    </Box>
    <Kaplow>
      <div>

      </div>
      <div>
        Hey, everyone. Thanks for stopping by.
      </div>
      {/* <a href='https://placeholder.com/'>
        <img alt='placeholder' src='https://via.placeholder.com/150'/>
      </a> */}
    </Kaplow>
    <Gallery items={data.homeJson.gallery} />

    {/* <Kaplow>
      ching chang chong
    </Kaplow> */}
    {/* <Gallery items={data.homeJson.gallery} /> */}
    <div style={{ height: '100vh' }} />
    <IOExample />
    <IOExample />
    <IOExample />
    <IOExample />
    <IOExample />

  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
