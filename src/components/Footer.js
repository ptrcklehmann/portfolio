import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';


const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.pretinho};
  color: ${props => props.theme.colors.verde};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 100px;
    height: 15px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={1}
          pb={1}
          fontSize={1}
          style={{
          
            borderBottom: 'white 3px solid',
            display: 'inline-block',
          }}
        >
          2019 &copy; Patrick Lehmann 
        </Text>
      </span>
    </Fade>
  </FooterContainer>
);

export default Footer;
