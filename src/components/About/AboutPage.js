import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  padding: 50px;
  text-align: center;
`;

const AboutPage = () => (
  <AboutContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>About Me</h2>
    <p>
      This is the About section. You can use this space to introduce yourself, talk about your skills,
      and share links to your portfolio or contact information.
    </p>
  </AboutContainer>
);

export default AboutPage;
