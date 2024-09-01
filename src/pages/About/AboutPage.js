import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutMeSection from './AboutMeSection';
import SkillsSection from './SkillsSection';

const AboutContainer = styled(motion.div)`
  padding: 50px;
  text-align: center;
`;

function AboutPage() {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutMeSection />
      <SkillsSection />
    </AboutContainer>
  );
};

export default AboutPage;
