import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
// import Gallery from 'components/gallery';
import Title from 'components/title';
import Kaplow from 'components/kaplow';
import IOExample from 'components/io-example';
import Text from 'components/text';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
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
      <div>Hey, everyone. <br/> Thanks for stopping by.</div>
    </Kaplow>
    <h1>Scroll down!</h1>
    <section style={{ height: "1200px" }} />
    
    <Text>
        <h3>I am a plain old h3-tag</h3>
    </Text>
    <h1>Scroll back up and then down again to see if the animation will work again. Inspect the animated elements to see the classes change on scroll.</h1>
    <section style={{ height: "1200px" }} />
    {/* <Gallery items={data.homeJson.gallery} /> */}
    <div style={{ height: '50vh' }} />
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
