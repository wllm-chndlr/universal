import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './kaplow.css';
import posed from 'react-pose';

import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'
import './TextComponent.css';

const AnimatedContainer = posed.div({
    enter: {
      y: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeInOut',
      },
    },
  });

const ViewStyle = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    <p>{ props.text }</p>
  </div>
);

// const Watch = ({ children }) => (
//     <AnimatedContainer>
//         <Container>
//             {/* {children} */}
//             <span>
//           <ViewStyle
//             text="I'm a component that uses data-aos='fade-up'"
//           />
//           { this.props.children }
//           {/* { children } */}
//         </span>
//         </Container>;
//     </AnimatedContainer>
// );

// Watch.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default Watch;

export default Watch(
  class TextComponent extends React.Component {
    render() {
      return(
        <span>
          <ViewStyle
            text="I'm a component that uses data-aos='fade-up'"
          />
          { this.props.children }
          {/* { children } */}
        </span>
      );
    }
  }
);
